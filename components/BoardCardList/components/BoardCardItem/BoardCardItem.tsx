'use client';

import { Group, Image, Text } from '@mantine/core';
import { IBoardCardItem } from '../../BoardCardList.const';
import classes from './BoardCardItem.module.css';

interface BoardCardItemProps {
  data: IBoardCardItem;
}

export function BoardCardItem({ data }: BoardCardItemProps) {
  const isPositiveChange = Number(data.change) >= 0;
  const formattedChange = `${isPositiveChange ? '+' : ''}${data.change}%`;
  const tradingPair = `${data.sellShortName}/${data.buyShortName}`;

  return (
    <Group className={classes.item} justify="space-between" wrap="nowrap">
      <Group wrap="nowrap" gap="xs">
        <Image src={data.imageUrl} alt={data.sellShortName} width={24} height={24} />
        <Text size="sm">{tradingPair}</Text>
      </Group>
      <Text size="sm" ta="right" w={100}>
        {Number(data.last).toFixed(8)}
      </Text>
      <Text
        className={classes.change}
        size="sm"
        w={80}
        ta="right"
        c={isPositiveChange ? 'green' : 'red'}
      >
        {formattedChange}
      </Text>
    </Group>
  );
}
