import React, { useContext } from "react";
import { OrderWithDetails } from "../interface/Order";

export type ContextType = {
  orders: OrderWithDetails[];
  setOrders: React.Dispatch<React.SetStateAction<OrderWithDetails[]>>;
  update: boolean;
  setUpdate: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MainContext = React.createContext<ContextType>({
  orders: [],
  setOrders: () => {},
  update: false,
  setUpdate: () => {},
});

export const useMainContext = () => useContext(MainContext);
