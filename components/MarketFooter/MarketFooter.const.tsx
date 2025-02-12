export interface IMarketFooterItem {
  id: string;
  tradingPair: string;
  price: string;
  change: string;
  label?: string; // Optional label like "极速拉升", "大幅度涨"
  labelType?: 'success' | 'warning' | 'danger'; // Color theme for the label
}

export const marketFooterItems: IMarketFooterItem[] = [
  {
    id: 'MEMDEX/USDT',
    tradingPair: 'MEMDEX/USDT',
    price: '0.1228',
    change: '-12.28%',
    label: '极速拉升',
    labelType: 'success',
  },
  {
    id: 'CHZ/USDT',
    tradingPair: 'CHZ/USDT',
    price: '0.2840',
    change: '-2.84%',
    label: '情绪整理',
    labelType: 'warning',
  },
  {
    id: 'MEMDEX/USDT-2',
    tradingPair: 'MEMDEX/USDT',
    price: '0.1228',
    change: '-12.28%',
    label: '大幅度涨',
    labelType: 'danger',
  },
  {
    id: 'MAJOR/USDT',
    tradingPair: 'MAJOR/USDT',
    price: '0.0699',
    change: '+6.99%',
    label: '大幅度涨',
    labelType: 'success',
  },
];
