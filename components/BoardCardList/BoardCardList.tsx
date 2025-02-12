'use client';

import { useRef, useState } from 'react';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { ActionIcon, Group } from '@mantine/core';
import { IBoardCardItem } from './BoardCardList.const';
import { BoardCard } from './components/BoardCard/BoardCard';
import classes from './BoardCardList.module.css';

export interface BoardCardListProps {
  items: {
    title: string;
    data: IBoardCardItem[];
  }[];
}

export function BoardCardList({ items }: BoardCardListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (!scrollRef.current) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) {
      return;
    }

    const scrollAmount = 360 + 16; // card width + gap
    const currentScroll = scrollRef.current.scrollLeft;
    const newScroll =
      direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  };

  return (
    <Group align="center" wrap="nowrap">
      <ActionIcon
        variant="subtle"
        size="xl"
        disabled={!canScrollLeft}
        onClick={() => scroll('left')}
      >
        <IconChevronLeft size={24} />
      </ActionIcon>

      <div className={classes.scrollContainer} ref={scrollRef} onScroll={checkScrollButtons}>
        <Group gap="md" wrap="nowrap" className={classes.cardContainer}>
          {items.map((item, index) => (
            <BoardCard key={index} title={item.title} data={item.data} />
          ))}
        </Group>
      </div>

      <ActionIcon
        variant="subtle"
        size="xl"
        disabled={!canScrollRight}
        onClick={() => scroll('right')}
      >
        <IconChevronRight size={24} />
      </ActionIcon>
    </Group>
  );
}
