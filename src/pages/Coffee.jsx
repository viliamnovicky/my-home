import styled from "styled-components";
import Wildkaffee from "../../public/img/wildkaffee.png";
import Sidebar from "../ui/Sidebar";
import { PiCoffeeBeanFill, PiCoffeeBeanLight } from "react-icons/pi";

const coffeInfo = {
  roasteryName: "wildkaffe",
  coffeeName: "wildsau",
  coffeeType: "espresso",
  beanType: "arabica",
  roast: 3,
  intensity: 3,
  acidity: 2,
  taste: "fruits, chocolate",
  weightSingle: 13.3,
  weightDouble: 18.5,
  grind: 7,
  origin: ["Brazil", "Guatemala", "Ethiopia"],
  description: "Very tasty and refreshing espresso.",
  rating: 6,
  image: Wildkaffee,
  elevation: {
    bottom: 1100,
    top: 2150,
  },
};

const StyledCoffee = styled.div`
  width: 100%;
  height: calc(100vh - 15rem);
  display: flex;
  flex-direction: column;
`;

const CoffeeHeading = styled.h1`
  text-transform: uppercase;
  font-weight: 100;
  text-align: center;
  font-size: 5rem;
  padding-top: 2rem;

  span {
    font-weight: 800;
  }
`;

const CoffeeMapCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  padding: 10rem;
`;

const CoffeInfo = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  padding-top: 10rem;
  gap: 1rem;
`;

const CountryShape = styled.img`
  height: 100%;
  opacity: 0.1;
  filter: brightness(0) saturate(100%) invert(40%) sepia(5%) saturate(1331%) hue-rotate(314deg)
    brightness(88%) contrast(93%);
`;

const CoffeeImage = styled.img`
  height: 50vh;
`;

const CoffeeCont = styled.div``;

const CoffeeParagraph = styled.p`
  text-transform: uppercase;
  font-weight: 800;
  padding-bottom: 1rem;

  span {
    font-weight: 100;
  }
`;

function Coffee() {
  return (
    <>
      <Sidebar></Sidebar>
      <StyledCoffee>
        <CoffeeHeading>
          {coffeInfo.roasteryName}
          <span> {coffeInfo.coffeeName}</span>
        </CoffeeHeading>
        <CoffeInfo>
          <CoffeeImage src={coffeInfo.image} />
          <CoffeeCont>
            <CoffeeParagraph>
              <span>origin: </span>
              {coffeInfo.origin.map((country, index) =>
                index !== coffeInfo.origin.length - 1 ? country + ", " : country
              )}
            </CoffeeParagraph>

            <CoffeeParagraph>
              <span>type: </span>
              {coffeInfo.coffeeType}
            </CoffeeParagraph>
            <CoffeeParagraph>
              <span>beans: </span>
              {"100% " + coffeInfo.beanType}
            </CoffeeParagraph>
            <CoffeeParagraph>
              <span>taste: </span>
              {coffeInfo.taste}
            </CoffeeParagraph>
            <br></br>
            <br></br>
            <br></br>
            <CoffeeParagraph>
              <span>Roast:</span> <PiCoffeeBeanFill />
              <PiCoffeeBeanFill />
              <PiCoffeeBeanFill />
              <PiCoffeeBeanLight />
              <PiCoffeeBeanLight />
            </CoffeeParagraph>
            <CoffeeParagraph>
              <span>intensity:</span> <PiCoffeeBeanFill />
              <PiCoffeeBeanFill />
              <PiCoffeeBeanFill />
              <PiCoffeeBeanLight />
              <PiCoffeeBeanLight />
            </CoffeeParagraph>
            <CoffeeParagraph>
              <span>acidity:</span> <PiCoffeeBeanFill />
              <PiCoffeeBeanFill />
              <PiCoffeeBeanLight />
              <PiCoffeeBeanLight />
              <PiCoffeeBeanLight />
            </CoffeeParagraph>
          </CoffeeCont>
        </CoffeInfo>
        <CoffeeMapCont>
          {coffeInfo.origin.length > 0 &&
            coffeInfo.origin.map((country) => (
              <CountryShape
                key={`shape-${country}`}
                src={`/icons/maps/${country.toLowerCase()}.svg`}
              ></CountryShape>
            ))}
        </CoffeeMapCont>
      </StyledCoffee>
    </>
  );
}

export default Coffee;
