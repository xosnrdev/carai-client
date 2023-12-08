'use client';

import { FC, ReactNode } from 'react';
import { ToastProvider } from '../providers/ToastProvider';
import Header from '../ui/header/header';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => (
  <>
    <Header />
    <ToastProvider>
      <main>{children}</main>
    </ToastProvider>
  </>
);

export default MainLayout;
