import React from 'react';
import { useOrder } from '../hooks/ApiHooks';
import { useEffect } from 'react';
import { useMainContext } from '../contexts/MainContext';
import CSS from 'csstype';
import { TableOrders } from '../component/TableOrders';
import { SearchBar, textStyles } from '../component/SearchBar';

interface HomeProps {}

export const HomePage: React.FC<HomeProps> = () => {
    const { getOrders } = useOrder();
    const { orders, checked, input } = useMainContext();

    // filter orders for display in table
    let data = checked ? orders.filter((element) => element.ShippedDate != null) : orders;
    if (input !== '') {
        data = data.filter((element) => {
            const productNameList = element.OrderDetails.map((detail) => detail.ProductDetails.ProductName);
            let includes = false;
            productNameList.forEach((name) => {
                console.log(name);
                if (name.toLowerCase().includes(input.toLowerCase())) {
                    includes = true;
                }
            });
            return includes;
        });
    }

    // load order when component is mounted
    useEffect(() => {
        getOrders();
    }, []);

    return (
        <div style={containerStyle}>
            <p style={titleStyles}>NORTHWIND</p>
            <div style={bodyStyles}>
                <SearchBar />
                {orders.length === 0 ? (
                    <p style={textStyles}>Loading...</p>
                ) : data.length > 0 ? (
                    <TableOrders orders={data} />
                ) : (
                    <p style={noOrderStyles}>No orders found</p>
                )}
            </div>
        </div>
    );
};

const containerStyle: CSS.Properties = {
    margin: 0,
    padding: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
};

const titleStyles: CSS.Properties = {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    marginLeft: '20px',
    color: '#ffffff',
    fontSize: '24px',
    lineHeight: '29px',
    marginTop: '20px',
    alignSelf: 'flex-start',
};

const bodyStyles: CSS.Properties = {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const noOrderStyles: CSS.Properties = {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    marginLeft: '20px',
    color: '#ff0000',
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '20px',
};
