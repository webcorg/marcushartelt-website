#!/usr/bin/env python3
from __future__ import annotations

import csv
import io
import re
import shutil
import time
from pathlib import Path
from urllib.parse import unquote, urlsplit

import requests
from PIL import Image, ImageOps, ImageFilter
from playwright.sync_api import sync_playwright

BASE_URL = "https://www.marcushartelt.com"
WORK_URL = f"{BASE_URL}/work"

# Preview-Bilder sollen klein und schnell sein.
MAX_BYTES = 150 * 1024

PROJECTS = [
    ("collective-bikes-2026", "collective-bikes-2026-work-preview.webp"),
    ("rebekka-ruetz-aw26", "rebekka-ruetz-aw26-work-preview.webp"),
    ("stays-essentials-aw26", "stays-essentials-aw26-work-preview.webp"),
    ("seeds-management-2025", "seeds-management-2025-work-preview.webp"),
    ("two-management-ny-2025", "two-management-ny-work-preview.webp"),
    ("hengdi-wang-ss26", "hengdi-wang-ss26-work-preview.webp"),
    ("poet-lab-ss26", "poet-lab-ss26-work-preview.webp"),
    ("meyer-optik-goerlitz-2025", "meyer-optik-goerlitz-work-preview.webp"),
    ("w1p-studios-ss26", "w1p-studios-ss26-work-preview.webp"),
    ("vanessa-baernthol-ss26", "vanessa-baernthol-ss26-work-preview.webp"),
    ("emanuel-ungaro-ss26", "emanuel-ungaro-ss26-work-preview.webp"),
    ("walter-van-beirendonck-ss26", "walter-van-beirendonck-ss26-work-preview.webp"),
    ("about-you-x-urban-sports-club-2025", "about-you-x-urban-sports-club-work-preview.webp"),
    ("poet-lab-spring-love-2025", "poet-lab-spring-love-work-preview.webp"),
    ("fabletics-2025", "fabletics-work-preview.webp"),
    ("w1p-studios-x-timo-kurz-2025", "w1p-studios-x-timo-kurz-work-preview.webp"),
    ("footlocker-x-blockschmidt-2025", "footlocker-x-blockschmidt-work-preview.webp"),
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/537.36 Chrome/124 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
}


def clean_url(url: str) -> str:
    url = unquote(url or "")
    url = url.replace("\\u0026", "&").replace("\\/", "/")
    return url.split("#", 1)[0]


def is_framer_image(url: str) -> bool:
    return "framerusercontent.com/images/" in url


def image_key(url: str) -> str:
    match = re.search(r"/images/([^/?#]+)", url)
    if match:
        return match.group(1).split(".")[0]
    parsed = urlsplit(url)
    return parsed.path


def prepare_image(img: Image.Image) -> Image.Image:
    img = ImageOps.exif_transpose(img)

    if img.mode not in ("RGB", "RGBA"):
        img = img.convert("RGB")

    if img.mode == "RGBA":
        bg = Image.new("RGB", img.size, (255, 255, 255))
        bg.paste(img, mask=img.split()[-1])
        return bg

    return img.convert("RGB")


def resize_for_long_edge(img: Image.Image, long_edge: int) -> Image.Image:
    scale = min(1.0, long_edge / max(img.size))
    size = (
        max(1, round(img.size[0] * scale)),
        max(1, round(img.size[1] * scale)),
    )
    resized = img.resize(size, Image.Resampling.LANCZOS)
    return resized.filter(ImageFilter.UnsharpMask(radius=0.55, percent=45, threshold=4))


def save_webp_bytes(img: Image.Image, quality: int) -> bytes:
    buf = io.BytesIO()
    img.save(buf, format="WEBP", quality=quality, method=6)
    return buf.getvalue()


def encode_preview_under_150kb(img: Image.Image) -> tuple[bytes, tuple[int, int], int]:
    img = prepare_image(img)

    # Work-Preview: lieber etwas kleiner und sauber als groß/matschig.
    for long_edge in [1400, 1320, 1240, 1160, 1080, 1000, 920]:
        resized = resize_for_long_edge(img, long_edge)

        best = None
        best_q = None
        low, high = 62, 88

        while low <= high:
            q = (low + high) // 2
            data = save_webp_bytes(resized, q)

            if len(data) <= MAX_BYTES:
                best = data
                best_q = q
                low = q + 1
            else:
                high = q - 1

        if best is not None:
            return best, resized.size, best_q

    resized = resize_for_long_edge(img, 850)

    for q in [60, 56, 52, 48, 44, 40]:
        data = save_webp_bytes(resized, q)
        if len(data) <= MAX_BYTES:
            return data, resized.size, q

    return data, resized.size, q


def download_image(url: str) -> Image.Image | None:
    try:
        response = requests.get(url, headers=HEADERS, timeout=60)
        response.raise_for_status()
        img = Image.open(io.BytesIO(response.content))
        img.load()
        return img
    except Exception as exc:
        print(f"  ! Bild konnte nicht geladen werden: {exc}")
        return None


