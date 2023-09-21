import React, { useEffect, useMemo, useState } from "react";
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
import { Input } from "./components/Input";

function SignUp() {
  //Degiskenler
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();

  //Verilerin kontrolü ici, eger bossa hata mesajı verir
  useEffect(() => {
    setErrors(function (lastErrors) {
      // lastErrors.username = undefined;
      return {
        ...lastErrors,
        username: undefined,
      };
    });
  }, [username]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        email: undefined,
      };
    });
  }, [email]);

  useEffect(() => {
    setErrors(function (lastErrors) {
      return {
        ...lastErrors,
        password: undefined,
      };
    });
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);

    try {
      const response = await signUp({
        username,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
    } catch (axiosError) {
      // console.log(axiosError);
      if (
        axiosError.response?.data && // eger responsun icinde data varsa
        axiosError.response.data.status === 400 // ve 400 hatasi aliniyorsa
      ) {
        setErrors(axiosError.response.data.validationErrors);
      } else {
        setGeneralError("Unexpeced error occured. Please try again later.");
      }
    } finally {
      setApiProgress(false);
    }
  };

  const passwordRepeatError = useMemo(() => {
    //useMemo hook'u sabit degerlerin render edilmesini engellemek icin kullanilir
    if (password && password !== passwordRepeat) {
      console.log("always running");
      return "Passwords don't match";
    }
    return "";
  }, [password, passwordRepeat]); // sadece password ve passwordRepeat degiskenlerinde degisiklik oldugunda calisir

  return (
    <div className="container mt-3">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sign Up</h1>
          </div>
          <div className="card-body">
            <Input
              id="username"
              label="Username"
              error={errors.username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <Input
              id="email"
              label="E-mail"
              error={errors.email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            />

            <Input
              id="password"
              label="Password"
              error={errors.password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />

            {/* <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                label="Password"
                className="form-control"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div> */}

            <Input
              id="passwordRepeat"
              label="Password Repeat"
              error={passwordRepeatError}
              onChange={(event) => setPasswordRepeat(event.target.value)}
              type="password"
            />

            {/* <div className="mb-3">
              <label htmlFor="passwordRepeat" className="form-label">
                Password Repeat
              </label>
              <input
                id="passwordRepeat"
                label="Password Repeat"
                className="form-control"
                type="password"
                onChange={(event) => setPasswordRepeat(event.target.value)}
              />
            </div> */}

            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            {generalError && (
              <div className="alert alert-danger">{generalError}</div>
            )}

            <div className="text-center">
              <button
                className="btn btn-primary w-100"
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
