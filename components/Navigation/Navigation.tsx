'use client';

import { useState } from 'react';
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
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const isDesktop = useMediaQuery('(min-width: 48em)');

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
            <Link key={index} href={item.href} className={classes.mobileLink}>
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
            <Group gap={4}>
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

  const MobileDrawer = () => (
    <Drawer
      opened={drawerOpened}
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
          <ActionIcon
            variant="subtle"
            onClick={() => toggleColorScheme()}
            size="lg"
            aria-label="Toggle color scheme"
            className={classes.mobileThemeButton}
          >
            {isDark ? (
              <IconSun size="1.2rem" stroke={1.5} />
            ) : (
              <IconMoon size="1.2rem" stroke={1.5} />
            )}
            <Text size="sm" ml="xs">
              {isDark ? '浅色模式' : '深色模式'}
            </Text>
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size="lg"
            aria-label="Change language"
            className={classes.mobileThemeButton}
          >
            <IconWorld size="1.2rem" stroke={1.5} />
            <Text size="sm" ml="xs">
              语言
            </Text>
          </ActionIcon>
          <ActionIcon
            variant="subtle"
            size="lg"
            aria-label="Download"
            className={classes.mobileThemeButton}
          >
            <IconDownload size="1.2rem" stroke={1.5} />
            <Text size="sm" ml="xs">
              下载
            </Text>
          </ActionIcon>
        </Stack>
        <Group justify="center" mt="xl">
          <Button variant="subtle" size="md" fullWidth>
            登录
          </Button>
          <Button variant="filled" size="md" fullWidth className={classes.registerButton}>
            注册
          </Button>
        </Group>
      </Stack>
    </Drawer>
  );

  return (
    <div className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" h="100%">
          {/* Logo */}
          <Link href="/welcome" className={classes.link}>
            <Group gap="xs" className={classes.logo}>
              <IconCoin size={30} stroke={1.5} className={classes.logoIcon} />
              <Text className={classes.logoText}>Hotcoin</Text>
            </Group>
          </Link>

          {/* Desktop Navigation */}
          {isDesktop && (
            <Group ml="xl">
              {navigationItems.map((item) => (
                <NavDropdown key={item.name} {...item} />
              ))}
            </Group>
          )}

          {/* Desktop Actions */}
          {isDesktop ? (
            <Group>
              <ActionIcon variant="subtle" size="lg" aria-label="Search">
                <IconSearch size="1.2rem" stroke={1.5} />
              </ActionIcon>
              <Button variant="subtle" size="sm">
                登录
              </Button>
              <Button variant="filled" size="sm" className={classes.registerButton}>
                注册
              </Button>
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
          ) : (
            /* Mobile Menu Button */
            <ActionIcon variant="subtle" size="lg" onClick={openDrawer}>
              <IconMenu2 size="1.2rem" stroke={1.5} />
            </ActionIcon>
          )}
        </Group>
      </Container>

      {/* Mobile Drawer */}
      {!isDesktop && <MobileDrawer />}
    </div>
  );
}
