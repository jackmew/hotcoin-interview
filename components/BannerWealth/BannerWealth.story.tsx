import type { Meta, StoryObj } from '@storybook/react';
import { BannerWealth } from './BannerWealth';

const meta: Meta<typeof BannerWealth> = {
  title: 'Components/BannerWealth',
  component: BannerWealth,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BannerWealth>;

export const Default: Story = {
  args: {
    title: '稳定生息，简单赚币',
    subtitle: '投资保本型产品，赚取稳定收益',
  },
};

export const CustomText: Story = {
  args: {
    title: 'Stable Income, Simple Earnings',
    subtitle: 'Invest in capital-protected products for stable returns',
  },
};
