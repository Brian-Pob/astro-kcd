const checkTheme = () => {
  if (typeof window !== 'undefined') {
    const theme = window.localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      window.localStorage.setItem('theme', 'dark');
    }
  }

  // WARNING: Extremely scuffed implementation to prevent FARTing
  // read more https://css-tricks.com/flash-of-inaccurate-color-theme-fart/

  // remove sr-only class from html after 0.1s
  // to make sure that the class is removed after the transition

  setTimeout(() => {
    document.documentElement.classList.remove('sr-only');
  }, 200);
};

export default checkTheme;
