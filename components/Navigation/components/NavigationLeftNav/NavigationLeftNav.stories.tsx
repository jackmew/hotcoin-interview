import type { Meta, StoryObj } from '@storybook/react';
import { NavigationLeftNav } from './NavigationLeftNav';

const meta = {
  title: 'Navigation/NavigationLeftNav',
  component: NavigationLeftNav,
} satisfies Meta<typeof NavigationLeftNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
