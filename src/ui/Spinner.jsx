import styled from "styled-components";
import { GiMountaintop } from "react-icons/gi";
import hill from "../../public/icons/hill.png";
import { logoColors } from "../helpers/colors";

import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { PiCoffeeBeanFill } from "react-icons/pi";

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
  ${(props) => logoColors[props.color]}

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

  svg {
    ${(props) => logoColors[props.color]}
    border-radius: 50%;
    padding: 1rem;
  }
`;

function Spinner({color, location}) {
  return (
    <SpinnerContainer>
      <SpinnerOuter/>
      <SpinnerInner color={color}>
      {location === "home" && <FaHome size="60"/>}
      {location === "food" && <FaBowlFood size="60"/>}
      {location === "coffee" && <PiCoffeeBeanFill size="60"/>}
      {location === "map" && <FaMapMarkedAlt size="60"/>}
      </SpinnerInner>
    </SpinnerContainer>
  );
}

export default Spinner;
