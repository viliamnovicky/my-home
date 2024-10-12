import { useForm } from "react-hook-form";
import { FormGroup, Input, SelectedImage, Form } from "../../ui/Form";
import { useState } from "react";
import { useAddVisit } from "./useAddVisit";
import Button, { Buttons } from "../../ui/Button";

function AddVisitForm() {
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get("hill");

  const { addNewVisit, isAddingVisit, errorAddingVisit } = useAddVisit("viliamnovicky", tag)
  const { register, handleSubmit, reset, formState, setValue, error } = useForm();
  const { errors } = formState;


  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    } else {
      setSelectedImage(null);
    }
  };

  async function onSubmit(data) {
    const image = data.image?.[0]

    try {
      await addNewVisit({
        ...data,
        image: image
      })
    } catch(error) {
      console.log(error)
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={(handleSubmit(onSubmit, onError))} bg="bg_grey">
      <FormGroup>
        <Input
          id="date"
          placeholder="date of visit"
          type="date"
          border={errors?.date?.message ? "red" : ""}
          {...register("date", {
            required: "This field is required",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="image"
          type="file"
          border={errors?.date?.message ? "red" : ""}
          onChange={(e) => handleImageChange(e)}
          {...register("image", {
            required: "Image is required",
            onChange: (event) => {
              handleImageChange(event);
            },
          })}
        />
        {selectedImage && <SelectedImage src={selectedImage} alt="Selected" />}
      </FormGroup>
      <Buttons>
        <Button size="small" color="map">submit</Button>
        <Button size="small" color="decline">cancel</Button>
      </Buttons>
    </Form>
  );
}

export default AddVisitForm;
