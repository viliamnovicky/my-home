import styled, { css } from "styled-components";
import Wildkaffee from "../../public/img/wildkaffee.png";
import Sidebar from "../ui/Sidebar";
import { PiCoffeeBeanFill, PiCoffeeBeanLight, PiHeartFill, PiHeartLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import { useState } from "react";
import Button from "../ui/Button";
import CoffeeSidebar from "../features/coffee/CoffeeSidebar";
import NewCoffeeForm from "../features/coffee/NewCoffeeForm";
import { Paragraph } from "../ui/Heading";

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
            <Paragraph color="dark">
              origin:
              <span>
                {coffeInfo.origin.map((country, index) =>
                  index !== coffeInfo.origin.length - 1 ? country + ", " : country
                )}
              </span>
            </Paragraph>

            <Paragraph color="light">
              type: <span>{coffeInfo.coffeeType}</span>
            </Paragraph>
            <Paragraph color={"dark"}>
              beans:<span>{"100% " + coffeInfo.beanType}</span>
            </Paragraph>
            <Paragraph color={"light"}>
              taste:<span>{coffeInfo.taste}</span>
            </Paragraph>
            
            <Paragraph color={"dark"}>
              elevation:
              <span>
                {coffeInfo.elevation.bottom ? `${coffeInfo.elevation.bottom} - ${coffeInfo.elevation.top} m` : `${coffeInfo.elevation.top}m`}
              </span>
            </Paragraph>
            <Paragraph color={"light"}>
              Roast:
              <span>
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
              </span>
            </Paragraph>
            <Paragraph color={"dark"}>
              intensity:
              <span>
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
              </span>
            </Paragraph>
            <Paragraph color={"light"}>
              acidity:
              <span>
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanLight />
                <PiCoffeeBeanFill />
                <PiCoffeeBeanFill />
              </span>
            </Paragraph>
          </CoffeeCont>
          <CoffeeCont>
          <Paragraph color={"light"}>
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
            </Paragraph>
            <Paragraph color="dark">Machine dose level:<span>{coffeInfo.machineDoseLevel} / 40</span></Paragraph>
            <Paragraph color="light">weight single shot:<span>{coffeInfo.weightSingle}g</span></Paragraph>
            <Paragraph color="dark">weight double shot:<span>{coffeInfo.weightDouble}g</span></Paragraph>
            <Paragraph color="light">machine Grinding size:<span>{coffeInfo.grindMachine} / 7</span></Paragraph>
            <Paragraph color="dark">grinder Grinding size:<span>{coffeInfo.grindGrinder} / 32</span></Paragraph>
          </CoffeeCont>
        </CoffeInfo>
      </StyledCoffee>
    </IconContext.Provider>
  );
}

export default Coffee;
