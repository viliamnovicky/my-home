import styled from "styled-components";
import { H1, H3 } from "../../ui/Heading";

const StyledHillModal = styled.div`

`;

function HillModal({hill}) {
    if (!hill) return <StyledHillModal>
        <H1>Something went wrong</H1>
        <H3>try again later</H3>
    </StyledHillModal>
        
    
  
  return <StyledHillModal>
    <H1>{hill.name}</H1>
  </StyledHillModal>;
}

export default HillModal;
