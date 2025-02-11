'use client';

import { Group, Stack, Text } from '@mantine/core';
import classes from './NavigationDrawerNavDropdown.module.css';

interface NavigationDrawerNavDropdownProps {
  label: string;
  items: Array<{ href: string; label: string; icon: React.ReactNode }>;
  onPress: () => void;
}

export function NavigationDrawerNavDropdown({
  label,
  items,
  onPress,
}: NavigationDrawerNavDropdownProps) {
  return (
    <Stack gap="xs">
      <Text fw={500} className={classes.mobileMenuTitle}>
        {label}
      </Text>
      {items.map((item, index) => (
        <a key={index} href={item.href} className={classes.mobileLink} onClick={onPress}>
          <Group gap="sm">
            {item.icon}
            <Text size="sm">{item.label}</Text>
          </Group>
        </a>
      ))}
    </Stack>
  );
}
