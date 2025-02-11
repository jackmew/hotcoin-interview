import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import { NavigationRightActions } from './NavigationRightActions';

const meta = {
  title: 'Navigation/NavigationRightActions',
  component: NavigationRightActions,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    () => (
      <MantineProvider>
        <StoryWithColorScheme />
      </MantineProvider>
    ),
  ],
} satisfies Meta<typeof NavigationRightActions>;

// Separate component to use the hook inside MantineProvider
function StoryWithColorScheme() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    console.log('colorScheme', colorScheme);
  }, [colorScheme]);

  return <NavigationRightActions toggleColorScheme={toggleColorScheme} isDark={isDark} />;
}

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toggleColorScheme: () => {},
    isDark: false,
  },
};
