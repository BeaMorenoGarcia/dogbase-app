import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: #FDF9F3;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

export const Header = styled.div`
  align-items: center;
  height: 15%;
  padding: 20px;
  display: flex;
  h1 {
    width: 50%;
    height: 50px;
    font-weight: 500;
    color: black;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
    text-align: left;
    display: flex;
    justify-content: left;
    align-items: center;
    img {
      height: inherit;
    }
  }
  div.user {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const Body = styled.div`
  height: 85%;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: rgba(255, 201, 57, 0.3);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  cursor: pointer;
  right: 0px;
`;

export const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
  margin: 5px;
  border: 1px solid black;
  cursor: pointer;
`;

export const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Button = styled.button`
  color: rgb(253, 249, 243);
  background: #ffc939;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
  &.disabled {
    background: rgba(255, 201, 57, 0.6);
    cursor: not-allowed;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: #f9f9fa;
  color: #2a2a29;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;