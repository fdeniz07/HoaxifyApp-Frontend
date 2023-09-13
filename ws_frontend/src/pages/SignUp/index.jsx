import React, { useState } from "react";
import axios from "axios";
import { Container, Form } from "react-bootstrap";

function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/v1/users", {
      username,
      email,
      password,
    });
  };
 
  return (
    <Container className="text-center">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <h1>SignUp</h1>
        </Form.Group>

        <Form.Group className="mb-5">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            id="username"
            type="text"
            placeholder="Enter Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">E-mail</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="passwordRepeat">Password Repeat</Form.Label>
          <Form.Control
            id="passwordRepeat"
            type="password"
            placeholder="Repeat Password"
            onChange={(event) => setPasswordRepeat(event.target.value)}
          />
        </Form.Group>
        <button disabled={!password || password !== passwordRepeat}>
          Sign Up
        </button>
      </Form>
    </Container>
  );
}

export default SignUp;

{
  /* <form onClick={onSubmit}>
<div className="textCenter">{<h1>SignUp</h1>}</div>
<div>
  <label htmlFor="username">Username</label>
  <input
    id="username"
    onChange={(event) => setUsername(event.target.value)}
  />
</div>
<div>
  <label htmlFor="email">E-mail</label>
  <input
    id="email"
    onChange={(event) => setEmail(event.target.value)}
  />
</div>
<div>
  <label htmlFor="password">Password</label>
  <input
    type="password"
    id="password"
    onChange={(event) => setPassword(event.target.value)}
  />
</div>
<div>
  <label htmlFor="passwordRepeat">Password Repeat</label>
  <input
    type="password"
    id="passwordRepeat"
    onChange={(event) => setPasswordRepeat(event.target.value)}
  />
</div>
<button disabled={!password || password !== passwordRepeat}>
  Sign Up
</button>
</form>
</Container> */
}
