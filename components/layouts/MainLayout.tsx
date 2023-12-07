import { FC, ReactNode } from 'react';
import Header from '../ui/header/header';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default MainLayout;
