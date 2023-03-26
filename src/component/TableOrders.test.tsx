import { render, screen } from '@testing-library/react';
import { OrderWithDetails } from '../interface/Order';
import { TableOrders } from './TableOrders';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

const data: OrderWithDetails[] = [
    {
        OrderID: 10248,
        CustomerID: 'VINET',
        EmployeeID: 5,
        OrderDate: '2016-07-04',
        RequiredDate: '2016-08-01',
        ShippedDate: '2016-07-16',
        ShipVia: 3,
        Freight: 32.38,
        ShipName: 'Vins et alcools Chevalier',
        ShipAddress: '59 rue de l-Abbaye',
        ShipCity: 'Reims',
        ShipRegion: 'Western Europe',
        ShipPostalCode: '51100',
        ShipCountry: 'France',
        OrderDetails: [
            {
                OrderID: 10248,
                ProductID: 11,
                UnitPrice: 14,
                Quantity: 12,
                Discount: 0,
                ProductDetails: {
                    ProductID: 11,
                    ProductName: 'Queso Cabrales',
                    SupplierID: 5,
                    CategoryID: 4,
                    QuantityPerUnit: '1 kg pkg.',
                    UnitPrice: 21,
                    UnitsInStock: 22,
                    UnitsOnOrder: 30,
                    ReorderLevel: 30,
                    Discontinued: '0',
                },
            },
            {
                OrderID: 10248,
                ProductID: 42,
                UnitPrice: 9.8,
                Quantity: 10,
                Discount: 0,
                ProductDetails: {
                    ProductID: 42,
                    ProductName: 'Singaporean Hokkien Fried Mee',
                    SupplierID: 20,
                    CategoryID: 5,
                    QuantityPerUnit: '32 - 1 kg pkgs.',
                    UnitPrice: 14,
                    UnitsInStock: 26,
                    UnitsOnOrder: 0,
                    ReorderLevel: 0,
                    Discontinued: '1',
                },
            },
            {
                OrderID: 10248,
                ProductID: 72,
                UnitPrice: 34.8,
                Quantity: 5,
                Discount: 0,
                ProductDetails: {
                    ProductID: 72,
                    ProductName: 'Mozzarella di Giovanni',
                    SupplierID: 14,
                    CategoryID: 4,
                    QuantityPerUnit: '24 - 200 g pkgs.',
                    UnitPrice: 34.8,
                    UnitsInStock: 14,
                    UnitsOnOrder: 0,
                    ReorderLevel: 0,
                    Discontinued: '0',
                },
            },
        ],
        CustomerDetails: {
            CustomerID: 'VINET',
            CompanyName: 'Vins et alcools Chevalier',
            ContactName: 'Paul Henriot',
            ContactTitle: 'Accounting Manager',
            Address: "59 rue de l'Abbaye",
            City: 'Reims',
            Region: 'Western Europe',
            PostalCode: '51100',
            Country: 'France',
            Phone: '26.47.15.10',
            Fax: '26.47.15.11',
        },
    },
];

describe('TableOrders', () => {
    it('should render', () => {
        render(<TableOrders orders={data} />);
        expect(screen.getByText('Shipping address')).toBeInTheDocument();
        expect(screen.getByText('Customer name')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('59 rue de l-Abbaye')).toBeInTheDocument();
        expect(screen.getByText('France')).toBeInTheDocument();
    });
});
