import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    width: 10rem;
    height: 3.5rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    width: 12rem;
    height: 4rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  dot: css`
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50rem;
  `,
  square: css`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    font-size: 2rem;
    background: var(--map-700);
    color: var(--map-50);

    &:hover {
        background: var(--map-800);
    }
  `,
};

const StyledButton = styled.button`
  ${(props) => sizes[props.size]}
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

function Button({size, children, onClick}) {
  return <StyledButton size={size} onClick={onClick}>{children}</StyledButton>;
}

export default Button;
