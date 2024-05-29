'use client';

import { FC, ReactNode, useState } from 'react';
import { MobileMenuContext } from '@/context/MobileMenuContext';

type Props = {
  children: ReactNode;
};

export const MobileMenuContextProvider: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
