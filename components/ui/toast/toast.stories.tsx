import type { Meta, StoryObj } from '@storybook/react';

import { ErrorToast } from './toast';

const meta = {
  title: 'template/ErrorToast',
  component: ErrorToast,
} satisfies Meta<typeof ErrorToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Template: Story = {
  args: {
    message: '!oops something happened',
  },
};
