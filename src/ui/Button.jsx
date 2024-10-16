import styled, { css } from "styled-components";
import { buttonColors } from "../helpers/colors";

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
  full_cont: css`
    width: 100%;
    font-size: 1.4rem;
    margin-top: 1rem;
    padding: 1rem;
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
  `,
};

const uses = {
  menu: css`
    position: absolute !important;
    left: 3rem;
    top: 3rem;
    z-index: 5 !important;
  `,
  close: css`
    position: absolute;
    right: 2rem;
    top: 2rem;
    border-radius: 50% !important;
  `,
};

const menu_states = {
  menu_visible: css`
    left: 30rem;
    top: 2rem;
    border-radius: 50% !important;
    width: 5rem;
    height: 5rem;
    filter: invert(100%);
    background: transparent !important;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    &:hover {
      filter: none;
    }
  `,
  menu_hidden: css`
    left: 3rem;
    top: 3rem;
  `,
};

const bgs = {
  white: css`
    background: var(--white);
  `,
};

const justify = {
  center: css`
    justify-content: center !important;
    align-items: center;
    padding: 1rem;
  `,
};

const positions = {
  absolute_bottom: css`
    position: absolute;
    bottom: 0;
    left: 0;
    //background: var(--grey-50);
    width: 100%;

    @media (max-width: 1365px) {
    position: relative;
  }
  `,
};

const StyledButton = styled.button`
  ${(props) => sizes[props.size]}
  ${(props) => buttonColors[props.color]}
  ${(props) => uses[props.use]}
  ${(props) => menu_states[props.state]}
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1rem;
  z-index: 1;
  transition: all 0.2s;
  font-weight: 500;
  border: none;
  outline: none;

  &:hover,
  &:active,
  &:focus,
  &:visited {
    border: none !important;
    outline: none !important;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  ${(props) => justify[props.justify]}
  ${(props) => bgs[props.bg]}
  ${(props) => positions[props.position]}
`;

export const ShowImageButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8rem;
  height: 8rem;
  transition: all 0.2s;
  border: none;
  border-radius: 50%;
  ${(props) => buttonColors[props.color]};
`;

function Button({ size, children, onClick, color, use, state }) {
  return (
    <StyledButton color={color} size={size} use={use} state={state} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;
