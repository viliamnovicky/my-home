import styled, { css } from "styled-components";

const colors = {
    light: css`
      background: #fff;
    `,
    dark: css`
      background: var(--grey-50);
    `,
  };

export const H1 = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

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
    padding: 1rem 0;
    letter-spacing: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
`

export const H5 = styled.h5`
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`

export const Paragraph = styled.p`
  text-transform: uppercase;
  font-weight: 100;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-width: 40rem;
  height: 5rem;
  ${(props) => colors[props.color]}

  span {
    font-weight: 800;
  }
`;