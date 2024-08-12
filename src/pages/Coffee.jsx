import styled from "styled-components";
import Wildkaffee from "../../public/img/wildkaffee.png";

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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoffeInfo = styled.div`
 
  gap: 1rem;
`;

const CountryShape = styled.img`
  width: 20rem;
`;

const CoffeeImage = styled.img`
  height: 20%;
`;

function Coffee() {
  return (
      <StyledCoffee>
        {/* <CoffeInfo>
            <h1>{coffeInfo.roasteryName}</h1>
            <h1>{coffeInfo.coffeeName}</h1>
            <h1>{coffeInfo.coffeeType}</h1>
            <p>{coffeInfo.description}</p>
            {coffeInfo.origin.length > 0 && coffeInfo.origin.map(country => 
          <CountryShape key={`shape-${country}`} src={`/icons/maps/${country.toLowerCase()}.svg`}></CountryShape>)}
        </CoffeInfo>
        <CoffeeImage src={coffeInfo.image} /> */}
      </StyledCoffee>
  );
}

export default Coffee;
