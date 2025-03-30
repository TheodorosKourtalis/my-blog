import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDark = localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setEnabled(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !enabled;
    setEnabled(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.theme = newTheme ? 'dark' : 'light';
  };

  return (
    <button onClick={toggleDarkMode} className="text-sm font-body ml-auto">
      {enabled ? 'light mode' : 'dark mode'}
    </button>
  );
}