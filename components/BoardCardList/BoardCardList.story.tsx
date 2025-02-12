import type { Meta, StoryObj } from '@storybook/react';
import { BoardCardList } from './BoardCardList';
import { hotlists, newLists, topGainers, topLosers, turnovers } from './BoardCardList.const';

const meta = {
  title: 'Components/BoardCardList',
  component: BoardCardList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BoardCardList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: '熱門榜', data: hotlists.data },
      { title: '漲幅榜', data: topGainers.data },
      { title: '跌幅榜', data: topLosers.data },
      { title: '新幣榜', data: newLists.data },
      { title: '成交額榜', data: turnovers.data },
    ],
  },
};
