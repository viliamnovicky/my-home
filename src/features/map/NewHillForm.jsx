import { useForm } from "react-hook-form";
import { useAddHill } from "./useAddHill";
import { FormGroup, Input, Form, Text, Heading, SelectedImage, ErrorMessage } from "../../ui/Form";
import Button, { Buttons } from "../../ui/Button";
import { useGetHillNameGeonames } from "./useHillsData";
import { useEffect, useState } from "react";
import { convertDateToTimestamp } from "../../helpers/convertDateToTimestamp";

function NewHillForm({ setOpenNewHillForm, clickCoordinates, color, setMenuVisibility, refetch }) {
  const { register, handleSubmit, reset, formState, setValue, error } = useForm();

  const [selectedImage, setSelectedImage] = useState(null);

  const { errors } = formState;
  const { isLoadingHillInfo, hillInfo, errorHillInfo } = useGetHillNameGeonames(clickCoordinates);
  const { addNewHill, isAddingHill, errorAddingHill } = useAddHill("viliamnovicky");

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

  async function onSubmit(data) {
    const image = data.image?.[0];
    const lastVisitDate = data.lastVisit ? convertDateToTimestamp(data.lastVisit) : null;

    console.log(data.lastVisit);
    console.log(lastVisitDate);
    console.log(new Date(data.lastVisit));

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
        description: descriptionList,
        image: image,
        countryName: hillInfo.countryName,
        countryCode: hillInfo.countryCode,
        tag: `${data.name.toLowerCase()}-${data.altitude}`,
        lastVisit: new Date(data.lastVisit),
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
      }); // Use the hook to add a new hill
      reset(); // Reset the form after successful submission
      handleCloseForm(); // Close the form
      () => refetch();
    } catch (error) {
      console.error("Error adding hill:", error);
    }
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
          placeholder={errors?.name ? "" : "Name"}
          value={name}
        />
        {errors?.name?.message && <ErrorMessage>{errors.name.message}</ErrorMessage>}
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
          placeholder={errors?.altitude ? "" : "Altitude"}
          type="number"
          {...register("altitude", {
            required: "Altitude field is required",
          })}
        />
        {errors?.altitude?.message && <ErrorMessage>{errors.altitude.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Input
          id="lastVisit"
          placeholder="Last visit"
          type="date"
          {...register("lastVisit", {
            // required: "This field is required",
          })}
          />
      </FormGroup>
      <FormGroup>
        <Text
          id="description"
          rows="6"
          placeholder={errors?.description ? "" : "Description"}
          {...register("description", { 
            // required: "Description field is required" 
          })}
          />
          {errors?.description?.message && <ErrorMessage>{errors.description.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Input
          id="image"
          type="file"
          onChange={(e) => handleImageChange(e)}
          {...register("image", {
            // required: "Image is required",
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
