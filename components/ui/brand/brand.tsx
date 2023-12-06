import Image from 'next/image';
import { FC } from 'react';

const Brand: FC = ({ ...props }) => (
  <Image
    src={'/carai.svg'}
    alt="brand logo"
    {...props}
    width={110}
    height={50}
    priority
  />
);

export default Brand;
