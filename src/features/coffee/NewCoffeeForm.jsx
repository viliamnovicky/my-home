import Button, { Buttons } from "../../ui/Button";
import {
  Checkbox,
  CheckboxGroup,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
  Select,
} from "../../ui/Form";

function NewCoffeeForm({onConfirm, onCancel}) {
  return (
    <Form>
      <Heading>Add new coffee</Heading>
      <FormGroup>
        <Input placeholder="roastery" id="roastery"></Input>
        <Label for="roastery">Roastery</Label>
      </FormGroup>
      <FormGroup>
        <Input placeholder="Coffee name" id="coffee-name"></Input>
        <Label for="coffee-name">Coffee name</Label>
      </FormGroup>
      <FormGroup>
        <Input placeholder="Origin - More countries separate with /" id="origin"></Input>
        <Label for="origin">Origin</Label>
      </FormGroup>
      <FormGroup>
        <CheckboxGroup>
          <div>
            <Checkbox type="checkbox" id="espresso" value="Espresso" />
            <Label for="espresso">Espresso</Label>
          </div>
          <div>
            <Checkbox type="checkbox" id="filter" value="filter" />
            <Label for="filter">Filter</Label>
          </div>
          <div>
            <Checkbox type="checkbox" id="drip" value="drip" />
            <Label for="drip">Drip</Label>
          </div>
          <div>
            <Checkbox type="checkbox" id="frenchpress" value="frenchpress" />
            <Label for="frenchpress">Frenchpress</Label>
          </div>
          <div>
            <Checkbox type="checkbox" id="moka pot" value="moka pot" />
            <Label for="moka pot">Moka pot</Label>
          </div>
          <div>
            <Checkbox type="checkbox" id="turkish" value="turkish" />
            <Label for="turkish">Turkish</Label>
          </div>
        </CheckboxGroup>
          <Label>Brewing method</Label>
      </FormGroup>
      <FormGroup>
        <Input placeholder="Beans type" id="beans-type"></Input>
        <Label for="beans-type">Beans type</Label>
      </FormGroup>
      <FormGroup>
        <Input placeholder='Tastes - Separate with "/"' id="taste"></Input>
        <Label for="taste">Tastes</Label>
      </FormGroup>
      <FormGroup>
        <Input type="number" placeholder='Elevation' id="elevation"></Input>
        <Label for="elevation">Elevation</Label>
      </FormGroup>
      <FormGroup>
        <Input type="number" min={0} max={5} placeholder='Roast grade (1 to 5)' id="roast"></Input>
        <Label for="roast">Roast</Label>
      </FormGroup>
      <FormGroup>
        <Input type="number" min={0} max={5} placeholder='Intensity grade (1 to 5)' id="intensity"></Input>
        <Label for="intensity">Intensity</Label>
      </FormGroup>
      <FormGroup>
        <Input type="number" min={0} max={5} placeholder='Acidity grade (1 to 5)' id="acidity"></Input>
        <Label for="acidity">Acidity</Label>
      </FormGroup>
      <FormGroup>
        <Input type="number" min={0} max={10} placeholder='Rating (1 - worst to 10 - best)' id="rating"></Input>
        <Label for="rating">Rating</Label>
      </FormGroup>
      <Buttons>
        <Button size="medium" color="confirm" onClick={onConfirm}>confirm</Button>
        <Button size="medium" color="decline" onClick={onCancel}>cancel</Button>
      </Buttons>
    </Form>
  );
}

export default NewCoffeeForm;
