import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
    letter-spacing: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-weight: 100 !important;
    }

    svg {
        border-radius: 50%;
        background: var(--white-100);
        font-size: 8rem;
        width: 8rem;
        height: 8rem;
        padding: 1rem;
    }
`

export const H3 = styled.h3`
    font-size: 4rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    padding: 2rem 0;
    letter-spacing: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`