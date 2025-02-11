import { Group } from '@mantine/core';
import { navigationItems } from '../../navigation.const';
import { NavDropdown } from './components/NavDropdown/NavDropdown';

interface NavigationLeftNavProps {
  activeDropdown: string | null;
  onDropdownChange: (name: string, opened: boolean) => void;
}

export function NavigationLeftNav({ activeDropdown, onDropdownChange }: NavigationLeftNavProps) {
  return (
    <Group gap="sm" wrap="nowrap">
      {navigationItems.map((item) => (
        <NavDropdown
          key={item.name}
          {...item}
          activeDropdown={activeDropdown}
          onDropdownChange={onDropdownChange}
        />
      ))}
    </Group>
  );
}
