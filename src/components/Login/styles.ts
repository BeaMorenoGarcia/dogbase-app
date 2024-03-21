import styled from "styled-components";
import { Button, Input } from "../../styles";

export const Wrapper = styled.section`
  display: grid;
  justify-content: normal;
  align-items: end;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

export const LoginInput = styled(Input)`
  padding: 11px 13px;
  margin-bottom: 0.9rem;
  font-size: 14px;
`;

export const LoginButton = styled(Button)`
  max-width: 100%;
  padding: 11px 13px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0.6rem 0 0.9rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-weight: 500;
  color: black;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  img {
    height: inherit;
  }
`;

export const Error = styled.h6`
  color: red;
`;

export const Text = styled.span`
  display: flex;
  justify-content: flex-end;
  span {
    padding: 0 5px;
    color: blue;
    cursor: pointer;
  }
`;
