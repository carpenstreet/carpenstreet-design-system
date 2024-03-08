import { mergeConfig } from 'vite';
export default {
  stories: ['../src/components/**/*.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.base = process.env.BASE_PATH || config.base;
    return mergeConfig(config, {});
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
};
