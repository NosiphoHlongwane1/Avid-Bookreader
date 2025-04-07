import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, ListGroup, Button } from "react-bootstrap";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    navigate("/checkout", { state: { cart: newCart } });
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="mt-4">
      <h2>🧾 Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ListGroup className="mb-3">
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between">
                {item.title} - ZAR{item.price}
                <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="text-end">
              <strong>Total: ZAR{total}</strong>
            </ListGroup.Item>
          </ListGroup>
          <Button variant="success">Pay with PayPal (Coming Soon)</Button>
        </>
      )}
    </Container>
  );
};

export default Checkout;
