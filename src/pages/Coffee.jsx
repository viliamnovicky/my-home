import styled from "styled-components";
import Sidebar from "../ui/Sidebar";

import Wildkaffee from "../../public/img/wildkaffee.png";

import brazil from "../../public/icons/maps/brazil.svg";

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
  height: calc(100vh - 13rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoffeInfo = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

const CountryShape = styled.img`
  width: 20rem;
  height: 100%;
`;

const CoffeeImage = styled.img`
  height: 100%;
`;

function Coffee() {
  return (
    <>
      <Sidebar></Sidebar>
      <StyledCoffee>
        <CoffeInfo>
            <h1>{coffeInfo.roasteryName}</h1>
            <h1>{coffeInfo.coffeeName}</h1>
            <h1>{coffeInfo.coffeeType}</h1>
            <p>{coffeInfo.description}</p>
            {coffeInfo.origin.length > 0 && coffeInfo.origin.map(country => 
          <CountryShape key={`shape-${country}`} src={`/icons/maps/${country.toLowerCase()}.svg`}></CountryShape>)}
        </CoffeInfo>
        <CoffeeImage src={coffeInfo.image} />
      </StyledCoffee>
    </>
  );
}

export default Coffee;
