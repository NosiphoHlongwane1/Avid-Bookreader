import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  const navigate = useNavigate(); // for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = registeredUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      // ✅ Save user info to localStorage so we can check if logged in
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      setShowCustomAlert(true);
      setMessage("Login Successful!");

      setTimeout(() => {
        setShowCustomAlert(false);
        navigate("/"); // ✅ Redirect to homepage
      }, 2000);
    } else {
      setMessage("You are not registered. Please register to log in.");
    }
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-3">Login to Your Account</h2>

      {message && (
        <Alert variant={showCustomAlert ? "success" : "danger"}>
          {message}
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            required
            onChange={handleChange}
            value={formData.password}
          />
        </Form.Group>

        <Button type="submit" className="mt-3 w-100" variant="success">
          Login
        </Button>
      </Form>

      <div className="text-center mt-3">
        <p>
          New here?{" "}
          <Link to="/Join">
            <strong>Join</strong>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
