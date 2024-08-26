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
width: 30rem;
position: relative;
`

const SidebarButton = styled.label`
  width :5rem;
  height: 5rem;
  position: absolute;
  background: var(--grey-900) !important;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  border-radius: 50%;
  cursor: pointer;
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
