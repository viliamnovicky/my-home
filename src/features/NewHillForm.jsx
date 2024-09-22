import { useForm } from "react-hook-form";
import { useCreateHill } from "./useCreateHill";
import { FormGroup, Input, Form, Text, Heading, SelectedImage } from "../ui/Form";
import Button, { Buttons } from "../ui/Button";
import {
  useGetHillName,
  useGetHillNameGeonames,
  useGetHillNameGoogle,
  useGetHillNameNominatim,
} from "./useHillsData";
import { useEffect, useState } from "react";

function NewHillForm({ setOpenNewHillForm, clickCoordinates, color, setMenuVisibility }) {
  const { register, handleSubmit, reset, getValues, formState, setValue, watch } = useForm();
  
  const [selectedImage, setSelectedImage] = useState(null);
  const imageFile = watch("image");
  
  const { errors } = formState;
  const { isLoadingHillInfo, hillInfo, errorHillInfo } = useGetHillNameGeonames(clickCoordinates);
  const { isCreatinHill, createHill } = useCreateHill();
  const [name, setName] = useState("blabla");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  // Use effect to update the hill name state when hillName is fetched


 // Handle image preview when file input changes
 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    setSelectedImage(imageURL);
  } else {
    setSelectedImage(null);
  }
};

  function handleCloseForm() {
    setOpenNewHillForm(false);
    setMenuVisibility(false);
  }

  useEffect(() => {
    if (hillInfo) {
      setName(hillInfo.name);
      setLat(hillInfo.lat);
      setLng(hillInfo.lng);
    }
  }, [hillInfo]);

  useEffect(() => {
    setValue("name", name);
  }, [name]);

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

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      setOpenNewHillForm={setOpenNewHillForm}
      color={color}
    >
      <Heading>Add new hill</Heading>
      <FormGroup>
        <Input
          {...register("name", {
            required: "Name field is required",
          })}
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="latitude"
          className="input-disabled"
          value={clickCoordinates[1]}
          placeholder={`Lat: ${clickCoordinates[1]}`}
          {...register("latitude", {
            required: "latitude field is required",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="longitude"
          className="input-disabled"
          value={clickCoordinates[0]}
          placeholder={`Lng: ${clickCoordinates[0]}`}
          {...register("longitude", {
            required: "longitude field is required",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="altitude"
          placeholder="Altitude"
          {...register("altitude", {
            required: "Altitude field is required",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Text
          id="description"
          rows="6"
          placeholder="Description"
          {...register("description", {
            required: "description field is required",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Input
          id="image"
          type="file"
          onChange={(e) => handleImageChange(e)}
          {...register("image", {
            required: "Altitude field is required",
            onChange: (event) => {
              handleImageChange(event);
            },
          })}
        />
        {selectedImage && <SelectedImage src={selectedImage} alt="Selected" />}
      </FormGroup>
      <Buttons>
        <Button size="medium" color={color}>
          Submit
        </Button>
        <Button size="medium" color="decline" onClick={handleCloseForm}>
          Cancel
        </Button>
      </Buttons>
    </Form>
  );
}

export default NewHillForm;
