import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  arrayUnion,
  Timestamp,
  updateDoc,
} from "firebase/firestore/lite";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { database, storage } from "../utils/firebase";
import { resizeImage } from "../helpers/resizeImage";

export async function getHills(userId) {
  try {
    const hillsCollection = collection(doc(database, "users", userId), "hills");
    const hillsData = await getDocs(hillsCollection);
    const hillsList = hillsData.docs.map((doc) => doc.data());
    return hillsList;
  } catch (error) {
    throw new Error("Something went wrong while receiving the hills data: " + error.message);
  }
}

export async function getHill(userId, tag) {
  try {
    const hillsCollection = collection(doc(database, "users", userId), "hills");

    // Query the hills collection for a document where the 'name' field matches hillName
    const q = query(hillsCollection, where("tag", "==", tag));
    const hillsData = await getDocs(q);

    // Check if we found a document
    if (hillsData.empty) {
      throw new Error(`No hill found with the tag "${tag}"`);
    }

    // Assuming hillName is unique, return the first matching hill
    const hill = hillsData.docs[0].data();
    return hill;
  } catch (error) {
    throw new Error("Something went wrong while receiving the hill data: " + error.message);
  }
}

export async function addHill(userId, hillData) {
  console.log("Adding hill with data:", hillData, userId);
  const hillsCollection = collection(doc(database, "users", userId), "hills");

  // Use the name as the document ID
  const customId = `${hillData.name.toLowerCase().replace(/\s+/g, "-")}-${hillData.altitude}`;

  let imageUrl = null; // To track if the image is uploaded
  let imageRef = null; // To store reference to the uploaded image

  try {
    // Check if a hill with the same name already exists
    const hillDocRef = doc(hillsCollection, customId);
    const hillDocSnap = await getDoc(hillDocRef);
    if (hillDocSnap.exists()) {
      throw new Error("A hill with this name already exists. Please choose a different name.");
    }

    // Check if there's an image and upload it
    if (hillData.image) {
      // Resize and crop the image before uploading
      const resizedImageBlob = await resizeImage(hillData.image, 1920, 3 / 2, 0.8);

      // Store the image reference
      imageRef = ref(
        storage,
        `hills/${hillData.name.toLowerCase().replace(/\s+/g, "-")}-${hillData.altitude}/${hillData.name.toLowerCase().replace(/\s+/g, "-")}-${hillData.altitude}`
      );

      // Set the content type based on the file type
      const metadata = {
        contentType: "image/jpeg",
      };

      // Upload the resized image with metadata
      await uploadBytes(imageRef, resizedImageBlob, metadata);

      // Get the download URL
      imageUrl = await getDownloadURL(imageRef);
    }

    // Set the document with the name as the ID
    await setDoc(hillDocRef, {
      ...hillData,
      image: imageUrl,
      visits: [{ date: hillData.lastVisit, image: imageUrl }],
    });

    console.log("Hill added with custom ID (name):", customId);
    return {
      id: customId,
      ...hillData,
      image: imageUrl,
      visits: [{ date: hillData.lastVisit, image: imageUrl }],
    };
  } catch (error) {
    console.error("Error adding hill:", error);

    // If there was an error after the image was uploaded, delete the image
    if (imageRef) {
      try {
        await deleteObject(imageRef);
        console.log("Uploaded image deleted due to error.");
      } catch (deleteError) {
        console.error("Error deleting the uploaded image:", deleteError);
      }
    }

    throw new Error("Something went wrong while adding the hill: " + error.message);
  }
}

