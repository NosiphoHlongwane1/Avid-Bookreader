import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    subscription: "monthly",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing users
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check for duplicate email
    const emailExists = storedUsers.find((user) => user.email === formData.email);

    if (emailExists) {
      setMessage("This email is already registered. Please log in.");
    } else {
      // Save new user
      const updatedUsers = [...storedUsers, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setMessage("📚 Registration successful! Redirecting to login...");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-3">Join Our Book Club</h2>

      {message && <Alert variant="info">{message}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" required onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control type="text" name="surname" required onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" name="age" required onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Select name="gender" required onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" required onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Subscription Plan</Form.Label>
          <Form.Select name="subscription" required onChange={handleChange}>
            <option value="monthly">Monthly Subscription (R200)</option>
            <option value="yearly">Yearly Subscription (R8000)</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mt-3 w-100">Join Now</Button>
      </Form>
    </Container>
  );
};

export default Join;
