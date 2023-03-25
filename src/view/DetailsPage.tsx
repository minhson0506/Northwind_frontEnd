import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OrderDetailWithProduct } from "../interface/OrderDetail";
import { useMainContext } from "../contexts/MainContext";

interface DetailsProps {}

export const DetailsPage: React.FC<DetailsProps> = (props) => {
  const { id } = useParams();

  const { orders } = useMainContext();

  const navigate = useNavigate();

  const order = orders.find(
    (element) => element.OrderID === parseInt(id ? id : "0")
  );
  return order !== undefined ? (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      >
        Back
      </Button>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            OrderId: {order.OrderID}
          </Typography>
          <Typography variant="h5" component="div">
            Shipping address:{" "}
            {order.ShipAddress + " " + order.ShipCity + " " + order.ShipCountry}
          </Typography>
          {order.CustomerID !== null ? (
            <Typography variant="h5" component="div">
              Customer name: {order.CustomerDetails?.ContactName}
            </Typography>
          ) : (
            <p>No customer details</p>
          )}
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Product:{" "}
            {order.OrderDetails.map((element: OrderDetailWithProduct) => {
              return (
                <p key={element.ProductID}>
                  {element.ProductDetails.ProductName}
                </p>
              );
            })}
          </Typography>
          <Typography variant="body2">
            Status: {order.ShippedDate ? "Shipped" : "Not shipped"}
          </Typography>
          {order.RequiredDate !== null ? (
            <Typography variant="body2">
              {order.ShippedDate
                ? compareDate(order.RequiredDate, order.ShippedDate)
                  ? "Shipped before required date"
                  : "Shipped after required date"
                : compareDate("", order.RequiredDate)
                ? "Required date passed"
                : "Required date not passed yet"}
            </Typography>
          ) : (
            <p>No required date for delivery</p>
          )}
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </>
  ) : (
    <p>No data details</p>
  );
};

function compareDate(firstString: string, secondString: string) {
  if (firstString === "") {
    const firstDate = new Date();
    const secondDate = new Date(secondString);
    if (firstDate > secondDate) return true;
    return false;
  } else {
    const firstDate = new Date(firstString);
    const secondDate = new Date(secondString);
    if (firstDate > secondDate) return true;
    return false;
  }
}
