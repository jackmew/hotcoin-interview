import { Group } from '@mantine/core';
import { navigationItems } from '../../navigation.const';
import { NavDropdown } from './components/NavDropdown/NavDropdown';

export function NavigationLeftNav() {
  return (
    <Group gap="sm" wrap="nowrap">
      {navigationItems.map((item) => (
        <NavDropdown key={item.name} {...item} />
      ))}
    </Group>
  );
}
