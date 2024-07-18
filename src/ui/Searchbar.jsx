import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const StyledSearchbar = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    right: .5rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2000;
    color: var(--grey-800)
  }

`;

const Input = styled.input`
  border-radius: 1rem;
  border: none;
  padding: 0.5rem 1rem;
  width: 30rem;
  color: var(--grey-800);
`;

function Searchbar({ value, setValue, placeholder }) {
  return (
    <StyledSearchbar>
      <Input value={value} setValue={setValue} placeholder={placeholder}></Input>
      <CiSearch />
    </StyledSearchbar>
  );
}

export default Searchbar;
