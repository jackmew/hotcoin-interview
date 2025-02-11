'use client';

import { IconDownload, IconMoon, IconSun, IconWorld } from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Drawer,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { INavigationItem } from '../../navigation.const';
import { NavigationDrawerNavDropdown } from '../NavigationDrawerNavDropdown/NavigationDrawerNavDropdown';
import classes from './NavigationDrawer.module.css';

interface NavigationDrawerProps {
  opened: boolean;
  onClose: () => void;
  navigationItems: INavigationItem[];
  onThemeToggle: () => void;
}

export function NavigationDrawer({
  opened,
  onClose,
  navigationItems,
  onThemeToggle,
}: NavigationDrawerProps) {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      size="100%"
      padding="md"
      title="Menu"
      className={classes.drawer}
    >
      <Stack>
        {navigationItems.map((item) => (
          <NavigationDrawerNavDropdown key={item.name} {...item} onPress={onClose} />
        ))}
        <Stack gap="sm" mt="xl">
          <Group gap="xs" wrap="nowrap" className={classes.mobileThemeButton}>
            <ActionIcon
              variant="subtle"
              onClick={() => {
                onThemeToggle();
                onClose();
              }}
              size="lg"
            >
              {isDark ? (
                <IconSun size="1.2rem" stroke={1.5} />
              ) : (
                <IconMoon size="1.2rem" stroke={1.5} />
              )}
            </ActionIcon>
            <Text size="sm">{isDark ? '浅色模式' : '深色模式'}</Text>
          </Group>
          <Group gap="xs" wrap="nowrap" className={classes.mobileThemeButton}>
            <ActionIcon variant="subtle" size="lg">
              <IconWorld size="1.2rem" stroke={1.5} />
            </ActionIcon>
            <Text size="sm">语言</Text>
          </Group>
          <Group gap="xs" wrap="nowrap" className={classes.mobileThemeButton}>
            <ActionIcon variant="subtle" size="lg">
              <IconDownload size="1.2rem" stroke={1.5} />
            </ActionIcon>
            <Text size="sm">下载</Text>
          </Group>
        </Stack>
        <Group justify="center" mt="xl" grow>
          <Button variant="subtle" size="md">
            登录
          </Button>
          <Button variant="filled" size="md" className={classes.registerButton}>
            注册
          </Button>
        </Group>
      </Stack>
    </Drawer>
  );
}
