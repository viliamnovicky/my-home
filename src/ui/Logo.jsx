import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { PiCoffeeBeanFill } from "react-icons/pi";
import styled, { css } from "styled-components";

const colors = {
    home: css`
      color: var(--grey-700);
      background: var(--grey-50);
    `,
    food: css`
    color: var(--food-700);
    background: var(--food-50);
    `,
    coffee: css`
    color: var(--coffee-700);
    background: var(--coffee-50);
    `,
    map: css`
    color: var(--map-700);
    background: var(--map-50);
    `,
  };

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
    ${props=>colors[props.color]}
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
