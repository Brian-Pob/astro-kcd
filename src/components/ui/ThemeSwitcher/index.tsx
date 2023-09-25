// SolidJS
import { createSignal, onMount, Show } from 'solid-js';

import s from './style.module.scss';

const ThemeSwitcher = () => {
  const [theme, setTheme] = createSignal('dark');

  const toggleTheme = () => {
    setTheme(theme() === 'light' ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', theme());
    localStorage.setItem('theme', theme());
  };

  onMount(() => {
    // set theme to data-theme attribute of html
    const _theme = document.documentElement.getAttribute('data-theme');
    if (_theme) {
      setTheme(_theme);
    }
  });

  return (
    <>
      <button class={s['theme-switcher-btn']} onClick={toggleTheme}>
        <span class='sr-only'>Toggle Theme</span>
        <span aria-hidden='true'>
          <Show when={theme() === 'dark'} fallback={<i class='ph ph-sun'></i>}>
            <i class='ph ph-moon'></i>
          </Show>
        </span>
      </button>
    </>
  );
};

export default ThemeSwitcher;
