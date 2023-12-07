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
        storageKey="_b3b5ef01d57214f0a0d1836819294197"
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default ThemeLayout;
