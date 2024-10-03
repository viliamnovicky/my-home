import { addDoc, collection, getDocs, doc } from "firebase/firestore/lite";
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

export async function addHill(userId, hillData) {
  
  try {
    const hillsCollection = collection(doc(database, "users", userId), "hills");
    
    // Check if there's an image and upload it
    let imageUrl = null;
    if (hillData.image) {
  
      const imageRef = ref(storage, `hills/${hillData.name}_${hillData.altitude}`);

      const metadata = {
        contentType: hillData.image.type || 'image/jpeg', // Default to 'image/jpeg' if type is not set
      };
      
      // Upload the image
      await uploadBytes(imageRef, hillData.image, metadata);
      
      // Get the download URL
      imageUrl = await getDownloadURL(imageRef);
    }

    // Create hill document with image URL
    const newHillDoc = await addDoc(hillsCollection, { ...hillData, image: imageUrl });
    
    return { id: newHillDoc.id, ...hillData, image: imageUrl};
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