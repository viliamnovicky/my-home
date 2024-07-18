import styled, { css } from "styled-components";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import { CiSearch } from "react-icons/ci";

const colors = {
  home: css`
    background: var(--grey-700);
    color: var(--grey-50);
  `,
  food: css`
  background: var(--food-700);
  color: var(--food-50);
  `,
  coffee: css`
  background: var(--coffee-700);
  color: var(--coffee-50);
  `,
  map: css`
  background: var(--map-700);
  color: var(--map-50);
  `,
};

const StyledHeader = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  ${props=>colors[props.color]}
`;

function Header({ children, color }) {
  return (
    <StyledHeader color={color}>
      <Logo location={color}/>
      <Searchbar placeholder={`search in ${color} section`}/>
      {children}
    </StyledHeader>
  );
}

export default Header;
