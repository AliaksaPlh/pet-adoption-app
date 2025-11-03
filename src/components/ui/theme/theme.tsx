import { useTheme } from '@/context/Themecontext';
import styles from './theme.module.scss';

const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.themetoggle} ${styles.secondary}`}
      onClick={toggleTheme}
    >
      {theme === 'light' ? '🌑' : '☀️'}
    </button>
  );
};

export default ThemeButton;
