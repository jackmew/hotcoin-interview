import type { Meta, StoryObj } from '@storybook/react';
import { navigationItems } from '../../../../navigation.const';
import { NavDropdown } from './NavDropdown';

const meta = {
  title: 'Navigation/NavDropdown',
  component: NavDropdown,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story, context) => {
      // Override the original args with our stateful values
      const updatedArgs = {
        ...context.args,
      };

      return <Story args={updatedArgs} />;
    },
  ],
  // tags: ['autodocs'],
} satisfies Meta<typeof NavDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BuyDropdown: Story = {
  args: {
    ...navigationItems[0],
  },
};

export const MarketDropdown: Story = {
  args: {
    ...navigationItems[1],
  },
};

export const TradeDropdown: Story = {
  args: {
    ...navigationItems[2],
  },
};
