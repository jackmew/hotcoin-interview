'use client';

import { IconChevronRight } from '@tabler/icons-react';
import { Card, Group, Stack, Text } from '@mantine/core';
import { IBoardCardItem } from '../../BoardCardList.const';
import { BoardCardItem } from '../BoardCardItem/BoardCardItem';
import classes from './BoardCard.module.css';

export interface BoardCardProps {
  title: string;
  data: IBoardCardItem[];
}

export function BoardCard({ title, data }: BoardCardProps) {
  return (
    <Card className={classes.card} padding="md" radius="md" withBorder>
      <Stack gap="sm">
        {/* Header */}
        <Group justify="space-between" wrap="nowrap">
          <Text fw={500} size="lg">
            {title}
          </Text>
          <IconChevronRight size={20} stroke={1.5} />
        </Group>

        {/* Column Headers */}
        <Group className={classes.headers} justify="space-between" wrap="nowrap">
          <Text size="sm" c="dimmed">
            交易對
          </Text>
          <Text size="sm" c="dimmed" ta="right" w={100}>
            最新價
          </Text>
          <Text size="sm" c="dimmed" ta="right" w={80}>
            24H漲跌幅
          </Text>
        </Group>

        {/* List Items */}
        <Stack gap={0}>
          {data.slice(0, 3).map((item) => (
            <BoardCardItem key={item.tradeId} data={item} />
          ))}
        </Stack>
      </Stack>
    </Card>
  );
}
