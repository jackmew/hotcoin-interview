'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { IconCoin, IconMenu2 } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, useMantineColorScheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NavigationDrawer } from './components/NavigationDrawer/NavigationDrawer';
import { NavigationLeftNav } from './components/NavigationLeftNav/NavigationLeftNav';
import { NavigationRightActions } from './components/NavigationRightActions/NavigationRightActions';
import { navigationItems } from './navigation.const';
import classes from './Navigation.module.css';

export function Navigation() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [opened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const isDesktop = useMediaQuery('(min-width: 48em)');

  useEffect(() => {
    if (isDesktop) {
      closeDrawer();
    }
  }, [isDesktop, closeDrawer]);

  const onDrawerIconClick = () => {
    if (opened) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  return (
    <div className={classes.header}>
      <Container size="lg" className={classes.container}>
        <Group justify="space-between" wrap="nowrap" h="100%">
          {/* Logo */}
          <Link href="/welcome" className={classes.link}>
            <Group gap="xs" className={classes.logo} wrap="nowrap">
              <IconCoin size={30} stroke={1.5} className={classes.logoIcon} />
              <Text className={classes.logoText}>Hotcoin</Text>
            </Group>
          </Link>

          {/* Left-side Navigation */}
          {isDesktop && <NavigationLeftNav />}

          {/* Right-side Actions */}
          {isDesktop && (
            <NavigationRightActions toggleColorScheme={toggleColorScheme} isDark={isDark} />
          )}
          {!isDesktop && (
            <ActionIcon variant="subtle" size="lg" onClick={onDrawerIconClick}>
              <IconMenu2 size="1.2rem" stroke={1.5} />
            </ActionIcon>
          )}
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <NavigationDrawer
        opened={opened}
        onClose={closeDrawer}
        navigationItems={navigationItems}
        onThemeToggle={toggleColorScheme}
      />
    </div>
  );
}
