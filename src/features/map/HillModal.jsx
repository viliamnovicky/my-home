import styled from "styled-components";
import { H1, H5, Paragraph } from "../../ui/Heading";
import { useGetHillData } from "./useHillsData";
import { useLocation } from "react-router";
import Spinner from "../../ui/Spinner";
import { format } from "date-fns";
import { SlideImage, SlideImageHeading, Image, SlideButtons } from "../../ui/Images";
import Button, { Buttons, ShowImageButton } from "../../ui/Button";
import { formatTimestampToDate } from "../../helpers/convertDateToTimestamp";
import AddVisitForm from "./AddVisitForm";
import { useState } from "react";
import ModalCarousel from "../../ui/ModalCarousel";


const StyledHillModal = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100%;
  height: 100%;

  @media (max-width: 1900px) {
    
    overflow-y: scroll;
  }
  @media (max-width: 1365px) {
    flex-direction: column;
    
  }
`;

const InfoCont = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 2rem;
  transition: all, 0.2s;
  position: relative;
  height: 40rem;
  justify-content: space-between;
  transition: all .2s;

  @media (max-width: 1365px) {
    padding: 1rem;
    flex-direction: column;
    height: auto;
  }
`;

const Paragraphs = styled.div`
  margin-top: 0;
  height: 100%;
  background: var(--grey-50);
  border-radius: 2rem;
  min-width: 50rem;
  align-self: right;

  @media (max-width: 1365px) {
    min-width: 100%;
  }
`;

function HillModal() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get("hill");
  console.log(tag);

  const [isOpenVisitForm, setIsOpenVisitForm] = useState(false);

  const { isLoadingHill, hillData, errorHill } = useGetHillData("viliamnovicky", tag);
  console.log(hillData, errorHill, tag);

  const lastVisitIndex = hillData?.visits?.length ? hillData.visits.length - 1 : null;
  const lastVisitDate =
    lastVisitIndex !== null ? hillData.visits[lastVisitIndex].date.toDate() : null;
  const formattedDate = lastVisitDate ? format(lastVisitDate, "dd.MM.yyyy") : "X";

  if (isLoadingHill)
    return (
      <StyledHillModal>
        <Spinner />
      </StyledHillModal>
    );

  return (
    <StyledHillModal>
      <H1>{hillData && hillData.name}</H1>
      <InfoCont grid={isOpenVisitForm ? "tree" : "two"}>
        <Image src={hillData.image ? hillData.image : ""} />
        {isOpenVisitForm && <AddVisitForm onClose={setIsOpenVisitForm}></AddVisitForm>}
        <Paragraphs>
          <H5 padding="medium">{hillData.description ? hillData.description[0] : "Another point on the map"}</H5>
          <Paragraph color="light">
            logged visits:{" "}
            <span>
              {hillData?.visits ? hillData.visits.length : "1"}{" "}
              {hillData?.visits?.length <= 1 ? "time" : "times"}
            </span>
          </Paragraph>
          <Paragraph color="dark">
            last visited: <span>{formattedDate}</span>
          </Paragraph>
          <Paragraph color="light">
            country: <span>{hillData.countryName}</span>
          </Paragraph>
          <Paragraph color="dark">
            altitude: <span>{hillData.altitude}m</span>
          </Paragraph>
          
          {!isOpenVisitForm && <Buttons bg="white" justify="center">
             <Button size="small" color="map" onClick={() => setIsOpenVisitForm(true)}>
              Add visit
            </Button>
          </Buttons>}
        </Paragraphs>
      </InfoCont>
      <ModalCarousel>
      {hillData.visits &&
          hillData.visits.map((visit) => (
            <SlideImage key={visit.image + "-cont"}>
              <Image src={visit.image} key={visit.image} alt={visit.image} />
              <ShowImageButton color="show_image">show</ShowImageButton>
              {/* <SlideButtons key={visit.image + "buttons"}>
                <Button
                  size="small"
                  color="decline"
                  key={visit.image + "delete"}
                  id={visit.image + "-delete"}
                >
                  delete visit
                </Button>
                <Button size="small" color="map" key={visit.image + "edit"} id={visit.image}>
                  edit visit
                </Button>
              </SlideButtons> */}
              <SlideImageHeading>{formatTimestampToDate(visit.date)}</SlideImageHeading>
            </SlideImage>
          ))}
      </ModalCarousel>

      {/* <SlideImagesCont>
        {hillData.visits &&
          hillData.visits.map((visit) => (
            <SlideImage key={visit.image + "-cont"}>
              <Image src={visit.image} key={visit.image} alt={visit.image} />
              <ShowImageButton color="show_image">show</ShowImageButton>
              <SlideButtons key={visit.image + "buttons"}>
                <Button
                  size="small"
                  color="decline"
                  key={visit.image + "delete"}
                  id={visit.image + "-delete"}
                >
                  delete visit
                </Button>
                <Button size="small" color="map" key={visit.image + "edit"} id={visit.image}>
                  edit visit
                </Button>
              </SlideButtons>
              <SlideImageHeading>{formatTimestampToDate(visit.date)}</SlideImageHeading>
            </SlideImage>
          ))}
      </SlideImagesCont> */}
    </StyledHillModal>
  );
}

export default HillModal;
