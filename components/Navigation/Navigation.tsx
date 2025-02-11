'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  IconChartBar,
  IconChartLine,
  IconChevronDown,
  IconCoin,
  IconCurrencyDollar,
  IconDots,
  IconDownload,
  IconExchange,
  IconFileAnalytics,
  IconHome,
  IconMenu2,
  IconMoon,
  IconPigMoney,
  IconSearch,
  IconSun,
  IconWallet,
  IconWorld,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Button,
  Container,
  Drawer,
  Group,
  Menu,
  Stack,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import classes from './Navigation.module.css';

export function Navigation() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closingDropdown, setClosingDropdown] = useState<string | null>(null);
  const [opened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const isDesktop = useMediaQuery('(min-width: 48em)');

  useEffect(() => {
    if (isDesktop) {
      closeDrawer();
    }
  }, [isDesktop, closeDrawer]);

  const navigationItems = [
    {
      label: '买币',
      name: 'buy',
      items: [
        { href: '/buy/quick', label: '充值', icon: <IconWallet size={16} /> },
        { href: '/buy/p2p', label: 'C2C买币', icon: <IconExchange size={16} /> },
        { href: '/buy/card', label: '信用卡买币', icon: <IconCurrencyDollar size={16} /> },
      ],
    },
    {
      label: '行情',
      name: 'market',
      items: [
        { href: '/market/overview', label: '市场行情', icon: <IconChartLine size={16} /> },
        { href: '/market/analysis', label: '行业数据', icon: <IconChartBar size={16} /> },
      ],
    },
    {
      label: '交易',
      name: 'trade',
      items: [
        { href: '/trade/spot', label: '现货交易', icon: <IconExchange size={16} /> },
        { href: '/trade/margin', label: '杠杆交易', icon: <IconFileAnalytics size={16} /> },
        { href: '/trade/etf', label: 'ETF专区', icon: <IconChartLine size={16} /> },
      ],
    },
    {
      label: '合约',
      name: 'contract',
      items: [
        { href: '/contract/futures', label: '永续合约', icon: <IconFileAnalytics size={16} /> },
        { href: '/contract/trading', label: '交割合约', icon: <IconChartLine size={16} /> },
      ],
    },
    {
      label: '理财',
      name: 'finance',
      items: [
        { href: '/finance/savings', label: '赚币', icon: <IconPigMoney size={16} /> },
        { href: '/finance/staking', label: '借币', icon: <IconCoin size={16} /> },
      ],
    },
    {
      label: '更多',
      name: 'more',
      items: [
        { href: '/more/help', label: '帮助中心', icon: <IconHome size={16} /> },
        { href: '/more/about', label: '关于我们', icon: <IconDots size={16} /> },
      ],
    },
  ];

  const onDropdownChange = (name: string, opened: boolean) => {
    if (opened) {
      setActiveDropdown(name);
      setClosingDropdown(null);
    } else {
      setClosingDropdown(name);
      setActiveDropdown(null);
    }
  };

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

  const NavDropdown = ({
    label,
    name,
    items,
    isMobile = false,
  }: {
    label: string;
    name: string;
    items: Array<{ href: string; label: string; icon: React.ReactNode }>;
    isMobile?: boolean;
  }) => {
    if (isMobile) {
      return (
        <Stack gap="xs">
          <Text fw={500} className={classes.mobileMenuTitle}>
            {label}
          </Text>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={classes.mobileLink}
              onClick={handleMobileLinkClick}
            >
              <Group gap="sm">
                {item.icon}
                <Text size="sm">{item.label}</Text>
              </Group>
            </Link>
          ))}
        </Stack>
      );
    }

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
                  activeDropdown === name || closingDropdown === name
                    ? classes.chevronIconRotated
                    : ''
                } ${closingDropdown === name ? classes.chevronIconRotatedDown : ''}`}
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
            <Group gap="sm" wrap="nowrap">
              {navigationItems.map((item) => (
                <NavDropdown key={item.name} {...item} />
              ))}
            </Group>
          )}

          {/* Right-side Actions */}
          <Group gap="xs" wrap="nowrap">
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

            {!isDesktop && (
              <ActionIcon variant="subtle" size="lg" onClick={onDrawerIconClick}>
                <IconMenu2 size="1.2rem" stroke={1.5} />
              </ActionIcon>
            )}
          </Group>
        </Group>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        opened={opened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        className={classes.drawer}
      >
        <Stack>
          {navigationItems.map((item) => (
            <NavDropdown key={item.name} {...item} isMobile />
          ))}
          <Stack gap="sm" mt="xl">
            <Group gap="xs" wrap="nowrap" className={classes.mobileThemeButton}>
              <ActionIcon
                variant="subtle"
                onClick={() => {
                  toggleColorScheme();
                  closeDrawer();
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
    </div>
  );
}
