'use client';

import { BannerMarket } from '@components/BannerMarket/BannerMarket';
import { BoardCardList } from '@components/BoardCardList/BoardCardList';
import { boardCardItems } from '@components/BoardCardList/BoardCardList.const';
import { MarketFooter } from '@components/MarketFooter/MarketFooter';
import { marketFooterItems } from '@components/MarketFooter/MarketFooter.const';
import { Container } from '@mantine/core';

export function MarketPage() {
  return (
    <main>
      <BannerMarket />
      <Container size="xl" mt="md">
        <BoardCardList items={boardCardItems} />
      </Container>
      <MarketFooter items={marketFooterItems} />
    </main>
  );
}
