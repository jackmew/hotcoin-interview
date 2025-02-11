'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
  IconCoin,
  IconDownload,
  IconMenu2,
  IconMoon,
  IconSearch,
  IconSun,
  IconWorld,
} from '@tabler/icons-react';
import { ActionIcon, Button, Container, Group, Text, useMantineColorScheme } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { NavigationDrawer } from './components/NavigationDrawer/NavigationDrawer';
import { NavigationLeftNav } from './components/NavigationLeftNav/NavigationLeftNav';
import { NavigationRightActions } from './components/NavigationRightActions/NavigationRightActions';
import { useDropdown } from './hooks/useNavigation';
import { navigationItems } from './navigation.const';
import classes from './Navigation.module.css';

export function Navigation() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const { activeDropdown, closingDropdown, onDropdownChange } = useDropdown();
  const [opened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const isDesktop = useMediaQuery('(min-width: 48em)');

  useEffect(() => {
    if (isDesktop) {
      closeDrawer();
    }
  }, [isDesktop, closeDrawer]);

  const handleMobileLinkClick = () => {
    closeDrawer();
  };

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

          {/* Desktop Navigation */}
          {isDesktop && (
            <NavigationLeftNav
              activeDropdown={activeDropdown}
              closingDropdown={closingDropdown}
              onDropdownChange={onDropdownChange}
            />
          )}

          {/* Right-side Actions */}
          {isDesktop && (
            <NavigationRightActions toggleColorScheme={toggleColorScheme} isDark={isDark} />
          )}
          {/* <Group gap="xs" wrap="nowrap">
            {isDesktop && (
              <>
                <ActionIcon variant="subtle" size="lg" aria-label="Search">
                  <IconSearch size="1.2rem" stroke={1.5} />
                </ActionIcon>
                <Group gap="xs" wrap="nowrap">
                  <Button variant="subtle" size="sm">
                    登录
                  </Button>
                  <Button variant="filled" size="sm" className={classes.registerButton}>
                    注册
                  </Button>
                </Group>
                <Group gap="xs" wrap="nowrap">
                  <ActionIcon variant="subtle" size="lg" aria-label="Download">
                    <IconDownload size="1.2rem" stroke={1.5} />
                  </ActionIcon>
                  <ActionIcon
                    variant="subtle"
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
                  <ActionIcon variant="subtle" size="lg" aria-label="Change language">
                    <IconWorld size="1.2rem" stroke={1.5} />
                  </ActionIcon>
                </Group>
              </>
            )}
          </Group> */}
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
