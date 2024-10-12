import styled from "styled-components";

export const SlideImagesCont = styled.div`
  height: 20rem;
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  padding-left: 1rem;
`;

export const SlideButtons = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  bottom: 0;
  padding-bottom: 1rem;
  bottom: -20rem;
  transition: all .2s;
`;

export const SlideImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;

  button {
    opacity: 0;
  }

  &:hover {

    button {
        opacity: 1;
    }

    ${SlideButtons} {
      bottom: 0;
    }
  }
`;

export const Image = styled.img`
  height: 100%;
  border-radius: 2rem;
`;

export const SlideImageHeading = styled.p`
  position: absolute;
  z-index: 1;
  top: 0;
  color: var(--map-50);
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  text-align: right;
  padding: 1rem;
`;
