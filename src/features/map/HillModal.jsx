import styled from "styled-components";
import { H1, H5, Paragraph } from "../../ui/Heading";
import { useGetHillData } from "./useHillsData";
import { useLocation } from "react-router";
import Spinner from "../../ui/Spinner";
import { format } from "date-fns";
import { SlideImageHeading, SlideImagesCont } from "../../ui/Images";
import Button, { Buttons } from "../../ui/Button";
import { formatTimestampToDate } from "../../helpers/convertDateToTimestamp";

const StyledHillModal = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

const Image = styled.img`
  width: 80%;
  border-radius: 2rem;
`;

const InfoCont = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding-left: 1rem;
`;

const MoreImagesCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  padding-top: 2rem;
  padding-left: 1rem;
  img {
    width: 100%;
  }
`;

const Paragraphs = styled.div`
  max-width: 50rem;
  margin: auto;
  margin-top: 0;
`;

function HillModal() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get("hill");
  console.log(tag);

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
      <InfoCont>
        <Image src={hillData.image ? hillData.image : ""}>
        </Image>
        <Paragraphs>
          <H5>{hillData.description ? hillData.description[0] : "Another point on the map"}</H5>
          <Paragraph color="dark">
            logged visits:{" "}
            <span>
              {hillData.visits ? hillData.visits.length : "1"}{" "}
              {hillData?.visits?.length === 1 ? "time" : !hillData.length ? "time" : "times"}
            </span>
          </Paragraph>
          <Paragraph>
            last visited: <span>{formattedDate}</span>
          </Paragraph>
          <Paragraph color="dark">
            country: <span>{hillData.countryName}</span>
          </Paragraph>
          <Paragraph>
            altitude: <span>{hillData.altitude}m</span>
          </Paragraph>
        </Paragraphs>
      </InfoCont>
      <MoreImagesCont>
        <SlideImagesCont>
          {hillData.visits &&
            hillData.visits.map((visit) => (
              <>
              <SlideImageHeading>{formatTimestampToDate(visit.date)}</SlideImageHeading>
                <Image src={visit.image} key={visit.image} alt={visit.image} />
                <Buttons key={visit.image + "buttons"}>
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
                </Buttons>
              </>
            ))}
        </SlideImagesCont>
      </MoreImagesCont>
    </StyledHillModal>
  );
}

export default HillModal;
