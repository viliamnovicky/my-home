import styled from "styled-components";
import Sidebar from "../ui/Sidebar";
import { NavLink } from "react-router-dom";

const StyledFood = styled.div``;

const NavList = styled.ul`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  
  span {
    text-transform: uppercase;
  }

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: inherit;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.5rem 2rem;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-bottom: 2px solid var(--white);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--grey-600);
  }
`;

function Food() {
  return (
      <StyledFood>
        
      </StyledFood>
  );
}

export default Food;
