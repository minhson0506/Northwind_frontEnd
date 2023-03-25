import {Product} from "./Product";

export interface OrderDetail {
    OrderID: number;
    ProductID: number;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
}

export interface OrderDetailWithProduct extends OrderDetail {
    ProductDetails: Product;
}