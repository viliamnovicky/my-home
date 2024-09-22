import styled from "styled-components";
import Header from "../ui/Header";
import { FormGroup, Input, Label } from "../ui/Form";
import Button, { Buttons } from "../ui/Button";
import { H1 } from "../ui/Heading";
import { AiOutlineBarChart } from "react-icons/ai";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

const StyledLogin = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoginForm = styled.div`
  min-width: 40rem;
  max-width: 40rem;
  margin: 0 auto;
`;

// const LoginBG = styled.div`
//   width: 40vw;
//   height: 40vw;
//   position: absolute;
//   z-index: -1;
//   border-radius: 2rem;
// `;

function Login() {
  return (
    <>
        <Header color="login">
          <Navbar />
        </Header>
      <StyledLogin>
        <H1>
          <span>my</span>stats
          <AiOutlineBarChart />
        </H1>
        <LoginForm>
          <FormGroup>
            <Input placeholder="Email" />
            <Label>Email</Label>
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" />
            <Label>Password</Label>
          </FormGroup>
          <Buttons>
            <Button size="medium" color="confirm">
              Login
            </Button>
            <Button size="medium" color="food">
              Sign In
            </Button>
          </Buttons>
          <Button size="full_cont" color="neutral">
            Forgotten password
          </Button>
        </LoginForm>
        {/* <LoginBG /> */}
        <Footer />
      </StyledLogin>
    </>
  );
}

export default Login;
