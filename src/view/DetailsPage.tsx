import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { OrderDetailWithProduct } from '../interface/OrderDetail';
import { useMainContext } from '../contexts/MainContext';
import CSS from 'csstype';
import WarningIcon from '@mui/icons-material/Warning';

interface DetailsProps {}

export const DetailsPage: React.FC<DetailsProps> = (props) => {
    const { orders } = useMainContext();
    const navigate = useNavigate();

    const { id } = useParams();

    // find order by id
    const order = orders.find((element) => element.OrderID === parseInt(id ? id : '0'));

    return order !== undefined ? (
        <div style={containerStyles}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    navigate('/');
                }}
                style={buttonStyles}>
                Back
            </Button>
            <Card style={cardStyles}>
                <CardContent>
                    <Typography style={titleStyles}>OrderId: {order.OrderID}</Typography>
                    <Typography style={textStyles}>
                        Shipping address: {order.ShipAddress + ' ' + order.ShipCity + ' ' + order.ShipCountry}
                    </Typography>
                    {order.CustomerID !== null ? (
                        <Typography style={textStyles}>Customer name: {order.CustomerDetails?.ContactName}</Typography>
                    ) : (
                        <p>No customer details</p>
                    )}
                    <Typography style={textStyles}>
                        Product:{' '}
                        {order.OrderDetails.map((element: OrderDetailWithProduct) => {
                            return <p key={element.ProductID}>- {element.ProductDetails.ProductName}</p>;
                        })}
                    </Typography>
                    <Typography style={textStyles}>Status: {order.ShippedDate ? 'Shipped' : 'Not shipped'}</Typography>
                    {order.RequiredDate !== null ? (
                        <Typography style={textStyles}>
                            {order.ShippedDate ? (
                                compareDate(order.RequiredDate, order.ShippedDate) ? (
                                    <p>Shipped before required date</p>
                                ) : (
                                    <>
                                        <p>Shipped after required date</p>
                                        <WarningIcon />
                                    </>
                                )
                            ) : compareDate('', order.RequiredDate) ? (
                                <p>Required date passed</p>
                            ) : (
                                <p>Required date not passed yet</p>
                            )}
                        </Typography>
                    ) : (
                        <p>No required date for delivery</p>
                    )}
                </CardContent>
            </Card>
        </div>
    ) : (
        <p>No data details</p>
    );
};

const containerStyles: CSS.Properties = {
    margin: 0,
    padding: 0,
};

const buttonStyles: CSS.Properties = {
    margin: '5%',
    backgroundColor: '#012B37',
    color: '#fff',
    marginLeft: '20px',
    marginTop: '20px',
    border: '1px solid #000',
};

const cardStyles: CSS.Properties = {
    borderRadius: 0,
    width: '50%',
    margin: 'auto',
    marginTop: '5%',
    padding: 0,
    border: '1px solid #000',
    maxWidth: '50%',
    backgroundColor: '#012B37',
};

const titleStyles: React.CSSProperties = {
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
};

const textStyles: React.CSSProperties = {
    fontSize: 16,
    color: '#ffffff',
};

// comapare dates for getting status of order: late or on time
function compareDate(firstString: string, secondString: string) {
    const firstDate = firstString === '' ? new Date() : new Date(firstString);
    const secondDate = new Date(secondString);

    return firstDate > secondDate;
}