export async function addVisit(userId, tag, visitData) {
  console.log("Adding visit with data:", visitData);

  const hillsCollection = collection(doc(database, "users", userId), "hills");

  // Query to get the specific hill by tag
  const q = query(hillsCollection, where("tag", "==", tag));
  const querySnapshot = await getDocs(q);

  // Check if the query returned any results
  if (querySnapshot.empty) {
    throw new Error("Hill with the specified tag does not exist");
  }

  // Get the first document snapshot from the query results
  const hillDocSnapshot = querySnapshot.docs[0]; // The document snapshot

  // Extract the document data and reference separately
  const hillData = hillDocSnapshot.data(); // Document data (as an object)
  const hillDocRef = hillDocSnapshot.ref; // Document reference

  let imageUrl = null;
  let imageRef = null;

  try {
    // Check if a visit image is provided and upload it
    if (visitData.image) {
      // Resize and crop the image before uploading (assuming resizeImage is defined elsewhere)
      const resizedImageBlob = await resizeImage(visitData.image, 1920, 3 / 2, 0.8);

      // Store the image reference
      imageRef = ref(storage, `hills/${tag}/visits/${new Date().getTime()}-visit-image`);

      // Set the content type based on the file type
      const metadata = {
        contentType: "image/jpeg",
      };

      // Upload the resized image with metadata
      await uploadBytes(imageRef, resizedImageBlob, metadata);

      // Get the download URL for the uploaded visit image
      imageUrl = await getDownloadURL(imageRef);
    }

    // Create the visit object
    const newVisit = {
      date: Timestamp.fromDate(new Date(visitData.date)), // Convert to Firestore timestamp
      image: imageUrl || null, // Image URL if uploaded
      description: visitData.description || "", // Optional visit description
    };

    // Add the new visit to the visits array using arrayUnion
    await updateDoc(hillDocRef, {
      visits: arrayUnion(newVisit), // Update the visits array
    });

    console.log("Visit added successfully to hill:", tag);
    return newVisit;
  } catch (error) {
    console.error("Error adding visit:", error);

    // If there was an error after the image was uploaded, delete the image
    if (imageRef) {
      try {
        await deleteObject(imageRef);
        console.log("Uploaded visit image deleted due to error.");
      } catch (deleteError) {
        console.error("Error deleting the uploaded visit image:", deleteError);
      }
    }

    throw new Error("Something went wrong while adding the visit: " + error.message);
  }
}

export async function getHillName(coords) {
  const lat = coords[1]; // Destructure the coordinates
  const lng = coords[0];
  const accessToken =
    "pk.eyJ1IjoidmlsaWFtbm92aWNreSIsImEiOiJjbGVlazBvcWYwaHVjM3ZtajZveGoxM244In0.hnpQA34MhL9qxzfDOcUd2g";

  try {
    // Make a request to the Mapbox Reverse Geocoding API
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${accessToken}`
    );

    // Check if the response is ok
    if (!response.ok) {
      throw new Error("Failed to fetch hill name");
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if any results are returned
    if (data.features && data.features.length > 0) {
      // Extract and return the first place name
      const hillName = data.features;
      return hillName;
    } else {
      throw new Error("No hill name found for the given coordinates");
    }
  } catch (error) {
    console.error("Error in findHillName:", error.message);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

export async function getHillNameGoogle(coords) {
  const lat = coords[1]; // Destructure the coordinates
  const lng = coords[0];
  const apiKey = "AIzaSyCzCk2eakLSIY_YkqGLJBKcEXBwDD8tUBA"; // Replace with your Google Maps API key

  try {
    // Make a request to the Google Maps Reverse Geocoding API
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch hill name");
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if any results are returned
    if (data.results && data.results.length > 0) {
      // Extract and return the first place name or formatted address
      const hillName = data.results;
      return hillName;
    } else {
      throw new Error("No hill name found for the given coordinates");
    }
  } catch (error) {
    console.error("Error in findHillName:", error.message);
    throw error;
  }
}

export async function getHillNameNominatim(coords) {
  const lat = coords[1]; // Destructure the coordinates
  const lng = coords[0];

  try {
    // Nominatim reverse geocoding URL
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14&addressdetails=1`
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch hill name");
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if the response contains address information
    if (data && data.address) {
      const hillName = data.address.mountain || data.display_name || "No hill name found";
      return hillName;
    } else {
      throw new Error("No hill name found for the given coordinates");
    }
  } catch (error) {
    console.error("Error in findHillName:", error.message);
    throw error;
  }
}

export async function getHillNameGeonames(coords) {
  const lat = coords[1]; // Destructure the coordinates
  const lng = coords[0];
  const username = "viliamnovicky"; // Replace with your GeoNames username

  try {
    // GeoNames API URL for reverse geocoding
    const response = await fetch(
      `http://api.geonames.org/findNearbyJSON?lat=${lat}&lng=${lng}&username=${username}&featureClass=T`
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch hill name");
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if any geographic features are returned
    if (data.geonames && data.geonames.length > 0) {
      // Return the first result with a feature name (e.g., mountain, hill)
      const hillInfo = data.geonames[0];
      console.log(hillInfo);
      return hillInfo;
    } else {
      throw new Error("No hill name found for the given coordinates");
    }
  } catch (error) {
    console.error("Error in findHillName:", error.message);
    throw error;
  }
}
