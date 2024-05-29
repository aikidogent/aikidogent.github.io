import { useState, type FC, type ReactNode } from 'react';
import { PageScrollContext } from './PageScrollContext';

type PageScrollContextProviderProps = {
  children?: ReactNode;
};

export const PageScrollContextProvider: FC<PageScrollContextProviderProps> = ({
  children,
}) => {
  const [pageScrollEnabled, setPageScrollEnabled] = useState(true);
  return (
    <PageScrollContext.Provider
      value={{ pageScrollEnabled, setPageScrollEnabled }}
    >
      {children}
    </PageScrollContext.Provider>
  );
};
