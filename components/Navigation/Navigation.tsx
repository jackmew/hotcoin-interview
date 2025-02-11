'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  IconChartBar,
  IconChartLine,
  IconChevronDown,
  IconChevronUp,
  IconCoin,
  IconCurrencyDollar,
  IconDots,
  IconDownload,
  IconExchange,
  IconFileAnalytics,
  IconHome,
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
  Group,
  Menu,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import classes from './Navigation.module.css';

export function Navigation() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [closingDropdown, setClosingDropdown] = useState<string | null>(null);

  useEffect(() => {
    console.log(activeDropdown);
  }, [activeDropdown]);

  const onDropdownChange = (name: string, opened: boolean) => {
    if (opened) {
      setActiveDropdown(name);
      setClosingDropdown(null); // Ensure no dropdown is "closing" when a new one opens
    } else {
      setClosingDropdown(name); // Track which dropdown is closing
      setActiveDropdown(null);
    }
  };

  const NavDropdown = ({
    label,
    name,
    items,
  }: {
    label: string;
    name: string;
    items: Array<{ href: string; label: string; icon: React.ReactNode }>;
  }) => (
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
            <Text>{label}</Text>
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

  return (
    <div className={classes.header}>
      <Container size="lg">
        <Group justify="space-between" h="100%">
          <Group>
            {/* Logo */}
            <Link href="/welcome" className={classes.link}>
              <Group gap="xs" className={classes.logo}>
                <IconCoin size={30} stroke={1.5} className={classes.logoIcon} />
                <Text className={classes.logoText}>Hotcoin</Text>
              </Group>
            </Link>

            {/* Navigation Links */}
            <Group ml="xl" gap="xl">
              <NavDropdown
                label="买币"
                name="buy"
                items={[
                  { href: '/buy/quick', label: '充值', icon: <IconWallet size={16} /> },
                  { href: '/buy/p2p', label: 'C2C买币', icon: <IconExchange size={16} /> },
                  {
                    href: '/buy/card',
                    label: '信用卡买币',
                    icon: <IconCurrencyDollar size={16} />,
                  },
                ]}
              />

              <NavDropdown
                label="行情"
                name="market"
                items={[
                  {
                    href: '/market/overview',
                    label: '市场行情',
                    icon: <IconChartLine size={16} />,
                  },
                  {
                    href: '/market/analysis',
                    label: '行业数据',
                    icon: <IconChartBar size={16} />,
                  },
                ]}
              />

              <NavDropdown
                label="交易"
                name="trade"
                items={[
                  { href: '/trade/spot', label: '现货交易', icon: <IconExchange size={16} /> },
                  {
                    href: '/trade/margin',
                    label: '杠杆交易',
                    icon: <IconFileAnalytics size={16} />,
                  },
                  {
                    href: '/trade/etf',
                    label: 'ETF专区',
                    icon: <IconChartLine size={16} />,
                  },
                ]}
              />

              <NavDropdown
                label="合约"
                name="contract"
                items={[
                  {
                    href: '/contract/futures',
                    label: '永续合约',
                    icon: <IconFileAnalytics size={16} />,
                  },
                  {
                    href: '/contract/trading',
                    label: '交割合约',
                    icon: <IconChartLine size={16} />,
                  },
                ]}
              />

              <NavDropdown
                label="理财"
                name="finance"
                items={[
                  { href: '/finance/savings', label: '赚币', icon: <IconPigMoney size={16} /> },
                  { href: '/finance/staking', label: '借币', icon: <IconCoin size={16} /> },
                ]}
              />

              <NavDropdown
                label="更多"
                name="more"
                items={[
                  { href: '/more/help', label: '帮助中心', icon: <IconHome size={16} /> },
                  { href: '/more/about', label: '关于我们', icon: <IconDots size={16} /> },
                ]}
              />

              <NavDropdown
                label="Zest"
                name="zest"
                items={[
                  { href: '/welcome', label: 'Welcome', icon: <IconHome size={16} /> },
                  { href: '/market', label: 'Market', icon: <IconChartBar size={16} /> },
                  {
                    href: '/wealth-management',
                    label: 'Wealth Management',
                    icon: <IconPigMoney size={16} />,
                  },
                ]}
              />
            </Group>
          </Group>

          <Group>
            {/* Search */}
            <ActionIcon variant="subtle" size="lg" aria-label="Search">
              <IconSearch size="1.2rem" stroke={1.5} />
            </ActionIcon>

            {/* Login & Register */}
            <Button variant="subtle" size="sm">
              登录
            </Button>
            <Button variant="filled" size="sm" className={classes.registerButton}>
              注册
            </Button>

            {/* Download */}
            <ActionIcon variant="subtle" size="lg" aria-label="Download">
              <IconDownload size="1.2rem" stroke={1.5} />
            </ActionIcon>

            {/* Theme toggle */}
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

            {/* Language */}
            <ActionIcon variant="subtle" size="lg" aria-label="Change language">
              <IconWorld size="1.2rem" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </div>
  );
}
