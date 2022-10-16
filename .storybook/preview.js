// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
import 'flatifycss/dist/css/flatify-min.css';
import './custom.css';
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  options: {
    storySort: {
      order: ['Documents', 'Content', 'Forms', 'Buttons', 'Components'],
    },
  },
};
