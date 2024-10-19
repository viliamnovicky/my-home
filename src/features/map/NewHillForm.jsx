import { useForm } from "react-hook-form";
import { useAddHill } from "./useAddHill";
import { FormGroup, Input, Form, Text, Heading, SelectedImage, ErrorMessage, Label } from "../../ui/Form";
import Button, { Buttons } from "../../ui/Button";
import { useGetHillNameGeonames } from "./useHillsData";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";

function NewHillForm({ addNewHill, isAddingHill, errorAddingHill, setOpenNewHillForm, clickCoordinates, color, setMenuVisibility }) {
  
  const { register, handleSubmit, reset, formState, setValue, error } = useForm();
  const { errors } = formState;

  const { isLoadingHillInfo, hillInfo, errorHillInfo } = useGetHillNameGeonames(clickCoordinates);  
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("");


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
    }
  }, [hillInfo]);

  useEffect(() => {
    setValue("name", name);
  }, [name]);

  async function onSubmit(data) {
    const image = data.image?.[0];

    const descriptionList = data.description
      ? data.description
          .split("...")
          .map((item) => item.trim())
          .filter(Boolean) // filter(Boolean) removes empty strings
      : [];

    try {
      await addNewHill({
        name: data.name,
        altitude: Number(data.altitude),
        coords: { lng: clickCoordinates[0], lat: clickCoordinates[1] },
        description: descriptionList ? descriptionList : [],
        image: image,
        countryName: hillInfo.countryName,
        countryCode: hillInfo.countryCode,
        tag: `${data.name.toLowerCase()}-${data.altitude}`,
        lastVisit: data.lastVisit ? new Date(data.lastVisit) : null,
        color:
          data.altitude <= 500
            ? "purple"
            : data.altitude > 500 && data.altitude <= 1000
            ? "blue"
            : data.altitude > 1000 && data.altitude <= 1500
            ? "green"
            : data.altitude > 1500 && data.altitude <= 2000
            ? "yellow"
            : data.altitude > 2000 && data.altitude <= 2500
            ? "orange"
            : data.altitude > 2500 && data.altitude <= 3000
            ? "red"
            : data.altitude > 3000 && data.altitude <= 3500
            ? "black"
            : "white",
      }); 
      reset(); 
      handleCloseForm();
    } catch (error) {
      console.error("Error adding hill:", error);
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isAddingHill) return <Spinner/>

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
          border = {errors?.name && "red"}
        />
        <Label color={errors?.name ? "red" : ""}>{errors?.name ? "Name   *Required" : "Name"}</Label>

      </FormGroup>
      {/* <FormGroup>
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
      </FormGroup> */}
      <FormGroup>
        <Input
          id="altitude"
          placeholder="Altitude"
          type="number"
          border = {errors?.altitude && "red"}
          {...register("altitude", {
            required: "Altitude field is required",
          })}
        />
        <Label for="altitude" color={errors?.altitude ? "red" : ""}>{errors?.altitude ? "Altitude   *Required" : "Altitude"}</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="lastVisit"
          placeholder="Last visit"
          border = {errors?.altitude && "red"}
          type="date"
          {...register("lastVisit", {
            required: "This field is required",
          })}
          />
          <Label for="altitude" color={errors?.lastVisit ? "red" : ""}>{errors?.lastVisit ? "Last visit   *Required" : "Last visit"}</Label>
      </FormGroup>
      <FormGroup>
        <Text
          id="description"
          rows="6"
          border = {errors?.altitude && "red"}
          placeholder="Description"
          {...register("description", { 
            required: "Description field is required" 
          })}
          />
          <Label for="altitude" color={errors?.description ? "red" : ""}>{errors?.description ? "Description   *Required" : "Description"}</Label>
      </FormGroup>
      <FormGroup>
        <Input
          id="image"
          type="file"
          onChange={(e) => handleImageChange(e)}
          {...register("image", {
            required: "Image is required",
            onChange: (event) => {
              handleImageChange(event);
            },
          })}
        />
        {selectedImage && <SelectedImage src={selectedImage} alt="Selected" />}
        <Label color={errors?.image ? "red" : ""}>{errors?.image ? "Image *Required" : "Image"}</Label>
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
