import styled, { css } from "styled-components";

const colors = {
    light: css`
      background: #fff;
    `,
    dark: css`
      background: var(--grey-50);
    `,
  };

const paddings = {
  small: css`
  padding: 1rem;
  `,
  medium: css`
  padding: 2rem;
  `,
  large: css`
  padding: 4rem;
  `,
  }

export const H1 = styled.h1`
    font-size: 6rem;
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: .5rem;
    padding: 0;
    margin: 0 auto;
    ${(props) => paddings[props.padding]}

    @media (max-width: 1365px) {
    font-size: 3rem;
  }

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
    letter-spacing: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    ${(props) => paddings[props.padding]}
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
    ${(props) => paddings[props.padding]}
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

  @media (max-width: 1365px) {
    min-width: 100%;
  }

  span {
    font-weight: 800;
  }
`;