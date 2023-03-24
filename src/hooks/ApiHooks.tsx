import {useEffect} from "react";
import CustomError from "../classes/CustomError";
import {useMainContext} from "../contexts/MainContext";
import {OrderWithDetails} from "../interface/Order";
import {baseUrl} from "../utils/variables";

const doFetch = async (url: string, options: any) => {
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      return json;
    }
    catch (e) {
      throw new CustomError("Error when get data", 404)
    }
}

const useOrder = () => {
    const {orders, setOrders } = useMainContext();

    console.log("orders in useOrder", setOrders);
    const getOrders = async (shipped: boolean) => {

        console.log("getOrders");
        const options = {
            method: "GET",
        }
        const response = await doFetch(baseUrl + "order/" + shipped.toString(), options);

        setOrders(response as OrderWithDetails[]);
        console.log("orders in get", orders);
        return response as OrderWithDetails[];
    }

    // load order when component is mounted
    // useEffect(() => {
    //     getOrders(false);
    // }, []);

    return {getOrders};
}

export {useOrder};
