'use client';

import { ReactNode, useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { createTheme, MantineProvider } from '@mantine/core';
import { theme } from '../../theme';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <RecoilRoot>
      <MantineProvider theme={theme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    </RecoilRoot>
  );
}
