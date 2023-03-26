import React, { useContext } from 'react';
import { OrderWithDetails } from '../interface/Order';

export type ContextType = {
    orders: OrderWithDetails[];
    setOrders: React.Dispatch<React.SetStateAction<OrderWithDetails[]>>;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    checked: boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainContext = React.createContext<ContextType>({
    orders: [],
    setOrders: () => {},
    input: '',
    setInput: () => {},
    checked: false,
    setChecked: () => {},
});

export const useMainContext = () => useContext(MainContext);
