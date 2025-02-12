import type { Meta, StoryObj } from '@storybook/react';
import { marketFooterItems } from '../../MarketFooter.const';
import { MarketFooterItem } from './MarketFooterItem';

const meta = {
  title: 'Components/MarketFooter/MarketFooterItem',
  component: MarketFooterItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '1rem',
          backgroundColor: 'var(--mantine-color-body)',
          // borderBottom: '1px solid var(--mantine-color-gray-3)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MarketFooterItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    data: marketFooterItems[0], // Item with success label
  },
};

export const Warning: Story = {
  args: {
    data: marketFooterItems[1], // Item with warning label
  },
};

export const Danger: Story = {
  args: {
    data: marketFooterItems[2], // Item with danger label
  },
};

export const PositiveChange: Story = {
  args: {
    data: marketFooterItems[3], // Item with positive change
  },
};

// Show multiple items in a row
export const MultipleItems: Story = {
  args: {
    data: marketFooterItems[0],
  },
  decorators: [
    (_Story) => (
      <div
        style={{
          display: 'flex',
          backgroundColor: 'var(--mantine-color-body)',
          // borderBottom: '1px solid var(--mantine-color-gray-3)',
          maxWidth: '100%',
          overflowX: 'auto',
          gap: '0',
        }}
      >
        {marketFooterItems.map((item) => (
          <div style={{ flex: '0 0 auto' }} key={item.id}>
            <MarketFooterItem data={item} />
          </div>
        ))}
      </div>
    ),
  ],
};
