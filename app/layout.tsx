import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import { Navigation } from '../components/Navigation/Navigation';
import { Providers } from '../components/Providers/Providers';

export const metadata = {
  title: 'Hotcoin Clone',
  description: 'Hotcoin market and wealth management clone',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="zh" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}
