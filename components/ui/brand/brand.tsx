'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Brand: FC = ({ ...props }) => {
  const { resolvedTheme } = useTheme();

  const logoSrc =
    resolvedTheme === 'dark' ? '/carai-dark.svg' : 'carai-light.svg';

  return (
    <Link href={'/'}>
      <Image
        src={logoSrc}
        alt="brand logo"
        {...props}
        width={110}
        height={50}
        priority
        className="select-none pointer-events-none"
      />
    </Link>
  );
};

export default Brand;
