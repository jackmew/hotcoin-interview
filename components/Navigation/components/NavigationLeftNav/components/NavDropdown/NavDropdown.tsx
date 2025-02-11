import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { Group, Menu, Text, UnstyledButton } from '@mantine/core';
import classes from './NavDropdown.module.css';

interface NavDropdownProps {
  label: string;
  name: string;
  items: Array<{ href: string; label: string; icon: React.ReactNode }>;
  activeDropdown: string | null;
  onDropdownChange: (name: string, opened: boolean) => void;
}

export function NavDropdown({
  label,
  name,
  items,
  activeDropdown,
  onDropdownChange,
}: NavDropdownProps) {
  return (
    <Menu
      opened={activeDropdown === name}
      onChange={(opened) => onDropdownChange(name, opened)}
      trigger="hover"
      openDelay={100}
      closeDelay={200}
      shadow="md"
      width={200}
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.menuTarget}
          onClick={() => onDropdownChange(name, activeDropdown === name)}
        >
          <Group gap={4} wrap="nowrap">
            <Text c={activeDropdown === name ? 'primary' : 'inherit'}>{label}</Text>
            <IconChevronDown
              size={16}
              className={`${classes.chevronIcon} ${
                activeDropdown === name ? classes.chevronIconRotated : ''
              } `}
            />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        {items.map((item, index) => (
          <Menu.Item key={index} component={Link} href={item.href} leftSection={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
