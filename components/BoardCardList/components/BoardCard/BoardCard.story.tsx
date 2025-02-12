import type { Meta, StoryObj } from '@storybook/react';
import { hotlists, newLists, topGainers, topLosers, turnovers } from '../../BoardCardList.const';
import { BoardCard } from './BoardCard';

const meta = {
  title: 'Components/BoardCardList/BoardCard',
  component: BoardCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BoardCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HotList: Story = {
  args: {
    title: '熱門榜',
    data: hotlists.data,
  },
};

export const TopGainer: Story = {
  args: {
    title: '漲幅榜',
    data: topGainers.data,
  },
};

export const TopLoser: Story = {
  args: {
    title: '跌幅榜',
    data: topLosers.data,
  },
};

export const NewListing: Story = {
  args: {
    title: '新幣榜',
    data: newLists.data,
  },
};

export const TopTurnover: Story = {
  args: {
    title: '成交額榜',
    data: turnovers.data,
  },
};

// Display multiple cards in a row for visual testing
export const MultipleCards: Story = {
  args: {
    title: '熱門榜',
    data: hotlists.data,
  },
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        <BoardCard title="熱門榜" data={hotlists.data} />
        <BoardCard title="漲幅榜" data={topGainers.data} />
        <BoardCard title="跌幅榜" data={topLosers.data} />
        <BoardCard title="新幣榜" data={newLists.data} />
      </div>
    ),
  ],
};
