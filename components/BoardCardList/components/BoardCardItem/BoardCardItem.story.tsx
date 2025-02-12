import type { Meta, StoryObj } from '@storybook/react';
import { hotlists, topGainers, topLosers } from '../../BoardCardList.const';
import { BoardCardItem } from './BoardCardItem';

const meta = {
  title: 'Components/BoardCardList/BoardCard/BoardCardItem',
  component: BoardCardItem,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{ width: '360px', padding: '1rem', backgroundColor: 'var(--mantine-color-body)' }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof BoardCardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bitcoin: Story = {
  args: {
    data: hotlists.data[0], // BTC/USDT
  },
};

export const Ethereum: Story = {
  args: {
    data: hotlists.data[1], // ETH/USDT
  },
};

export const PositiveChange: Story = {
  args: {
    data: topGainers.data[0], // Positive percentage change
  },
};

export const NegativeChange: Story = {
  args: {
    data: topLosers.data[0], // Negative percentage change
  },
};

// Show multiple items in a stack
export const MultipleItems: Story = {
  args: {
    data: hotlists.data[0], // Need to provide default args
  },
  decorators: [
    (_Story) => (
      <div
        style={{
          width: '360px',
          padding: '1rem',
          backgroundColor: 'var(--mantine-color-body)',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}
      >
        <BoardCardItem data={hotlists.data[0]} />
        <BoardCardItem data={hotlists.data[1]} />
        <BoardCardItem data={hotlists.data[2]} />
      </div>
    ),
  ],
};
