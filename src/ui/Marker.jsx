import styled, { css } from "styled-components";

const colors = {
  blue: css`
    color: blue;
  `,
  green: css`
    color: green;
  `,
  orange: css`
    color: orange;
  `,
  red: css`
    color: red;
  `,
  black: css`
    color: var(--black);
  `,
};

const StyledMarker = styled.div``;

function Marker() {
  return <StyledMarker>fdgedfgh</StyledMarker>;
}

export default Marker;
