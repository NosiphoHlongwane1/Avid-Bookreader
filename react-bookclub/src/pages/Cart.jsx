import React from "react";
import { Container, ListGroup, Button } from "react-bootstrap";

const Cart = ({ cart }) => {
  return (
    <Container className="mt-4">
      <h2>Cart</h2>
      <ListGroup>
        {cart.map((item, index) => (
          <ListGroup.Item key={index}>
            {item.title} - ${item.price}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className="mt-3" href="/checkout">Proceed to Checkout</Button>
    </Container>
  );
};

export default Cart;
