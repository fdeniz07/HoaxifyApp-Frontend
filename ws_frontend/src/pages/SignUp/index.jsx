import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import signUp from "./api";

function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setApiProgress(true);

    try {
      const response = await signUp({
        username,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
    } catch {
    } finally {
      setApiProgress(false);
    }
  };
  return (
    <div className="container mt-3">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                className="form-control"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                id="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                className="form-control"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordRepeat" className="form-label">
                Password Repeat
              </label>
              <input
                id="passwordRepeat"
                className="form-control"
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
              >
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

{
  /* <Container className="mt-5 col-lg-6 offset-lg-3 col-md-8 offset-sm-2 col-sm-10 offset-sm-1">
<Card style={{ width: "30rem" }}>
  <Card.Body className="card-header">
    <Card.Title className="text-center">
      <h1>SignUp</h1>
    </Card.Title>
  </Card.Body>

  <Form className="mx-5 mt-5 fs-4">
    <Form.Group as={Row} className="mb-3">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        id="username"
        type="text"
        placeholder="Enter Username"
        onChange={(event) => setUsername(event.target.value)}
      />
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label htmlFor="email">E-mail</Form.Label>
      <Form.Control
        id="email"
        type="email"
        placeholder="Enter Email"
        onChange={(event) => setEmail(event.target.value)}
      />
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        id="password"
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label htmlFor="passwordRepeat">Password Repeat</Form.Label>
      <Form.Control
        id="passwordRepeat"
        type="password"
        placeholder="Repeat Password"
        onChange={(event) => setPasswordRepeat(event.target.value)}
      />
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Col className="text-center">
        <Button
          disabled={
            apiProgress || !password || password !== passwordRepeat
          }
          variant="primary"
          type="submit"
        >
          {apiProgress && (
            <span className="visually-hidden"></span>
          )}
          Sign Up
        </Button>{" "}
      </Col>
    </Form.Group>
  </Form>
</Card>


</Container> */
}
