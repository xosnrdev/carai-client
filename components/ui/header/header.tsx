import React, { FC } from 'react';
import Brand from '../brand/brand';
import ThemeSwitch from '../../utils/ThemeSwitch';

const Header: FC = () => {
  return (
    <header className="max-width__wrapper w-full bg-secondary lg:py-3 xl:py-3">
      <div className="flex flex-row justify-between items-center">
        <Brand />
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
