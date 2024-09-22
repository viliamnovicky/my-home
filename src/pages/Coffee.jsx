import styled, { css } from "styled-components";
import Wildkaffee from "../../public/img/wildkaffee.png";
import Sidebar from "../ui/Sidebar";
import { PiCoffeeBeanFill, PiCoffeeBeanLight, PiHeartFill, PiHeartLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useState } from "react";
import Button from "../ui/Button";
import CoffeeSidebar from "../features/coffee/CoffeeSidebar";
import NewCoffeeForm from "../features/coffee/NewCoffeeForm";

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
  machineDoseLevel: 13,
  grindMachine: 4,
  grindGrinder: 9,
  origin: ["Brazil", "Guatemala", "Ethiopia"],
  description: "Very tasty and refreshing espresso.",
  rating: 6,
  image: Wildkaffee,
  elevation: {
    bottom: 1100,
    top: 2150,
  },
};

const colors = {
  light: css`
    background: #fff;
  `,
  dark: css`
    background: #6d585827;
  `,
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

const CoffeDescription = styled.h2`
  font-style: italic;
  font-weight: 100;
  text-align: center;
`

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
  z-index: 0;
`;

const CoffeInfo = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 5rem;
  padding-right: 10rem;
  gap: 10rem;
`;

const CountryShape = styled.img`
  height: 100%;
  opacity: 0.1;
  filter: brightness(0) saturate(100%) invert(40%) sepia(5%) saturate(1331%) hue-rotate(314deg)
    brightness(88%) contrast(93%);
  z-index: -1;
  position: relative;
`;

const CoffeeImage = styled.img`
  width: 30vw;
`;

const CoffeeCont = styled.div``;

const CoffeeParagraph = styled.p`
  text-transform: uppercase;
  font-weight: 100;
  padding: 1rem 2rem;
  ${(props) => colors[props.color]}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-width: 40rem;
  height: 5rem;

  span {
    font-weight: 800;
  }
`;

function Coffee() {
  const [openForm, setOpenForm] = useState(false)
  return (
    <IconContext.Provider value = {{style: {fontSize: "2rem"}}}>
      <Sidebar>
        {!openForm && <CoffeeSidebar openForm={openForm} setOpenForm={setOpenForm}/>}
        {openForm && <NewCoffeeForm/>}
      </Sidebar>
      <StyledCoffee>
        <CoffeeMapCont>
          {coffeInfo.origin.length > 0 &&
            coffeInfo.origin.map((country) => (
              <CountryShape
                key={`shape-${country}`}
                src={`/icons/maps/${country.toLowerCase()}.svg`}
              ></CountryShape>
            ))}
        </CoffeeMapCont>
        <CoffeeHeading>
          {coffeInfo.roasteryName}
          <span> {coffeInfo.coffeeName}</span>
        </CoffeeHeading>
        <CoffeDescription>„{coffeInfo.description}“</CoffeDescription>
        <CoffeInfo>
          <CoffeeImage src={coffeInfo.image} />
          <CoffeeCont>
            <CoffeeParagraph color="dark">
              origin:
              <span>
                {coffeInfo.origin.map((country, index) =>
                  index !== coffeInfo.origin.length - 1 ? country + ", " : country
                )}
              </span>
            </CoffeeParagraph>

            <CoffeeParagraph color="light">
              type: <span>{coffeInfo.coffeeType}</span>
            </CoffeeParagraph>
            <CoffeeParagraph color={"dark"}>
              beans:<span>{"100% " + coffeInfo.beanType}</span>
            </CoffeeParagraph>
            <CoffeeParagraph color={"light"}>
              taste:<span>{coffeInfo.taste}</span>
            </CoffeeParagraph>
            
            <CoffeeParagraph color={"dark"}>
              elevation:
              <span>
                {coffeInfo.elevation.bottom ? `${coffeInfo.elevation.bottom} - ${coffeInfo.elevation.top} m` : `${coffeInfo.elevation.top}m`}
              </span>
            </CoffeeParagraph>
            <CoffeeParagraph color={"light"}>
              Roast:
              <span>
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
              </span>
            </CoffeeParagraph>
            <CoffeeParagraph color={"dark"}>
              intensity:
              <span>
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
              </span>
            </CoffeeParagraph>
            <CoffeeParagraph color={"light"}>
              acidity:
              <span>
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
              </span>
            </CoffeeParagraph>
          </CoffeeCont>
          <CoffeeCont>
          <CoffeeParagraph color={"light"}>
              rating:
              <span>
                
                <PiHeartLight />
                <PiHeartLight />
                <PiHeartLight />
                <PiHeartFill />
                <PiHeartFill />
                <PiHeartFill />
                <PiHeartFill />
                <PiHeartFill />
                <PiHeartFill />
                <PiHeartFill />
        
              </span>
            </CoffeeParagraph>
            <CoffeeParagraph color="dark">Machine dose level:<span>{coffeInfo.machineDoseLevel} / 40</span></CoffeeParagraph>
            <CoffeeParagraph color="light">weight single shot:<span>{coffeInfo.weightSingle}g</span></CoffeeParagraph>
            <CoffeeParagraph color="dark">weight double shot:<span>{coffeInfo.weightDouble}g</span></CoffeeParagraph>
            <CoffeeParagraph color="light">machine Grinding size:<span>{coffeInfo.grindMachine} / 7</span></CoffeeParagraph>
            <CoffeeParagraph color="dark">grinder Grinding size:<span>{coffeInfo.grindGrinder} / 32</span></CoffeeParagraph>
          </CoffeeCont>
        </CoffeInfo>
      </StyledCoffee>
    </IconContext.Provider>
  );
}

export default Coffee;
