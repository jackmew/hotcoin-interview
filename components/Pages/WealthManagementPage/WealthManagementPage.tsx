'use client';

import { BannerWealth } from '@components/BannerWealth/BannerWealth';
import { Container } from '@mantine/core';

export function WealthManagementPage() {
  return (
    <main>
      <BannerWealth />
      <Container size="lg">{/* Other wealth management page content */}</Container>
    </main>
  );
}
