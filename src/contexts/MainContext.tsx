import React, { useContext } from "react";
import { OrderWithDetails } from "../interface/Order";

export type ContextType = {
  orders: OrderWithDetails[];
  setOrders: React.Dispatch<React.SetStateAction<OrderWithDetails[]>>;
};

export const MainContext = React.createContext<ContextType>({
  orders: [],
  setOrders: () => {},
});

export const useMainContext = () => useContext(MainContext);
