'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: [
      '#E6EDFD', // 0
      '#C4D5FA', // 1
      '#A2BEF7', // 2
      '#80A6F4', // 3
      '#5E8EF1', // 4
      '#1C64F2', // 5 - our main primary color
      '#1755CC', // 6
      '#1346A6', // 7
      '#0E3780', // 8
      '#0A285A', // 9
    ],
  },

  components: {
    ActionIcon: {
      defaultProps: {
        color: 'gray', // This will override the primary color default
        variant: 'subtle',
      },
      styles: {
        root: {
          // This ensures the icon color follows the text color in both light and dark modes
          color: 'var(--mantine-color-text)',
        },
      },
    },
    Button: {
      defaultProps: {
        color: 'gray',
        variant: 'subtle',
      },
      styles: {
        root: {
          color: 'var(--mantine-color-text)',
        },
      },
    },
  },

  // Dark mode specific customizations
  other: {
    logoTextColor: {
      light: 'var(--mantine-color-primary-5)',
      dark: 'var(--mantine-color-primary-4)', // Slightly lighter in dark mode for better contrast
    },
    logoIconColor: {
      light: 'var(--mantine-color-primary-5)',
      dark: 'var(--mantine-color-primary-4)',
    },
  },
});
