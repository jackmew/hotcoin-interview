import React from 'react';
import {
  IconChartBar,
  IconChartLine,
  IconCoin,
  IconCurrencyDollar,
  IconDots,
  IconExchange,
  IconFileAnalytics,
  IconHome,
  IconPigMoney,
  IconWallet,
} from '@tabler/icons-react';

export interface INavigationItem {
  label: string;
  name: string;
  items: Array<{
    href: string;
    label: string;
    icon: React.ReactNode;
  }>;
}

export const navigationItems: INavigationItem[] = [
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
  {
    label: 'Zest',
    name: 'zest',
    items: [
      { href: '/welcome', label: 'Welcome', icon: <IconHome size={16} /> },
      { href: '/market', label: 'Market', icon: <IconFileAnalytics size={16} /> },
      {
        href: '/wealth-management',
        label: 'Wealth Management',
        icon: <IconFileAnalytics size={16} />,
      },
    ],
  },
];
