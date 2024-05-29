'use client';

import React, { FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppTheme } from '@/ui/AppTheme';
import { PageScrollContextProvider } from '@/utils/context';

type Props = {
  children?: React.ReactNode;
};

export const Shell: FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 30000,
        },
      },
    }),
  );

  return (
    <PageScrollContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppTheme>{children}</AppTheme>
      </QueryClientProvider>
    </PageScrollContextProvider>
  );
};
