import React from "react";
import { Container, Row, Col, Carousel, Form, Button } from "react-bootstrap";
import bookSale from "../assets/media/booksale.png";
import bookClubMeeting from "../assets/media/bookclubmeeting.png";
import bookDay from "../assets/media/bookday.jpg";
import LoveinColour from "../assets/media/love-in-color.jpg";
import BookReview from "../assets/media/bookreview.png";
import HowBeautifulWeWere from "../assets/media/Imbolo Mbue- How Beautiful We Were.jpg";
import FourEidAndaFuneral from "../assets/media/four eid and a funeral.jpg";
import TheWellLivedLife from "../assets/media/the-well-lived-life.jpg";
import HeroCover from "../assets/media/herocover.png";

const LandingPage = () => {
  return (
    <>

     {/* Hero Section */}
<section
  className="hero-section text-center py-3"
  style={{
    backgroundImage: `url(${HeroCover})`, // Replace with any background image you prefer
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "400px", // ensures there's enough height for the image
  }}
>
  <div>
    <Container>
      <Carousel controls={false} indicators={true} interval={3000}>
        {[
          {
            img: bookSale,
            alt: "Book Sale",
          
          },
          {
            img: bookDay,
            alt: "World Book Day",
            
          },
          {
            img: bookClubMeeting,
            alt: "Book Club Meeting",
            
          },
        ].map((item, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                height: "500px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item.img}
                alt={item.alt}
                style={{
                  maxHeight: "100%",
                  width: "auto",
                  objectFit: "contain",
                }}
                className="d-block mx-auto"
              />
            </div>
            <Carousel.Caption
              style={{
                padding: "10px",
                borderRadius: "8px",
                color: "#166145"
              }}
            >
              <h5>{item.title}</h5>
              <p>{item.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </div>
</section>


      {/* Book Club Meeting Section */}
      <section className="previous-bookclub py-5" style={{ backgroundColor: "#f1f1f1" }}>
        <Container>
          <h2 className="text-center mb-5">Book Club Meeting</h2>
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <img className="d-block w-50 mx-auto mb-3" src={LoveinColour} alt="Love in Colour" />
              <p>Last Read: "Love in Colour"</p>
            </Col>
            <Col md={6} className="text-center">
              <img className="d-block w-50 mx-auto mb-3" src={BookReview} alt="Book Review" />
              <p>Book Review</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recommended Books Section */}
      <section className="recommended-section py-5" style={{ backgroundColor: "#e3f2fd" }}>
        <Container>
          <h2 className="text-center mb-5">Recommended Books</h2>
          <Row className="justify-content-center">
            <Col md={4} className="text-center">
              <img className="d-block w-50 mx-auto mb-3" src={HowBeautifulWeWere} alt="How Beautiful We Were" />
              <p>How Beautiful We Were</p>
            </Col>
            <Col md={4} className="text-center">
              <img className="d-block w-50 mx-auto mb-3" src={FourEidAndaFuneral} alt="Four Eid and a Funeral" />
              <p>Four Eid and a Funeral</p>
            </Col>
            <Col md={4} className="text-center">
              <img className="d-block w-50 mx-auto mb-3" src={TheWellLivedLife} alt="The Well Lived Life" />
              <p>The Well Lived Life</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-light" style={{ backgroundColor: "#212529" }}>
        <Container>
          <Row>
            <Col md={8}>
              <p>© 2025 Book Club. All Rights Reserved.</p>
              <p>Address: 123 Book Street, Readerville</p>
              <p>Contact: +123 456 7890 | info@bookclub.com</p>
            </Col>
            <Col md={4}>
              <h5>Enquire</h5>
              <Form>
                <Form.Group controlId="email">
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>
                <Form.Group controlId="message" className="mt-2">
                  <Form.Control as="textarea" rows={2} placeholder="Your Message" />
                </Form.Group>
                <Button variant="light" className="mt-2 w-100">Send</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>

    </>
  );
};

export default LandingPage;
