import styled from "styled-components";

const StyledSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.6rem;
`;

function Spinner() {
  return <StyledSpinner>Loading...</StyledSpinner>;
}

export default Spinner;
