# Marcus Hartelt — Teletext Astro Portfolio

Astro project for the Marcus Hartelt photography portfolio.

## Run

```bash
npm install
npm run dev
```

## Font

Add the local font here:

```txt
public/fonts/teletext50.otf
```

The generated ZIP intentionally does not include `public/fonts/**`, so your local font file will not be overwritten.

## Category themes

Project categories use original Teletext colors only. The project overview and project detail pages switch theme colors by category:

- Fashion Week Photography
- Fashion Editorial
- Fashion Campaign
- Lookbook Photography
- Social Media Content
- Lifestyle Photography
- Event Photography

## Legal

Legal texts are placeholders and must be checked before publishing.


## Lokale Projektbilder

Lege deine exportierten Bilder hier ab:

```txt
public/images/projects/[project-slug]/
```

Beispiel:

```txt
public/images/projects/rebekka-ruetz-aw26/
  rebekka-ruetz-aw26-berlin-fashion-week-runway-01.webp
  rebekka-ruetz-aw26-berlin-fashion-week-runway-02.webp
```

Beim Start wird automatisch erzeugt:

```txt
src/data/generated/projectImages.ts
```

Manuell ausführen:

```bash
npm run generate-images
```

`npm run dev` und `npm run build` führen das Script automatisch vorher aus.


## Work-Preview-Bilder lokal laden

Die Preview-Bilder für die Projektübersicht werden per Script von der alten `/work` Seite gezogen, optimiert und lokal gespeichert:

```bash
pip3 install requests pillow playwright
python3 -m playwright install chromium
python3 scripts/download-work-preview-images.py
```

Output:

```txt
public/images/previews/
```

Die Projektübersicht nutzt danach automatisch:

```txt
public/images/previews/[project-slug]-work-preview.webp
```

Die Detailbilder bleiben separat in:

```txt
public/images/projects/[project-slug]/
```
