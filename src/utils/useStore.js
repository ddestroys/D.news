import { useContext } from 'react';
import { StoreContext } from '../store/provider/Provider';

export const useStore = () => useContext(StoreContext);