def collect_work_preview_urls(page) -> list[str]:
    page.goto(WORK_URL, wait_until="networkidle", timeout=60000)
    page.wait_for_timeout(1000)

    # Scroll, damit Framer Lazy-Images lädt.
    last_height = 0
    for _ in range(8):
        height = page.evaluate("document.body.scrollHeight")
        if height == last_height:
            break
        last_height = height

        y = 0
        while y <= height:
            page.evaluate("(y) => window.scrollTo(0, y)", y)
            page.wait_for_timeout(300)
            y += 700

    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(500)

    items = page.evaluate(
        """
        () => {
          function cleanUrl(url) {
            if (!url) return '';
            return url.split('#')[0];
          }

          function urlsFromBackground(value) {
            const urls = [];
            if (!value || value === 'none') return urls;
            const matches = [...value.matchAll(/url\\(["']?([^"')]+)["']?\\)/g)];
            for (const m of matches) urls.push(m[1]);
            return urls;
          }

          function closestWorkHref(el) {
            const link = el.closest('a[href*="/work/"]');
            return link ? link.href || link.getAttribute('href') || '' : '';
          }

          const raw = [];

          Array.from(document.images).forEach((img, domIndex) => {
            const rect = img.getBoundingClientRect();
            raw.push({
              kind: 'img',
              domIndex,
              src: cleanUrl(img.currentSrc || img.src || ''),
              top: rect.top + window.scrollY,
              left: rect.left + window.scrollX,
              width: rect.width,
              height: rect.height,
              naturalWidth: img.naturalWidth || 0,
              naturalHeight: img.naturalHeight || 0,
              href: closestWorkHref(img)
            });
          });

          Array.from(document.querySelectorAll('*')).forEach((el, domIndex) => {
            const style = window.getComputedStyle(el);
            const urls = urlsFromBackground(style.backgroundImage);
            if (!urls.length) return;

            const rect = el.getBoundingClientRect();
            urls.forEach((src) => {
              raw.push({
                kind: 'background',
                domIndex,
                src: cleanUrl(src),
                top: rect.top + window.scrollY,
                left: rect.left + window.scrollX,
                width: rect.width,
                height: rect.height,
                naturalWidth: 0,
                naturalHeight: 0,
                href: closestWorkHref(el)
              });
            });
          });

          return raw
            .filter(item => item.src && item.src.includes('framerusercontent.com/images/'))
            .filter(item => Math.max(item.width, item.height, item.naturalWidth, item.naturalHeight) >= 320)
            .filter(item => item.width >= 80 && item.height >= 80)
            .filter(item => item.href && item.href.includes('/work/'))
            .sort((a, b) => {
              const rowA = Math.round(a.top / 12);
              const rowB = Math.round(b.top / 12);
              if (rowA !== rowB) return rowA - rowB;
              if (a.left !== b.left) return a.left - b.left;
              return a.domIndex - b.domIndex;
            });
        }
        """
    )

    # Deduplicate by image asset.
    seen = set()
    urls = []

    for item in items:
        url = clean_url(item["src"])
        key = image_key(url)

        if not is_framer_image(url):
            continue

        if key in seen:
            continue

        seen.add(key)
        urls.append(url)

    return urls


def main() -> None:
    out_dir = Path("public/images/previews")
    debug_dir = Path("debug/work-previews")

    if out_dir.exists():
        shutil.rmtree(out_dir)

    out_dir.mkdir(parents=True, exist_ok=True)
    debug_dir.mkdir(parents=True, exist_ok=True)

    rows = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 1440, "height": 1800},
            device_scale_factor=1,
            user_agent=HEADERS["User-Agent"],
        )
        page = context.new_page()

        urls = collect_work_preview_urls(page)

        try:
            page.screenshot(path=str(debug_dir / "work-page.png"), full_page=True)
            (debug_dir / "work-page.html").write_text(page.content(), encoding="utf-8")
        except Exception:
            pass

        browser.close()

    print(f"Gefundene Work-Preview-Bilder: {len(urls)}")

    if len(urls) < len(PROJECTS):
        print("")
        print("WARNUNG: Es wurden weniger Preview-Bilder gefunden als Projekte.")
        print("Die Reihenfolge wird trotzdem von oben nach unten / links nach rechts übernommen.")
        print("Falls etwas fehlt, debug/work-previews/work-page.png prüfen.")
        print("")

    for index, (slug, file_name) in enumerate(PROJECTS):
        if index >= len(urls):
            print(f"! Kein Bild für {slug}")
            continue

        source_url = urls[index]
        print(f"{index + 1:02d} {slug}")

        img = download_image(source_url)

        if img is None:
            continue

        original = img.size
        data, optimized, quality = encode_preview_under_150kb(img)

        out_file = out_dir / file_name
        out_file.write_bytes(data)

        size_kb = round(len(data) / 1024, 1)
        print(f"  ✓ {file_name} — {size_kb} KB, q{quality}, {optimized[0]}x{optimized[1]}")

        rows.append({
            "order": index + 1,
            "project": slug,
            "file": str(out_file),
            "original_px": f"{original[0]}x{original[1]}",
            "optimized_px": f"{optimized[0]}x{optimized[1]}",
            "quality": quality,
            "size_kb": size_kb,
            "source_url": source_url,
        })

        time.sleep(0.08)

    with (out_dir / "preview-optimization-overview.csv").open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(
            f,
            fieldnames=["order", "project", "file", "original_px", "optimized_px", "quality", "size_kb", "source_url"],
        )
        writer.writeheader()
        writer.writerows(rows)

    print("")
    print("Fertig: public/images/previews/")
    print("Danach `npm run dev` neu starten.")


if __name__ == "__main__":
    main()
