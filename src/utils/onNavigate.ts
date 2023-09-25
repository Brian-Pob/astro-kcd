function onNavigate(...args: Function[] | (() => void)[]) {
  document.addEventListener('astro:after-swap', () => {
    args.forEach((func) => {
      func();
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    args.forEach((func) => {
      func();
    });
  });

  window.addEventListener('load', () => {
    args.forEach((func) => {
      func();
    });
  });
}

export default onNavigate;
