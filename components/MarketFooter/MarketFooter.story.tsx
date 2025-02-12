import type { Meta, StoryObj } from '@storybook/react';
import { MarketFooter } from './MarketFooter';
import { marketFooterItems } from './MarketFooter.const';

const meta = {
  title: 'Components/MarketFooter',
  component: MarketFooter,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '1rem' }}>
          <h1>Page Content</h1>
          <p>Scroll down to see the footer</p>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>Content line {i + 1}</p>
          ))}
        </div>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MarketFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: marketFooterItems,
  },
};

export const ShortContent: Story = {
  args: {
    items: marketFooterItems,
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '1rem' }}>
          <h1>Short Content</h1>
          <p>The footer should still be at the bottom</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
