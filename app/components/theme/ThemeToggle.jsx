import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button onClick={() => setTheme('light')} >
              <Image src="/theme/sun.png" alt="logo" height={25} width={25} />
            </button>
          ) : (
            <button onClick={() => setTheme('dark')}>
              <Image src="/theme/moon.png" alt="logo" height={25} width={25} />
            </button>
          )}
        </div>
  );
}