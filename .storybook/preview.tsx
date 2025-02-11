import '@mantine/core/styles.css';

import React from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...theme, colorScheme: 'dark' },
    light: { ...theme, colorScheme: 'light' },
  },
};

const channel = addons.getChannel();

export const decorators = [
  (Story) => {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
      channel.on(DARK_MODE_EVENT_NAME, setIsDark);
      return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
    }, []);

    return (
      <MantineProvider theme={theme} defaultColorScheme={isDark ? 'dark' : 'light'}>
        <Story />
      </MantineProvider>
    );
  },
];
