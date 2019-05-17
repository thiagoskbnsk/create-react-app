const buildRootUrl = href => {
  if (href === 'localhost') return '//11.111.111.11';
};

export const ROOT_URL = buildRootUrl(window.location.hostname);
