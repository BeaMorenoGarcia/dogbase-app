import React, { useState } from 'react';
import { validateEmail } from '../../utils';
import { DialogOverlay, DialogContainer, Title, DialogInput, CreateButton, CancelButton, Header, Footer } from './styles';

interface SignInDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (email: string, password: string) => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({ open, onClose, onCreate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleCreate = () => {
    onCreate(email, password);
    setEmail('');
    setPassword('');
    onClose();
  };

  const handleChangeEmail = (email: string) => {
    setEmail(email);
    setIsValid(validateEmail(email));
  };

  return (
    <DialogOverlay open={open}>
      <DialogContainer>
        <Header>
        <Title>Sign up</Title>
        <CancelButton onClick={onClose}>X</CancelButton>
        </Header>
        <DialogInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => handleChangeEmail(e.target.value)}
          className = {isValid ? "" : "invalid"}
        />
        <DialogInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Footer>
          <CreateButton onClick={handleCreate}>Create</CreateButton>
        </Footer>
      </DialogContainer>
    </DialogOverlay>
  );
};

export default SignInDialog;
