import styled from "styled-components";
import Button from "./Button";

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(35, 35, 35, 0.2);
  backdrop-filter: blur(5px);
  z-index: 10;
`;

const Inner = styled.div`
    position: absolute;
    width: 80vw;
    height: 80vh;
    background: var(--white);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
`

function Modal({children, onClose}) {
  return <Outer>
    <Inner>
        <Button onClick={onClose} size="dot" use="close" color="neutral_inverse">x</Button>
        {children}
    </Inner>
  </Outer>;
}

export default Modal;
