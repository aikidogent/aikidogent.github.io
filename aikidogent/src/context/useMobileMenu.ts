import { useContext } from 'react';
import { MobileMenuContext } from '@/context/MobileMenuContext';

export const useMobileMenu = () => useContext(MobileMenuContext);
