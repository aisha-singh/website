'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = { theme: Theme; changeTheme: () => void };

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  changeTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setMounted(true);
      return;
    }

    const stored = (localStorage.getItem('theme') as Theme) || 'light';

    document.documentElement.setAttribute('data-theme', stored);
    setTheme(stored);
    setMounted(true);
  }, []);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
return useContext(ThemeContext);
}