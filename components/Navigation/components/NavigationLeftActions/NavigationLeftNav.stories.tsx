import type { Meta, StoryObj } from '@storybook/react';
import { useDropdown } from '../../hooks/useNavigation';
import { NavigationLeftNav } from './NavigationLeftNav';

const meta = {
  title: 'Navigation/NavigationLeftNav',
  component: NavigationLeftNav,
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
} satisfies Meta<typeof NavigationLeftNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeDropdown: null,
    closingDropdown: null,
    onDropdownChange: () => {},
  },
};
