import { css } from "styled-components";

export const buttonColors = {
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
  confirm: css`
    background: var(--green-500) !important;
    color: var(--green-50) !important;

    &:hover {
      background: var(--green-600) !important;
    }
  `,
  decline: css`
    background: var(--red-500) !important;
    color: var(--red-50) !important;

    &:hover {
      background: var(--red-600) !important;
    }
  `,
  neutral: css`
    background: var(--grey-300) !important;
    color: var(--grey-50) !important;

    &:hover {
      background: var(--grey-400) !important;
    }
  `,
};
