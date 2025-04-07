import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// Image imports
import AboutBg from "../assets/media/aboutcover.jpg";
import ImgLeft1 from "../assets/media/imgleft1.jpg";
import ImgRight1 from "../assets/media/imgright1.jpg";
import ImgLeft2 from "../assets/media/imgleft2.jpg";
import Team1 from "../assets/media/team1.jpg";
import Team2 from "../assets/media/team2.jpg";
import Team3 from "../assets/media/team3.jpg";
import Team4 from "../assets/media/team4.jpg";
import Team5 from "../assets/media/team5.jpg";
import Team6 from "../assets/media/team6.jpg";

const About = () => {
  return (
    <>
      {/* Hero/About Us Section */}
      <section
        style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 0",
          color: "#fff",
          textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
        }}
      >
        <Container>
          <h2 className="text-center fst-italic display-4">About Us</h2>
        </Container>
      </section>

      {/* Mission Quote */}
      <section className="py-5" style={{ backgroundColor: "#166145" }}>
        <Container>
          <h3 className="text-center mb-4 fst-italic">"Bringing books to life through stories, connection, and community."</h3>
        </Container>
      </section>

      {/* Alternating Text and Image Sections */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md={6}>
              <img src={ImgLeft1} className="img-fluid rounded shadow" alt="Book Lovers" />
            </Col>
            <Col md={6}>
              <h4>Our Story</h4>
              <p>
                Founded by passionate readers, our club grew from a simple gathering of friends to a vibrant community of book lovers. Each meeting brings new perspectives, deeper reflections, and great conversation.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center mb-5 flex-md-row-reverse">
            <Col md={6}>
              <img src={ImgRight1} className="img-fluid rounded shadow" alt="Discussion" />
            </Col>
            <Col md={6}>
              <h4>What We Do</h4>
              <p>
                We meet monthly to discuss selected books, host author Q&As, and organize themed events. From fantasy fanatics to memoir readers, everyone has a voice here.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col md={6}>
              <img src={ImgLeft2} className="img-fluid rounded shadow" alt="Reading Together" />
            </Col>
            <Col md={6}>
              <h4>Why It Matters</h4>
              <p>
                In a fast-paced world, reading helps us slow down and connect. Our club is more than books—it’s about belonging, growth, and shared experiences.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5" style={{ backgroundColor: "#166145" }}>
  <Container>
    <h3 className="text-center mb-5">Meet the Team</h3>
    <Row>
      {[
        { img: Team1, name: "Gordon Meyer", role: "Co-Founder & Creative Director" },
        { img: Team2, name: "Sihle Dlamini", role: "Community Manager" },
        { img: Team3, name: "Amile Nkosi", role: "Events Coordinator" },
        { img: Team4, name: "Adeola Nkule", role: "Book Curator & Content Lead" },
        { img: Team5, name: "Ziya Chin", role: "Membership Experience Lead" },
        { img: Team6, name: "Cherly Blue", role: "Marketing & Outreach" },
      ].map((member, index) => (
        <Col md={4} lg={4} className="mb-4" key={index}>
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={member.img} />
            <Card.Body className="text-center">
              <Card.Title>{member.name}</Card.Title>
              <Card.Text style={{ color: "#000" }}>{member.role}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* Core Values Section */}
      <section className="py-5">
        <Container>
          <h3 className="text-center mb-4">Our Core Values</h3>
          <Row className="text-center">
            <Col md={4}>
              <h5>Inclusivity</h5>
              <p>We welcome every reader with an open heart and mind, valuing diverse voices and stories.</p>
            </Col>
            <Col md={4}>
              <h5>Connection</h5>
              <p>We believe books create strong bonds and meaningful dialogue among people of all backgrounds.</p>
            </Col>
            <Col md={4}>
              <h5>Growth</h5>
              <p>We are lifelong learners, open to exploring new genres, ideas, and perspectives through reading.</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
