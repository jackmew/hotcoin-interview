import type { Meta, StoryObj } from '@storybook/react';
import { useDropdown } from '../../../../hooks/useNavigation';
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
      const { activeDropdown, closingDropdown, onDropdownChange } = useDropdown();

      // Override the original args with our stateful values
      const updatedArgs = {
        ...context.args,
        activeDropdown,
        closingDropdown,
        onDropdownChange,
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
    // These will be overridden by the decorator
    activeDropdown: null,
    closingDropdown: null,
    onDropdownChange: () => {},
  },
};

export const MarketDropdown: Story = {
  args: {
    ...navigationItems[1],
    // These will be overridden by the decorator
    activeDropdown: null,
    closingDropdown: null,
    onDropdownChange: () => {},
  },
};

export const TradeDropdown: Story = {
  args: {
    ...navigationItems[2],
    // These will be overridden by the decorator
    activeDropdown: null,
    closingDropdown: null,
    onDropdownChange: () => {},
  },
};

// export const AllDropdowns: Story = {
//   render: (args) => (
//     <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
//       {navigationItems.map((item) => (
//         <NavDropdown
//           key={item.name}
//           {...item}
//           activeDropdown={args.activeDropdown}
//           closingDropdown={args.closingDropdown}
//           onDropdownChange={args.onDropdownChange}
//         />
//       ))}
//     </div>
//   ),
//   args: {
//     ...navigationItems[0], // Use the first navigation item as base props
//     activeDropdown: null,
//     closingDropdown: null,
//     onDropdownChange: () => {},
//   },
// };
