'use client';

import { BannerMarket } from '@components/BannerMarket/BannerMarket';
import { Container } from '@mantine/core';

export function MarketPage() {
  return (
    <main>
      <BannerMarket />
      <Container size="lg">{/* Other market page content */}</Container>
    </main>
  );
}
