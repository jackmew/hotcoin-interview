'use client';

import Link from 'next/link';
import { IconCoin, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, useMantineColorScheme } from '@mantine/core';
import classes from './Navigation.module.css';

export function Navigation() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <div className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" h="100%">
          <Group>
            {/* Logo */}
            <Link href="/welcome" className={classes.link}>
              <Group gap="xs" className={classes.logo}>
                <IconCoin size={30} stroke={1.5} style={{ color: 'var(--mantine-color-text)' }} />
                <Text className={classes.logoText}>Hotcoin</Text>
              </Group>
            </Link>

            {/* Navigation Links */}
            <Group ml="xl" gap="xl">
              <Link href="/welcome" className={classes.link}>
                <Text>Welcome</Text>
              </Link>
              <Link href="/market" className={classes.link}>
                <Text>Market</Text>
              </Link>
              <Link href="/wealth-management" className={classes.link}>
                <Text>Wealth Management</Text>
              </Link>
            </Group>
          </Group>

          <Group>
            {/* Theme toggle */}
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size="lg"
              aria-label="Toggle color scheme"
            >
              {isDark ? (
                <IconSun size="1.2rem" stroke={1.5} />
              ) : (
                <IconMoon size="1.2rem" stroke={1.5} />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </div>
  );
}
