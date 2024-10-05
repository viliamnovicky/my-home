import { collection, getDocs, doc, getDoc, setDoc, query, where } from "firebase/firestore/lite";
import { database, storage } from "../utils/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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
  try {
    const hillsCollection = collection(doc(database, "users", userId), "hills");

    // Use the name as the document ID
    const customId = `${hillData.name}_${hillData.altitude}`;

    // Check if a hill with the same name already exists
    const hillDocRef = doc(hillsCollection, customId);
    const hillDocSnap = await getDoc(hillDocRef);
    if (hillDocSnap.exists()) {
      throw new Error("A hill with this name already exists. Please choose a different name.");
    }

    // Check if there's an image and upload it
    let imageUrl = null;
    if (hillData.image) {
      const imageRef = ref(storage, `images/${hillData.image.name}`);
      
      // Set the content type based on the file type
      const metadata = {
        contentType: hillData.image.type || 'image/jpeg',
      };
      
      // Upload the image with metadata
      await uploadBytes(imageRef, hillData.image, metadata);
      
      // Get the download URL
      imageUrl = await getDownloadURL(imageRef);
    }

    // Set the document with the name as the ID
    await setDoc(hillDocRef, { ...hillData, image: imageUrl });

    console.log("Hill added with custom ID (name):", customId);
    return { id: customId, ...hillData, image: imageUrl };
  } catch (error) {
    console.error("Error adding hill:", error);
    throw new Error("Something went wrong while adding the hill: " + error.message);
  }
}

export async function getHillName(coords) {
  const lat  = coords[1]; // Destructure the coordinates
  const lng = coords[0]
  const accessToken = "pk.eyJ1IjoidmlsaWFtbm92aWNreSIsImEiOiJjbGVlazBvcWYwaHVjM3ZtajZveGoxM244In0.hnpQA34MhL9qxzfDOcUd2g";

  try {
    // Make a request to the Mapbox Reverse Geocoding API
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${accessToken}`);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error('Failed to fetch hill name');
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if any results are returned
    if (data.features && data.features.length > 0) {
      // Extract and return the first place name
      const hillName = data.features;
      return hillName;
    } else {
      throw new Error('No hill name found for the given coordinates');
    }
  } catch (error) {
    console.error('Error in findHillName:', error.message);
    throw error; // Rethrow the error to handle it in the calling function
  }
}

export async function getHillNameGoogle(coords) {
  const lat  = coords[1]; // Destructure the coordinates
  const lng = coords[0]
  const apiKey = 'AIzaSyCzCk2eakLSIY_YkqGLJBKcEXBwDD8tUBA'; // Replace with your Google Maps API key

  try {
    // Make a request to the Google Maps Reverse Geocoding API
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Failed to fetch hill name');
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if any results are returned
    if (data.results && data.results.length > 0) {
      // Extract and return the first place name or formatted address
      const hillName = data.results;
      return hillName;
    } else {
      throw new Error('No hill name found for the given coordinates');
    }
  } catch (error) {
    console.error('Error in findHillName:', error.message);
    throw error;
  }
}

export async function getHillNameNominatim(coords) {
  const lat  = coords[1]; // Destructure the coordinates
  const lng = coords[0]

  try {
    // Nominatim reverse geocoding URL
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=14&addressdetails=1`);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Failed to fetch hill name');
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if the response contains address information
    if (data && data.address) {
      const hillName = data.address.mountain || data.display_name || 'No hill name found';
      return hillName;
    } else {
      throw new Error('No hill name found for the given coordinates');
    }
  } catch (error) {
    console.error('Error in findHillName:', error.message);
    throw error;
  }
}

export async function getHillNameGeonames(coords) {
  const lat  = coords[1]; // Destructure the coordinates
  const lng = coords[0]
  const username = 'viliamnovicky'; // Replace with your GeoNames username

  try {
    // GeoNames API URL for reverse geocoding
    const response = await fetch(`http://api.geonames.org/findNearbyJSON?lat=${lat}&lng=${lng}&username=${username}&featureClass=T`);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Failed to fetch hill name');
    }

    // Parse the JSON response
    const data = await response.json();

    // Check if any geographic features are returned
    if (data.geonames && data.geonames.length > 0) {
      // Return the first result with a feature name (e.g., mountain, hill)
      const hillInfo = data.geonames[0]
      console.log(hillInfo)
      return hillInfo;
    } else {
      throw new Error('No hill name found for the given coordinates');
    }
  } catch (error) {
    console.error('Error in findHillName:', error.message);
    throw error;
  }
}