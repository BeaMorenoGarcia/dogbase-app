import styled from "styled-components";
import { Button, Input } from "../../styles";

export const DialogOverlay = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const DialogContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  margin: 0 0 20px;
`;

export const DialogInput = styled(Input)`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CreateButton = styled(Button)`
  padding: 10px 20px;
  margin-right: 10px;
`;

export const CancelButton = styled.span`
position: absolute;
right: 20px;
top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
