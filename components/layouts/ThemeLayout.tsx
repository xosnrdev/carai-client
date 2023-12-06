import { FC, ReactNode } from 'react';
import { ThemeProvider } from '../providers/ThemeProvider';

interface IThemeLayout {
  children: ReactNode;
}

const ThemeLayout: FC<IThemeLayout> = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="theme"
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default ThemeLayout;
