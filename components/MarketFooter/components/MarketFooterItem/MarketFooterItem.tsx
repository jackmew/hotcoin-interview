'use client';

import { Badge, Group, Text } from '@mantine/core';
import { IMarketFooterItem } from '../../MarketFooter.const';
import classes from './MarketFooterItem.module.css';

interface MarketFooterItemProps {
  data: IMarketFooterItem;
}

export function MarketFooterItem({ data }: MarketFooterItemProps) {
  const isPositiveChange = data.change.startsWith('+');
  const changeColor = isPositiveChange ? 'green' : 'red';

  return (
    <Group className={classes.item} justify="space-between" wrap="nowrap">
      <Group wrap="nowrap" gap="xs" style={{ flex: '0 0 auto' }}>
        <Text size="sm" fw={500}>
          {data.tradingPair}
        </Text>
      </Group>

      <Group wrap="nowrap" gap="md" style={{ flex: '0 0 auto' }}>
        <Text size="sm" fw={500}>
          {data.price}
        </Text>

        <Text size="sm" c={changeColor} fw={500}>
          {data.change}
        </Text>

        {data.label && (
          <Badge
            variant="light"
            color={
              data.labelType === 'success'
                ? 'green'
                : data.labelType === 'warning'
                  ? 'yellow'
                  : 'red'
            }
            size="sm"
          >
            {data.label}
          </Badge>
        )}
      </Group>
    </Group>
  );
}
