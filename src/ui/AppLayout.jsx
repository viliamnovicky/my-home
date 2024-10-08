import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";
import styled, { css } from "styled-components";
import Footer from "./Footer";
import Main from "./Main"

const colors = {
    home: css`
      background: var(--grey-50);
      color: var(--grey-900);
    `,
    food: css`
    background: var(--food-50);
    color: var(--food-900);
    `,
    coffee: css`
    background: var(--coffee-50);
    color: var(--coffee-900);
    `,
    map: css`
    background: var(--map-50);
    color: var(--map-900);
    `,
  };

const StyledAppLayout = styled.div`
position: relative;
width: 100vw;
height: 100vh;
overflow: hidden;
${props=>colors[props.color]}
`;

const Checkbox = styled.input`
  position: absolute;
  // visibility: hidden;
`;

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

function AppLayout({menuVisibility, setMenuVisibility}) {
    const location = useLocation().pathname.split('/')[1]
    console.log(location)

  return (
    <StyledAppLayout color={location}>
      <Header color={location}>
        <Navbar />
      </Header>
      
      <Main color={location} menuVisibility={menuVisibility} setMenuVisibility={setMenuVisibility}>
        <Outlet />
      </Main>
      <Footer color={location}/>
    </StyledAppLayout>
  );
}

export default AppLayout;
