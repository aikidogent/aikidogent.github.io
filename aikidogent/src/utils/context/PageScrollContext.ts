import { createContext } from 'react';

export const PageScrollContext = createContext<{
  pageScrollEnabled: boolean;
  setPageScrollEnabled: (value: boolean) => void;
}>({
  pageScrollEnabled: true,
  setPageScrollEnabled: () => null,
});
