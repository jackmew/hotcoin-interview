import type { Meta, StoryObj } from '@storybook/react';
import { navigationItems } from '../../navigation.const';
import { NavigationDrawer } from './NavigationDrawer';

const meta = {
  title: 'Navigation/NavigationDrawer',
  component: NavigationDrawer,
  parameters: {
    layout: 'fullscreen',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof NavigationDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    opened: true,
    onClose: () => console.log('close drawer'),
    navigationItems,
    onThemeToggle: () => console.log('toggle theme'),
  },
};
