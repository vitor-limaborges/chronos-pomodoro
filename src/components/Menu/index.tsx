import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return savedTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event?.preventDefault();

    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to='/'
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </Link>
      <RouterLink
        className={styles.menuLink}
        href='/history/'
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='/settings/'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href='#'
        aria-label='Alterar Tema'
        title='Alterar Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
