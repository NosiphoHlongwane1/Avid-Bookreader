import React, { useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import InEveryMirrorShesBlack from "../assets/media/in-every-mirror-she's-black.jpg";
import MuslimWomensDiary from "../assets/media/muslim-womens-diary.jpg";
import OnRotation from "../assets/media/on-rotation.jpg";

const Schedule = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedEventKey, setSelectedEventKey] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [attendees, setAttendees] = useState({});
  const [calendarMessages, setCalendarMessages] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCustomAlert, setShowCustomAlert] = useState(false); // ✅ Custom alert state

  const events = {
    "2025-04-26": {
      date: "April 26, 2025",
      time: "12:30 PM for 1:00 PM",
      venue: "Greenwich Square"
    },
    "2025-05-24": {
      date: "May 24, 2025",
      time: "12:30 PM for 1:00 PM",
      venue: "Greenwich Square"
    },
    "2025-06-21": {
      date: "June 21, 2025",
      time: "12:30 PM for 1:00 PM",
      venue: "Greenwich Square"
    }
  };

  const handleDateClick = (key) => {
    if (!isLoggedIn) {
      setShowCustomAlert(true); // ✅ Show alert if not logged in
      setTimeout(() => setShowCustomAlert(false), 3000); // Hide after 3s
      return;
    }

    if (!isLoggedIn) {
      // Show custom alert or handle logic
      navigate("/login");
    }    

    setSelectedEventKey(key);
    setShowForm(false);
    setShowModal(true);
  };

  const handleRSVPSubmit = (e) => {
    e.preventDefault();
    if (!name || !surname || !accepted) return;

    const newAttendee = { name, surname };
    const eventKey = selectedEventKey;

    setAttendees((prev) => ({
      ...prev,
      [eventKey]: [...(prev[eventKey] || []), newAttendee]
    }));

    // Reset form
    setName("");
    setSurname("");
    setAccepted(false);
    setShowForm(false);
    setShowModal(false);
  };

  const renderCalendar = (month, year) => {
    const monthIndex = month;
    const message = calendarMessages[monthIndex];

    const weeks = [];
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let day = 1 - firstDay;

    for (let w = 0; w < 6; w++) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        if (day > 0 && day <= daysInMonth) {
          const safeDay = day;
          const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isEvent = events[key];

          days.push(
            <td
              key={d}
              className={`calendar-day ${isEvent ? "event-day" : ""}`}
              onClick={() => {
                if (isEvent) {
                  handleDateClick(key);
                } else {
                  const futureDates = Object.keys(events).filter(date => new Date(date) > new Date(year, month, safeDay));
                  const nextEventKey = futureDates.sort()[0];
                  setCalendarMessages((prev) => ({
                    ...prev,
                    [month]: `The next Book Club event is on ${events[nextEventKey]?.date || "a future date"}.`
                  }));
                }
              }}
            >
              {day}
            </td>
          );
        } else {
          days.push(<td key={d}></td>);
        }
        day++;
      }
      weeks.push(<tr key={w}>{days}</tr>);
    }

    const monthName = new Date(year, month).toLocaleString("default", { month: "long" });

    return (
      <div className="calendar mb-4">
        <h4 className="text-center">{monthName} {year}</h4>
        {message && (
          <p className="text-center text-info small mb-2">{message}</p>
        )}
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
                <th key={i}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>{weeks}</tbody>
        </table>
      </div>
    );
  };

  const selectedEvent = selectedEventKey ? events[selectedEventKey] : null;
  const currentAttendees = selectedEventKey ? attendees[selectedEventKey] || [] : [];

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Book Club Calendar</h2>

      {/* ✅ Show custom alert when not logged in */}
      {showCustomAlert && (
        <div className="alert alert-warning text-center" role="alert">
          Please log in to view event details.
        </div>
      )}

      {/* ✅ Simulated login button */}
      {!isLoggedIn && (
        <div className="text-center mb-4">
          <Button variant="dark" onClick={() => setIsLoggedIn(true)}>
            Log In
          </Button>
        </div>
      )}

      <Row>
        {[3, 4, 5].map((month) => (
          <Col xs={12} md={4} key={month}>
            {renderCalendar(month, 2025)}
          </Col>
        ))}
      </Row>

      {/* RSVP Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered dialogClassName="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
          <Modal.Title style={{ color: "#fff" }}>
            {showForm ? "RSVP Form" : "Event Details"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          {selectedEvent && !showForm && (
            <>
              <p><strong>Date:</strong> {selectedEvent.date}</p>
              <p><strong>Time:</strong> {selectedEvent.time}</p>
              <p><strong>Venue:</strong> {selectedEvent.venue}</p>

              {currentAttendees.length > 0 && (
                <>
                  <hr />
                  <p><strong>Attendees:</strong></p>
                  <ul>
                    {currentAttendees.map((person, idx) => (
                      <li key={idx}>{person.name} {person.surname}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}

          {showForm && (
            <Form onSubmit={handleRSVPSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Check
                  type="checkbox"
                  label="I will attend this event"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  required
                />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-3">Submit RSVP</Button>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!showForm ? (
            <>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
              <Button variant="primary" onClick={() => setShowForm(true)}>RSVP</Button>
            </>
          ) : (
            <Button variant="secondary" onClick={() => setShowForm(false)}>Back</Button>
          )}
        </Modal.Footer>
      </Modal>

      <Row className="mt-4">
        <h3 className="text-center w-100 mb-4">Next Read</h3>
        {[
          { img: InEveryMirrorShesBlack, alt: "In Every Mirror She's Black", title: "April Read" },
          { img: MuslimWomensDiary, alt: "Muslim Women's Diary", title: "May Read" },
          { img: OnRotation, alt: "On Rotation", title: "June Read" }
        ].map((book, index) => (
          <Col md={4} key={index} className="mb-4">
            <div className="card h-100 d-flex flex-column justify-content-between">
              <div className="d-flex align-items-center justify-content-center" style={{ height: "250px" }}>
                <img
                  className="img-fluid"
                  src={book.img}
                  alt={book.alt}
                  style={{ maxHeight: "100%", maxWidth: "60%", objectFit: "contain" }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{book.title}</h5>
                <Link to="/bookstore" className="btn btn-outline-dark">View Book</Link>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Schedule;