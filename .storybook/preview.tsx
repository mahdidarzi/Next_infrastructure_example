import { Preview } from "@storybook/nextjs";
import '../app/globals.scss';

const withThemeProvider = (Story: any, context: any) => {

  const theme = context.globals.theme || 'dark';

  return (
    <div data-theme={theme} style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
      <Story {...context} />
    </div>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
      },
    },
  },
};

export default preview;