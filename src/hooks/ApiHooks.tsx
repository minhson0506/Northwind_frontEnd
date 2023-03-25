import { useEffect } from "react";
import CustomError from "../classes/CustomError";
import { useMainContext } from "../contexts/MainContext";
import { OrderWithDetails } from "../interface/Order";
import { baseUrl } from "../utils/variables";

const doFetch = async (url: string, options: any) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (e) {
    throw new CustomError("Error when get data", 404);
  }
};

const useOrder = () => {
  const { setOrders } = useMainContext();

  const getOrders = async (shipped: boolean) => {
    const options = {
      method: "GET",
    };
    const response = await doFetch(
      baseUrl + "order/" + shipped.toString(),
      options
    );
    setOrders(response as OrderWithDetails[]);
  };

  const getOrdersBySearch = async (shipped: boolean, search: string) => {
    const options = {
      method: "GET",
    };
    const response = await doFetch(baseUrl + `order/${shipped.toString()}/` + search, options);
    setOrders(response as OrderWithDetails[]);
  };

  return { getOrders, getOrdersBySearch };
};

export { useOrder };
