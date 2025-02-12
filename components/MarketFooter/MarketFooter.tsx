'use client';

import { useEffect, useRef, useState } from 'react';
import { Box, Group } from '@mantine/core';
import { MarketFooterItem } from './components/MarketFooterItem/MarketFooterItem';
import { IMarketFooterItem } from './MarketFooter.const';
import classes from './MarketFooter.module.css';

interface MarketFooterProps {
  items: IMarketFooterItem[];
}

export function MarketFooter({ items }: MarketFooterProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Auto scroll effect
  const scroll = () => {
    if (!scrollRef.current) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    // Reset to start when reaching the end
    if (scrollLeft >= maxScroll) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      setScrollPosition(0);
    } else {
      // Scroll one item width
      const newPosition = scrollLeft + 200; // Approximate width of one item
      scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  // Start auto-scroll when component mounts
  useEffect(() => {
    const interval = setInterval(scroll, 3000); // Scroll every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.footer}>
      <Group className={classes.scrollContainer} ref={scrollRef} wrap="nowrap">
        {/* Duplicate items for infinite scroll effect */}
        {[...items, ...items].map((item, index) => (
          <MarketFooterItem key={`${item.id}-${index}`} data={item} />
        ))}
      </Group>
    </Box>
  );
}
