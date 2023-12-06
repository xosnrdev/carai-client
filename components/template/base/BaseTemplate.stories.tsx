import type { Meta, StoryObj } from '@storybook/react';

import BaseTemplate from './BaseTemplate';

const meta = {
  title: 'template/BaseTemplate',
  component: BaseTemplate,
} satisfies Meta<typeof BaseTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
