import styled from "styled-components";

export const SlideImagesCont = styled.div`
  height: 20rem;
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  padding-left: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  width: auto;

  @media (max-width: 1365px) {
    height: auto;
    flex-wrap: nowrap; 
  }
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

  @media (max-width: 1365px) {
    bottom: 0;
  }
`;

export const SlideImage = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  flex: 0 0 auto;

  @media (max-width: 1365px) {
    width: 60vw !important;
    height: 40vw
  }

  button {
    opacity: 0;

    @media (max-width: 1365px) {
    opacity: 1;
  }
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
