import React, { useState } from "react";
import { Container, Button, Card, Row, Col, ListGroup, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// Import images
import book1 from "../assets/media/Buy yourself the damn flowers by Tam Kaur.jpg";
import book2 from "../assets/media/I finished Breaking the Chains of Phycological Slavery in one sitting and would do it again.jpg";
import book3 from "../assets/media/I want to trust you.jpg";
import book4 from "../assets/media/Ikigai_ The Japanese secret to a long and happy life_ Make every single day of your life joyful and meaningful_.jpg";
import book5 from "../assets/media/The Hanging of Angélique.jpg";
import book6 from "../assets/media/The-secret-lifes-of-introverts.jpg";
import book7 from "../assets/media/The-wisdom-of-tea.jpg";
import book8 from "../assets/media/The=middle-daughter.jpg";
import book9 from "../assets/media/Things-fall-apart.jpg";
import book10 from "../assets/media/We Are All So Good at Smiling - Amber McBride.jpg";
import book11 from "../assets/media/four eid and a funeral.jpg";
import book12 from "../assets/media/having-a-merry-heart.jpg";
import book13 from "../assets/media/in-every-mirror-she's-black.jpg";
import book14 from "../assets/media/love-in-color.jpg";
import book15 from "../assets/media/muslim-womens-diary.jpg";
import book16 from "../assets/media/on-rotation.jpg";
import book17 from "../assets/media/patience-is-a-subtle-thieve.jpg";
import book18 from "../assets/media/the-concubine.jpg";
import book19 from "../assets/media/the-hairdresser-of harare.jpg";
import book20 from "../assets/media/the-well-lived-life.jpg";
import book21 from "../assets/media/this-is-your-brain-on-food.jpg";
import book22 from "../assets/media/Atomic Habits.jpg";
import book23 from "../assets/media/Black Girl You Are Atlas.jpg";
import book24 from "../assets/media/Even When Your Voice Shakes.jpg";
import book25 from "../assets/media/Our Daughter, Who Art In America.jpg";
import book26 from "../assets/media/Yinka Where is your husband.jpg";
import book27 from "../assets/media/the other black girl.jpg";
import book28 from "../assets/media/You made a fool of your beauty.jpg";
import book29 from "../assets/media/make your bed.jpg";
import book30 from "../assets/media/zen.jpg";

// Book data
const books = [
  { id: 1, title: "Buy Yourself the damn Flowers", price: 120, image: book1 },
  { id: 2, title: "I finished Breaking the Chains of Psychological Slavery", price: 150, image: book2 },
  { id: 3, title: "I want to trust you", price: 180, image: book3 },
  { id: 4, title: "Ikigai", price: 100, image: book4 },
  { id: 5, title: "The Hanging of Angelique", price: 130, image: book5 },
  { id: 6, title: "The Secret Lives of Introverts", price: 110, image: book6 },
  { id: 7, title: "The Wisdom of Tea", price: 120, image: book7 },
  { id: 8, title: "The Middle Daughter", price: 150, image: book8 },
  { id: 9, title: "Things fall Apart", price: 180, image: book9 },
  { id: 10, title: "We are all so good at smiling", price: 100, image: book10 },
  { id: 11, title: "Four Eid and a Funeral", price: 130, image: book11 },
  { id: 12, title: "Having a Merry Heart", price: 110, image: book12 },
  { id: 13, title: "In Every Mirror She’s Black", price: 120, image: book13 },
  { id: 14, title: "Love in Colour", price: 150, image: book14 },
  { id: 15, title: "Muslim Women's Diary", price: 180, image: book15 },
  { id: 16, title: "On Rotation", price: 100, image: book16 },
  { id: 17, title: "Patience is a Subtle Thief", price: 130, image: book17 },
  { id: 18, title: "The Concubine", price: 110, image: book18 },
  { id: 19, title: "The Hairdresser of Harare", price: 120, image: book19 },
  { id: 20, title: "The Well Lived Life", price: 150, image: book20 },
  { id: 21, title: "This is Your Brain on Food", price: 180, image: book21 },
  { id: 22, title: "Atomic Habits", price: 100, image: book22 },
  { id: 23, title: "Girl You Are Atlas", price: 130, image: book23 },
  { id: 24, title: "Even When Your Voice Shakes", price: 110, image: book24 },
  { id: 25, title: "Our Daughter, Who Art in America", price: 120, image: book25 },
  { id: 26, title: "Yinka, Where is Your Husband", price: 150, image: book26 },
  { id: 27, title: "The Other Black Girl", price: 180, image: book27 },
  { id: 28, title: "You Made a Fool of Death With Your Beauty", price: 100, image: book28 },
  { id: 29, title: "Make Your Bed", price: 130, image: book29 },
  { id: 30, title: "Zen", price: 110, image: book30 },
];

const Bookstore = () => {
  const [cart, setCart] = useState([]);
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const navigate = useNavigate();

  const addToCart = (book) => {
    if (!cart.find((item) => item.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const total = cart.reduce((acc, book) => acc + book.price, 0);

  // Custom alert on submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCustomAlert(true);
    setTimeout(() => {
      setShowCustomAlert(false);
    }, 3000);
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Bookstore</h2>

      {showCustomAlert && (
        <Alert variant="success">✅ Your action was successful!</Alert>
      )}

      <Row>
        {books.map((book) => (
          <Col key={book.id} md={4} className="mb-4 d-flex">
            <Card className="h-100 d-flex flex-column w-100">
              <Card.Img
                variant="top"
                src={book.image}
                height="300px"
                style={{ objectFit: "contain", padding: "10px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{book.title}</Card.Title>
                <Card.Text style={{ color: "#000" }}>ZAR{book.price}</Card.Text>
                <Button
                  onClick={() => addToCart(book)}
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
        <p>No items in cart.</p>
      ) : (
        <ListGroup className="mb-3">
          {cart.map((book) => (
            <ListGroup.Item key={book.id} className="d-flex justify-content-between">
              {book.title} - ZAR{book.price}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(book.id)}>
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
        onClick={() => {
          handleSubmit(new Event('submit'));
          navigate("/checkout", { state: { cart } });
        }}
      >
        Checkout
      </Button>

      <div className="mt-4">
        <Link to="/Accessories">Shop Book Accessories →</Link>
      </div>
    </Container>
  );
};

export default Bookstore;
