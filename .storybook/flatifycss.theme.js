// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#1cb0f6',
  colorSecondary: '#099EE3',

  // UI
  appBg: '#fff',
  appContentBg: '#fff',
  appBorderColor: '#eff2f6',
  appBorderRadius: 12,

  // Typography
  fontBase: '"Nunito", "Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2f4051',
  textInverseColor: '#eff2f6',

  // Toolbar default and active colors
  barTextColor: '#aec0d0',
  barSelectedColor: '#1cb0f6',
  barBg: '#fff',

  // Form colors
  inputBg: '#eff2f6',
  inputBorder: '#ced9e3',
  inputTextColor: '#2f4051',
  inputBorderRadius: 12,

  brandTitle: 'React FlatifyCSS',
  brandUrl: 'https://react.flatifycss.com/',
  brandImage:
    'https://github.com/amir2mi/react-flatifycss/raw/master/website/public/react-flatify-text.svg',
  brandTarget: '_self',
});
