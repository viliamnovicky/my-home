import styled, { css } from "styled-components";

const colors = {
  home: css`
    background: var(--grey-700) !important;
    color: var(--grey-50) !important;

    &:hover {
      background: var(--grey-900) !important;
    }
  `,
  food: css`
  background: var(--food-700) !important;
  color: var(--food-50) !important;

  &:hover {
    background: var(--food-900) !important;
  }
  `,
  coffee: css`
  background: var(--coffee-700) !important;
  color: var(--coffee-50) !important;

  &:hover {
    background: var(--coffee-900) !important;
  }
  `,
  map: css`
  background: var(--map-700) !important;
  color: var(--map-50) !important;

  &:hover {
    background: var(--map-900) !important;
  }
  `,
};

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
  ${(props) => colors[props.color]}
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: auto;
  align-items: center;
`

function Button({size, children, onClick, color}) {
  return <StyledButton color={color} size={size} onClick={onClick}>{children}</StyledButton>;
}

export default Button;
