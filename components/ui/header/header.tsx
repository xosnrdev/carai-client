import { FC } from 'react';
import ThemeSwitch from '../../utils/ThemeSwitch';
import Brand from '../brand/brand';

const Header: FC = () => {
  return (
    <header className="max-width__wrapper w-full bg-secondary lg:py-3 xl:py-3">
      <div className="flex flex-row items-center justify-between ">
        <Brand />
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
