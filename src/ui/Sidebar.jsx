import { useLocation } from "react-router";
import styled, { css } from "styled-components"

const colors = {
    home: css`
      background: var(--grey-100);
      color: var(--grey-800);
    `,
    food: css`
    background: var(--food-100);
    color: var(--food-800);
    `,
    coffee: css`
    background: var(--coffee-100);
    color: var(--coffee-800);
    `,
    map: css`
    background: var(--map-100);
    color: var(--map-800);
    `,
  };

const StyledSidebar = styled.aside`
${props=>colors[props.color]};
border-radius: 2rem;
display:flex;
height: 100%;
width: 100%;
position: relative;
z-index: 1;
`

function Sidebar({children}) {
    const color = useLocation().pathname.split('/')[1]
    return (
        <StyledSidebar color={color}>
            {children}
        </StyledSidebar>
    )
}

export default Sidebar
