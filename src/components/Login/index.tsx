import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser, login } from "../../actions";
import logo from "../../assets/logo.svg";
import { GlobalStyle } from "../../styles";
import { RootState } from "../..";
import {
  Wrapper,
  Title,
  LoginInput,
  LoginButton,
  Error,
  Form,
  Text,
} from "./styles";
import SignInDialog from "../SignInDialog";
import { validateEmail } from "../../utils";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state: RootState) => state);
  const [isValid, setIsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showCreateUserDialog, setShowCreateUserDialog] = useState(false);

  const handleChangeEmail = (email: string) => {
    setEmail(email);
    setIsValid(validateEmail(email));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login(email, password)).then(() => {
      if (!state.error) navigate("/private");
    });
  };

  const handleCreateUser = (email: string, password: string) => {
    dispatch(createUser(email, password)).then(() => {
      if (!state.error) navigate("/private");
    });
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>
          DogBase App
          <img src={logo} alt="App logo" />
        </Title>
        <Form onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
            className = {isValid ? "" : "invalid"}
          />
          <LoginInput
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {(state.error) ? <Error>Email or password not valid</Error> : null}
          <LoginButton type="submit" disabled={!isValid} className={!isValid ? "disabled" : ""}>Login</LoginButton>
          <Text>
            Don't have an account?
            <span onClick={() => setShowCreateUserDialog(true)}>
              Sign up
            </span>
          </Text>
        </Form>
      </Wrapper>
      <SignInDialog
        open={showCreateUserDialog}
        onClose={() => setShowCreateUserDialog(false)}
        onCreate={handleCreateUser}
      />
    </>
  );
}

export default Login;
