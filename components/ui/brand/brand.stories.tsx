import type { Meta, StoryObj } from '@storybook/react';

import Brand from './brand';

const meta = {
  title: 'template/Brand',
  component: Brand,
} satisfies Meta<typeof Brand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
