'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex items-center'>
      {resolvedTheme === 'dark' ? (
        <button onClick={() => setTheme('light')}>
          <FaSun className='text-2xl text-white' />
        </button>
      ) : (
        <button onClick={() => setTheme('dark')}>
          <BsFillMoonStarsFill className='text-2xl' />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
