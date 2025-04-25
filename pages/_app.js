import '../styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  // Состояние для темной темы
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли сохраненная информация о теме в localStorage
    const storedTheme = localStorage.getItem('dark-mode');
    if (storedTheme === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  // Функция для переключения между темной и светлой темой
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
    }
  };

  return (
    <div>
      <header>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
        </button>
      </header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
