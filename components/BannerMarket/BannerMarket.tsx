import { Container, Title } from '@mantine/core';
import classes from './BannerMarket.module.css';

interface BannerMarketProps {
  title?: string;
}

export function BannerMarket({ title = '市场行情' }: BannerMarketProps) {
  return (
    <div className={classes.banner}>
      <div className={classes.background} />
      <Container size="lg" className={classes.container}>
        <Title order={1} className={classes.title}>
          {title}
        </Title>
      </Container>
    </div>
  );
}

export default BannerMarket;
