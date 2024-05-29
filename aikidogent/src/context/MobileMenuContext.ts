'use client';

import { createContext } from 'react';

export const MobileMenuContext = createContext<{
  open: boolean;
  setOpen: (newValue: boolean) => void;
}>({
  open: false,
  setOpen: () => null,
});
