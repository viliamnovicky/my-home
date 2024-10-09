import styled, { css } from "styled-components";
import { buttonColors } from "../helpers/colors";

export const Form = styled.form`
  background: transparent;
  padding: 2rem;
  width: 100%;

  .inactive {
    cursor: not-allowed;
  }

  input::file-selector-button {
  border-radius: 1rem;
  ${(props) => buttonColors[props.color]}
  border: none;
  padding: .8rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
}
`;

export const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  width: 100%;
  padding-bottom: 2rem;
`;

export const FormGroup = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  position: relative;
`;

export const CheckboxGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  //padding: 2rem 0;
  margin: auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2rem;
  position: relative;
  padding-top: 1rem;
  padding-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    font-weight: 500;

    label {
      font-weight: 400;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding-left: 2rem;
      font-size: 1.4rem;

      &:before {
        width: 1.1rem;
        height: 1.1rem;
        background: var(--white);
        border: 2px solid var(--white);
        outline: 2px solid var(--red-400);
        border-radius: 50%;
        content: "";
        position: absolute;
        left: 0rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  visibility: hidden;

  &:checked + label:before {
    background: var(--green-400);
    outline: 2px solid var(--green-400);
  }

  &:checked + label {
    font-weight: 800;
  }
`;

export const Text = styled.textarea`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  width: 100%;
`;

export const Select = styled.select`
  padding: 1rem 1.5rem;
  border-radius: 5rem;
  outline: none;
  border: none;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  width: 100%;

  & option {
    background: rgba(255, 255, 255, 0.8);
  }

  &:active,
  &:focus {
    /* outline: 5px solid var(--grey-500); */
    background: rgba(255, 255, 255, 0.8);
  }
`;

export const Input = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1.6rem;
  width: 100%;
  transition: all .2s;

  &::selection {
    color: var(--white-100) !important;
    background-color: var(--grey-400) !important;
    
  }

  &:disabled {
    background: var(--gray-50);
    
  }

  &::placeholder {
    transition: all .2s;
  }

  /* Ensure label is visible when input is focused */
  &:focus::placeholder {
    color: transparent;
  }

  ${(props) =>
    props.as === "textarea" &&
    css`
      height: 30rem;
    `}
`;

export const ErrorMessage = styled.p`
  color: red;
  opacity: .5;
  position: absolute;
  top: 1.1rem;
  right: 2rem;
`

export const Label = styled.label`
  padding-left: 1.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  transition: all 0.2s;

  /* Only hide label when input is not focused and has no value */
  input:placeholder-shown + & {
    opacity: 0;
    visibility: hidden;
  }

  input:focus + &,
  input:not(:placeholder-shown) + & {
    opacity: 1;
    visibility: visible;
    margin-top: 1rem;
    color: var(--color-primary-700);
  }
`;

export const SelectedImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 2rem;
  border-radius: 2rem;
`;