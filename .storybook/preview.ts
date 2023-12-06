import type { Preview } from '@storybook/react';
import '../styles/global.css';

interface IBreakpoints {
  [key: string]: number;
}

const BREAKPOINTS_INT: IBreakpoints = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

interface ICustomViewports {
  [key: string]: {
    name: string;
    styles: {
      width: string;
      height: string;
    };
  };
}

const customViewports: ICustomViewports = {};

for (const [key, val] of Object.entries(BREAKPOINTS_INT)) {
  customViewports[key] = {
    name: key,
    styles: { width: `${val}px`, height: `${(key.charCodeAt(0) - 96) * 10}vh` },
  };
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: { viewports: customViewports },
  },
};

export default preview;
