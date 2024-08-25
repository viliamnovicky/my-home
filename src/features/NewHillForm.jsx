import { useForm } from "react-hook-form";
import { useCreateHill } from "./useCreateHill";
import { FormGroup, Input, Label, Form } from "../ui/Form";
import Button from "../ui/Button";

function NewHillForm() {
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

  return <Form onSubmit={handleSubmit(onSubmit, onError)}>
    <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input id="name" 
            {...register("name", {
            required: "Name field is required"
            })}/>
    </FormGroup>
    <Button>Submit</Button>
  </Form>;
}

export default NewHillForm;
