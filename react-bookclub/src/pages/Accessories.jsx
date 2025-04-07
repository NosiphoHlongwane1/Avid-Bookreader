import React, { useState } from "react";
import { Container, Card, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import accesory1 from "../assets/media/bookmarks.jpg";
import accessory2 from "../assets/media/booklight.jpg";
import accessory3 from "../assets/media/readingpillow.jpg";
import accessory4 from "../assets/media/bookstand.jpg";
import accessory5 from "../assets/media/Simple Pastel Notebook.jpg";
import accessory6 from "../assets/media/pencilset.jpg";

const accessories = [
  { id: 1, title: "Bookmark", price: 120, image: accesory1 },
  { id: 2, title: "Book Light", price: 150, image: accessory2 },
  { id: 3, title: "Reading Pillow", price: 180, image: accessory3 },
  { id: 4, title: "Book Stand", price: 100, image: accessory4 },
  { id: 5, title: "Notebook", price: 130, image: accessory5 },
  { id: 6, title: "Pencil Set", price: 110, image: accessory6 },
];

const Accessories = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (item) => {
    if (!cart.find((product) => product.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shop Accessories</h2>
      <Row>
        {accessories.map((item) => (
          <Col key={item.id} md={4} className="mb-3">
            <Card className="h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                className="img-fluid" // Ensures the image is responsive
                style={{ height: "300px", objectFit: "cover" }} // Fix the image size
              />
              <Card.Body className="d-flex flex-column">
  <Card.Title>{item.title}</Card.Title>
  <Card.Text style={{ color: "#000" }}>ZAR{item.price}</Card.Text>
  <Button
    onClick={() => addToCart(item)}
    className="mt-auto"
    style={{ backgroundColor: "#166145", borderColor: "#166145" }}
  >
    Add to Cart
  </Button>
</Card.Body>

            </Card>
          </Col>
        ))}
      </Row>

      <hr />
      <h4>Your Cart 🛒</h4>
      {cart.length === 0 ? (
        <p>No accessories in cart.</p>
      ) : (
        <ListGroup className="mb-3">
          {cart.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between">
              {item.title} - ZAR{item.price}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </ListGroup.Item>
          ))}
          <ListGroup.Item className="text-end">
            <strong>Total: ZAR{total}</strong>
          </ListGroup.Item>
        </ListGroup>
      )}

      <Button
        variant="success"
        disabled={cart.length === 0}
        onClick={() => navigate("/checkout", { state: { cart } })}
      >
        Checkout
      </Button>

      <div className="mt-4">
        <Link to="/Bookstore">← Back to Bookstore</Link>
      </div>
    </Container>
  );
};

export default Accessories;
