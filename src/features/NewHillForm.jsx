import { useForm } from "react-hook-form";
import { useCreateHill } from "./useCreateHill";
import { FormGroup, Input, Label, Form, Text } from "../ui/Form";
import Button from "../ui/Button";

function NewHillForm({setOpenNewHillForm}) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { isCreatinHill, createHill } = useCreateHill();

  function onSubmit(data) {
    const image = data.image[0];

    createHill(
      { ...data, image: image },
      {
        onSuccess: (data) => {
          reset();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return <Form onSubmit={handleSubmit(onSubmit, onError)} setOpenNewHillForm={setOpenNewHillForm}>
    <h1>Add new hill</h1>
    <FormGroup>
        <Input id="name" placeholder="Name"
            {...register("name", {
            required: "Name field is required"
            })}/>
    </FormGroup>
    <FormGroup>
        <Input id="altitude" placeholder="Altitude"
            {...register("altitude", {
            required: "Altitude field is required"
            })}/>
    </FormGroup>
    <FormGroup>
        <Text id="description" rows="6" placeholder="Description"
            {...register("description", {
            required: "description field is required"
            })}/>
    </FormGroup>
    <Button>Submit</Button>
    <Button onClick={() => setOpenNewHillForm(false)}>Cancel</Button>
  </Form>;
}

export default NewHillForm;
