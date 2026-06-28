
function padTeletextNumber(value) {
  return String(value).padStart(2, '0');
}

function formatTeletextClock(now) {
  return `${padTeletextNumber(now.getHours())}:${padTeletextNumber(now.getMinutes())}:${padTeletextNumber(now.getSeconds())}`;
}

function formatTeletextDate(now) {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${months[now.getMonth()]} ${padTeletextNumber(now.getDate())}`;
}

function updateLocalBroadcastDateTime() {
  const now = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'LOCAL TIME';

  document.querySelectorAll('[data-local-clock]').forEach((clock) => {
    clock.textContent = formatTeletextClock(now);
    clock.setAttribute('title', timezone);
  });

  document.querySelectorAll('[data-local-date]').forEach((date) => {
    date.textContent = formatTeletextDate(now);
    date.setAttribute('title', timezone);
  });
}

function startLocalBroadcastClock() {
  updateLocalBroadcastDateTime();
  window.setInterval(updateLocalBroadcastDateTime, 1000);
}

function normalizeCategoryValue(value) {
  return (value || '')
    .toString()
    .trim()
    .toUpperCase();
}

function slugifyCategory(value) {
  const normalized = (value || '')
    .toString()
    .trim()
    .toLowerCase();

  const aliases = {
    'fashion': 'fashion',
    'fashion editorial': 'fashion',
    'fashion campaign': 'fashion',
    'lookbook photography': 'fashion',
    'lookbook': 'fashion',
    'editorial': 'fashion',
    'campaign': 'fashion',
    'lifestyle': 'lifestyle',
    'lifestyle photography': 'lifestyle',
    'social media content': 'lifestyle',
    'content': 'lifestyle',
    'fashion week': 'fashion-week',
    'fashion week photography': 'fashion-week',
    'events': 'events',
    'event photography': 'events'
  };

  if (aliases[normalized]) return aliases[normalized];

  return normalized
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function findCategoryFromSlug(slug) {
  const page = document.querySelector('[data-projects-page]');
  if (!page || !slug) return '';

  const normalizedSlug = slugifyCategory(slug);
  const match = page.querySelector(`[data-category-slug="${CSS.escape(normalizedSlug)}"]`);
  return match ? match.getAttribute('data-category-filter') || '' : '';
}

function applyCategoryTheme(themeSlug) {
  const screen = document.querySelector('.teletext-screen');
  if (!screen || !themeSlug) return;
  Array.from(screen.classList).forEach((className) => {
    if (className.startsWith('category-theme-')) screen.classList.remove(className);
  });
  screen.classList.add('category-theme');
  screen.classList.add(`category-theme-${themeSlug}`);
}



function preloadProjectPreviewImages() {
  const page = document.querySelector('[data-projects-page]');
  if (!page) return;

  const urls = new Set();

  page.querySelectorAll('[data-project-image]').forEach((item) => {
    const imageUrl = item.getAttribute('data-project-image');
    if (imageUrl) urls.add(imageUrl);
  });

  urls.forEach((imageUrl) => {
    const image = new Image();
    image.decoding = 'async';
    image.src = imageUrl;
  });
}


function setActiveProjectPreview(slug) {
  const page = document.querySelector('[data-projects-page]');
  if (!page || !slug) return;

  const safeSlug = CSS.escape(slug);
  const preview = page.querySelector('[data-project-preview]');
  const activeProject = page.querySelector(`[data-featured-project][data-project-slug="${safeSlug}"], [data-table-project][data-project-slug="${safeSlug}"]`);
  const selectableProjects = page.querySelectorAll('[data-featured-project], [data-table-project]');

  selectableProjects.forEach((project) => {
    const isActive = project.getAttribute('data-project-slug') === slug;
    project.classList.toggle('featured-item--active', isActive);
    project.classList.toggle('table-row--active', isActive);
    if (isActive) project.setAttribute('aria-current', 'true');
    else project.removeAttribute('aria-current');
  });

  if (!preview || !activeProject) return;

  const title = activeProject.getAttribute('data-project-title') || '';
  const category = activeProject.getAttribute('data-project-category') || '';
  const image = activeProject.getAttribute('data-project-image') || '';
  const alt = activeProject.getAttribute('data-project-alt') || title;
  const fallbackImage = activeProject.getAttribute('data-project-fallback-image') || '';
  const location = activeProject.getAttribute('data-project-location') || '';
  const year = activeProject.getAttribute('data-project-year') || '';
  const pageNumber = activeProject.getAttribute('data-project-page') || '';
  const href = activeProject.getAttribute('data-project-href') || activeProject.getAttribute('href') || '#';

  const titleTarget = preview.querySelector('[data-preview-title]');
  const categoryTarget = preview.querySelector('[data-preview-category]');
  const metaTarget = preview.querySelector('[data-preview-meta]');
  const pageTarget = preview.querySelector('[data-preview-page]');
  const openButton = preview.querySelector('[data-open-active-project]');
  const img = preview.querySelector('.photo-slot');

  if (titleTarget) titleTarget.textContent = title;
  if (categoryTarget) categoryTarget.textContent = category;
  if (metaTarget) metaTarget.textContent = `${location} / ${year}`;
  if (pageTarget) pageTarget.textContent = pageNumber;
  if (openButton) openButton.setAttribute('href', href);

  preview.setAttribute('data-project-slug', slug);

  if (img && image && img.getAttribute('src') !== image) {
    if (fallbackImage) img.dataset.fallbackSrc = fallbackImage;
    img.setAttribute('src', image);
    img.setAttribute('alt', alt);
  }
}

function selectProjectFromElement(projectElement) {
  if (!projectElement) return false;
  const slug = projectElement.getAttribute('data-project-slug');
  if (!slug) return false;
  setActiveProjectPreview(slug);
  return true;
}



function updateVisibleProjectNumbers() {
  const page = document.querySelector('[data-projects-page]');
  if (!page) return;

  const visibleProjects = Array.from(page.querySelectorAll('[data-featured-project]'))
    .filter((item) => !item.classList.contains('is-hidden'));

  const emptyMessage = page.querySelector('[data-empty-category]');
  if (emptyMessage) emptyMessage.classList.toggle('is-hidden', visibleProjects.length > 0);

  visibleProjects.forEach((item, index) => {
    const numberTarget = item.querySelector('.feat-num');
    if (numberTarget) numberTarget.textContent = String(index + 1).padStart(2, '0');
  });
}


function setProjectsCategory(category, updateUrl = false) {
  const page = document.querySelector('[data-projects-page]');
  if (!page || !category) return;

  const normalizedCategory = normalizeCategoryValue(category);
  page.setAttribute('data-active-category', normalizedCategory);

  const categoryButtons = page.querySelectorAll('[data-category-filter]');
  let activeTheme = page.getAttribute('data-active-theme') || 'fashion-week';
  categoryButtons.forEach((button) => {
    const buttonCategory = normalizeCategoryValue(button.getAttribute('data-category-filter'));
    const isActive = buttonCategory === normalizedCategory;
    button.classList.toggle('category-item--active', isActive);
    if (isActive) activeTheme = button.getAttribute('data-category-theme') || activeTheme;
  });
  page.setAttribute('data-active-theme', activeTheme);
  applyCategoryTheme(activeTheme);

  const featuredProjects = page.querySelectorAll('[data-featured-project]');
  const tableProjects = page.querySelectorAll('[data-table-project]');
  const heroes = page.querySelectorAll('[data-project-hero]');
  const heading = page.querySelector('[data-category-heading]');
  const countLabel = page.querySelector('[data-visible-project-count]');
  const emptyState = page.querySelector('[data-empty-category]');

  if (heading) heading.textContent = `${normalizedCategory} PROJECTS`;

  let firstVisibleSlug = '';
  let visibleCount = 0;

  featuredProjects.forEach((project) => {
    const match = normalizeCategoryValue(project.getAttribute('data-project-category')) === normalizedCategory;
    project.classList.toggle('is-hidden', !match);
    project.classList.remove('featured-item--active');
    if (match) visibleCount += 1;
    if (match && !firstVisibleSlug) firstVisibleSlug = project.getAttribute('data-project-slug') || '';
  });

  tableProjects.forEach((project) => {
    const match = normalizeCategoryValue(project.getAttribute('data-project-category')) === normalizedCategory;
    project.classList.toggle('is-hidden', !match);
    if (match && !firstVisibleSlug) firstVisibleSlug = project.getAttribute('data-project-slug') || '';
  });

  if (firstVisibleSlug) {
    setActiveProjectPreview(firstVisibleSlug);
  }

  if (countLabel) countLabel.textContent = String(visibleCount);
  if (emptyState) emptyState.classList.toggle('is-hidden', visibleCount > 0);

  updateVisibleProjectNumbers();

  if (updateUrl) {
    const activeButton = page.querySelector(`[data-category-filter][data-category-filter="${CSS.escape(category)}"]`);
    const slug = activeButton ? activeButton.getAttribute('data-category-slug') : slugifyCategory(category);
    const nextUrl = slug ? `${window.location.pathname}?category=${encodeURIComponent(slug)}` : window.location.pathname;
    window.history.replaceState({}, '', nextUrl);
  }
}


function markProjectsReady() {
  const screen = document.querySelector('.projects-screen-clean-images');
  if (!screen) return;
  screen.classList.add('projects-is-ready');
}


function setupProjectsCategorySwitching() {
  const page = document.querySelector('[data-projects-page]');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const categoryFromUrl = findCategoryFromSlug(params.get('category'));
  const initialCategory = categoryFromUrl || page.getAttribute('data-active-category') || 'Fashion';
  preloadProjectPreviewImages();
  setProjectsCategory(initialCategory);
  markProjectsReady();
}

document.addEventListener('click', (event) => {
  const categoryButton = event.target.closest('[data-category-filter]');
  if (categoryButton) {
    const mobileInlinePreviewTest = window.matchMedia('(max-width: 640px)').matches;
    if (mobileInlinePreviewTest && event.target?.closest?.('.mobile-inline-open')) {
      return;
    }
    const mobileCategoriesListOnly = window.matchMedia('(max-width: 640px)').matches;
    if (mobileCategoriesListOnly) {
      window.location.href = projectLink.href;
      return;
    }

    event.preventDefault();
    setProjectsCategory(categoryButton.getAttribute('data-category-filter'), true);
    return;
  }

  const projectSelector = event.target.closest('[data-featured-project], [data-table-project]');
  if (projectSelector) {
    event.preventDefault();
    selectProjectFromElement(projectSelector);
    return;
  }

  const selectable = event.target.closest('[data-selectable]');
  if (selectable) {
    const group = selectable.closest('[data-group]');
    if (group) {
      const activeClass = group.getAttribute('data-active');
      group.querySelectorAll('[data-selectable]').forEach((element) => element.classList.remove(activeClass));
      selectable.classList.add(activeClass);
    }
  }

  const action = event.target.closest('[data-action]');
  if (!action) return;

  const command = action.getAttribute('data-action');
  if (command === 'top') window.scrollTo(0, 0);
  if (command === 'next') stepImage(1);
  if (command === 'prev') stepImage(-1);
});

function stepImage(direction) {
  const counter = document.querySelector('[data-image-counter]');
  if (!counter) return;

  const total = Number.parseInt(counter.getAttribute('data-total') || '18', 10);
  const current = Number.parseInt(counter.getAttribute('data-index') || '3', 10);
  const next = ((current - 1 + direction + total) % total) + 1;
  const padded = String(next).padStart(2, '0');
  const totalPadded = String(total).padStart(2, '0');

  counter.setAttribute('data-index', String(next));
  counter.textContent = `IMAGE ${padded}/${totalPadded}`;

  const pageCode = document.querySelector('[data-page-code]');
  if (pageCode) pageCode.textContent = `P101/${padded}`;
}

function measureSingleDotWidth(leader) {
  const computed = window.getComputedStyle(leader);
  const probe = document.createElement('span');
  probe.textContent = '.';
  probe.style.position = 'absolute';
  probe.style.left = '-9999px';
  probe.style.top = '-9999px';
  probe.style.visibility = 'hidden';
  probe.style.whiteSpace = 'nowrap';
  probe.style.font = computed.font;
  probe.style.letterSpacing = '0px';
  document.body.appendChild(probe);
  const width = probe.getBoundingClientRect().width;
  probe.remove();
  return Math.max(1, width);
}

function updateMenuDotLeaders() {
  const dotLeaders = document.querySelectorAll('.menu-dots');
  if (!dotLeaders.length) return;

  dotLeaders.forEach((leader) => {
    const width = leader.getBoundingClientRect().width;
    if (width <= 0) {
      leader.textContent = '';
      leader.style.letterSpacing = '0px';
      return;
    }

    const dotWidth = measureSingleDotWidth(leader);
    const dotCount = Math.max(0, Math.floor(width / dotWidth));

    leader.textContent = '.'.repeat(dotCount);

    if (dotCount > 1) {
      const remainingSpace = Math.max(0, width - (dotCount * dotWidth));
      leader.style.letterSpacing = `${remainingSpace / (dotCount - 1)}px`;
    } else {
      leader.style.letterSpacing = '0px';
    }
  });
}

let dotLeaderResizeFrame;
function requestMenuDotLeaderUpdate() {
  window.cancelAnimationFrame(dotLeaderResizeFrame);
  dotLeaderResizeFrame = window.requestAnimationFrame(updateMenuDotLeaders);
}

window.addEventListener('DOMContentLoaded', () => {
  startLocalBroadcastClock();
  setupProjectsCategorySwitching();
  updateMenuDotLeaders();
});
window.addEventListener('load', updateMenuDotLeaders);
window.addEventListener('resize', requestMenuDotLeaderUpdate);

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateMenuDotLeaders);
}

