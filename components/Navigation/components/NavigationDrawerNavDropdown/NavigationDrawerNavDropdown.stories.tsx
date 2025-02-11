import type { Meta, StoryObj } from '@storybook/react';
import { navigationItems } from '../../navigation.const';
import { NavigationDrawerNavDropdown } from './NavigationDrawerNavDropdown';

const meta = {
  title: 'Navigation/NavigationDrawerNavDropdown',
  component: NavigationDrawerNavDropdown,
  parameters: {
    layout: 'fullscreen',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof NavigationDrawerNavDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: navigationItems[0].label,
    items: navigationItems[0].items,
    onPress: () => console.log('NavigationDrawerNavDropdown onPress'),
  },
};
