import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useMantineColorScheme } from '@mantine/core';
import { NavigationRightActions } from './NavigationRightActions';

const meta = {
  title: 'Navigation/NavigationRightActions',
  component: NavigationRightActions,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => {
      const { colorScheme, toggleColorScheme } = useMantineColorScheme();
      const isDark = colorScheme === 'dark';
      useEffect(() => {
        console.log('colorScheme', colorScheme);
      }, [colorScheme]);
      return <Story toggleColorScheme={toggleColorScheme} isDark={isDark} />;
    },
  ],
  // tags: ['autodocs'],
} satisfies Meta<typeof NavigationRightActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toggleColorScheme: () => {},
    isDark: false,
  },
};
