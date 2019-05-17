const buildRootUrl = href => {
  // if (href === 'localhost' || href === '35.196.131.166') return '//localhost:4008';
  if (href === "localhost" || href === "35.196.131.166")
    return "//35.196.104.64";
};

export const ROOT_URL = buildRootUrl(window.location.hostname);
