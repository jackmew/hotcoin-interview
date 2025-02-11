import type { Meta, StoryObj } from '@storybook/react';
import { BannerMarket } from './BannerMarket';

const meta: Meta<typeof BannerMarket> = {
  title: 'Components/BannerMarket',
  component: BannerMarket,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof BannerMarket>;

export const Default: Story = {
  args: {
    title: '市场行情',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Market Information',
  },
};
