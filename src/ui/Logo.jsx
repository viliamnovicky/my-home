import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { PiCoffeeBeanFill } from "react-icons/pi";
import styled from "styled-components";
import { logoColors } from "../helpers/colors";


const StyledLogo = styled.p`
  font-size: 4.5rem;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 1rem;
  width: 25rem;

  svg {
    border-radius: 50%;
    padding: 1rem;
    color: inherit;
    ${props=>logoColors[props.color]}
  }

  p {
    font-size: 2rem;
    font-weight: 200;
    display: inline;
    text-transform: uppercase;
  }

  span {
    font-weight: 800;
  }
`;

function Logo({ location }) {
  return (
    <StyledLogo color={location}>
      {location === "home" && <FaHome/>}
      {location === "food" && <FaBowlFood />}
      {location === "coffee" && <PiCoffeeBeanFill />}
      {location === "map" && <FaMapMarkedAlt />}

      <p>
        my<span>{location}</span>
      </p>
    </StyledLogo>
  );
}

export default Logo;
