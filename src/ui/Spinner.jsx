import styled from "styled-components";
import { GiMountaintop } from "react-icons/gi";
import hill from "../../public/icons/hill.png";

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  z-index: 2;
`;

const SpinnerOuter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
  border-radius: 50%;
  border: 5px solid transparent;
  border-top-color: var(--map-800);
  animation: spin 1s infinite linear;
  width: 100%;
  height: 100%;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes opacity-spinner {
    0% {
      opacity: 0;
    }
    45% {
      opacity: 1;
    }
    65% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const SpinnerInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: opacity-spinner 2s infinite linear;

  img {
    width: 70%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
`;

function Spinner() {
  return (
    <SpinnerContainer>
      <SpinnerOuter />
      <SpinnerInner>
        <img src={hill}></img>
      </SpinnerInner>
    </SpinnerContainer>
  );
}

export default Spinner;
