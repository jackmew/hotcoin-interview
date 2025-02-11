import Link from 'next/link';
import { IconChevronDown } from '@tabler/icons-react';
import { Group, Menu, Text, UnstyledButton } from '@mantine/core';
import classes from './NavDropdown.module.css';

interface NavDropdownProps {
  label: string;
  items: Array<{ href: string; label: string; icon: React.ReactNode }>;
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={200} shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton className={classes.menuTarget}>
          <Group gap={4} wrap="nowrap">
            <Text className={classes.label}>{label}</Text>
            <IconChevronDown size={16} className={classes.chevronIcon} />
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
