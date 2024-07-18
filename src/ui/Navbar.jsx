import { NavLink } from "react-router-dom";
import styled from "styled-components"

const NavList = styled.ul`
    display: flex;
    gap: .5rem;
`

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

function Navbar() {
    
    return (
        <NavList>
            <li>
                <StyledNavLink to ="/home">
                    <span>home</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to ="/food">
                    <span>food</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to ="/coffee">
                    <span>coffee</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to ="/map">
                    <span>map</span>
                </StyledNavLink>
            </li>
        </NavList>
    )
}

export default Navbar
