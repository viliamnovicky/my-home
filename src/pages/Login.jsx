import styled from "styled-components";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import { FormGroup, Input, Label } from "../ui/Form";
import Button, { Buttons } from "../ui/Button";

const StyledLogin = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const LoginForm = styled.div`
  position: absolute;
  max-width: 60rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Login() {
  return (
    <StyledLogin>
      <LoginForm>
        <FormGroup>
          <Label>Email</Label>
          <Input />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input />
        </FormGroup>
        <Buttons>
            <Button size="medium" color="confirm">Login</Button>
            <Button size="medium" color="food">Sign In</Button>
        </Buttons>
        <Button size="full_cont" color="neutral">Forgotten password</Button>
      </LoginForm>
    </StyledLogin>
  );
}

export default Login;
