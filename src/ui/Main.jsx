import styled, { css } from "styled-components"
import Button from "./Button"
import { useState } from "react"

const menu_states = {
    menu_visible: css`
        grid-template-columns: 30rem 1fr;
        gap: 1rem;
    `,
    menu_hidden: css`
        grid-template-columns: 0rem 1fr;
        gap: 0rem;
    `
}


const StyledMain = styled.div`
    display: grid;
    width: 100vw;
    margin:auto;
    height: calc(100% - 13rem);
    grid-template-columns: auto 1fr;
    position: relative;
    padding: 1rem;
    transition: all 0.2s;
    ${props=>menu_states[props.menuState]}
`

function Main({children, color, menuVisibility, setMenuVisibility}) {
    function handleMenuVisibility() {
        setMenuVisibility(!menuVisibility)
        console.log(menuVisibility)
    }
    return (
        <StyledMain menuState = {menuVisibility ? "menu_visible" : "menu_hidden"}>
            <Button size="dot" use="menu" color={color} onClick={handleMenuVisibility}>☰</Button>
            {children}
        </StyledMain>
    )
}

export default Main
