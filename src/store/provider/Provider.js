import React, { createContext } from 'react';
import store from '../store';

export const StoreContext = createContext(store);

export const Provider = ({ children }) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};