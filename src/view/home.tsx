import React from "react";
import { useOrder } from "../hooks/ApiHooks";
import { useEffect } from "react";
import { useMainContext } from "../contexts/MainContext";

interface homeProps {}

export const Home: React.FC<homeProps> = ({}) => {
  const { getOrders } = useOrder();
  const { orders } = useMainContext();

  // load order when component is mounted
  useEffect(() => {
    getOrders(false);
  }, []);

  return (
    <p>{orders.length > 0 ? orders[0].CustomerDetails?.Address : "no data"}</p>
    
  );
};
