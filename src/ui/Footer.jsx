import styled, { css } from "styled-components";

const colors = {
    home: css`
      background: var(--grey-500);
      color: var(--grey-50);
    `,
    food: css`
    background: var(--food-500);
    color: var(--food-50);
    `,
    coffee: css`
    background: var(--coffee-500);
    color: var(--coffee-50);
    `,
    map: css`
    background: var(--map-500);
    color: var(--map-50);
    `,
  };

const StyledFooter = styled.footer`
  height: 5rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props=>colors[props.color]}
`;

function Footer({color}) {
  const date = new Date();
  const year = date.getFullYear();
  return <StyledFooter color={color}>&copy; Viliam Novický {year}</StyledFooter>;
}

export default Footer;
