import { FC } from 'react';
import ThemeSwitch from '../../utils/ThemeSwitch';
import Brand from '../brand/brand';

const Header: FC = () => {
  return (
    <header className="sticky top-0 max-width__wrapper w-full bg-secondary lg:py-3 xl:py-3 lg:px-4 xl:px-8 overflow-hidden">
      <div className="flex flex-row items-center justify-between ">
        <Brand />
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
