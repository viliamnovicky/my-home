import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { database, storage } from "../utils/firebase";
//import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function getHills() {
  try {
    const hills = collection(database, "hills");
    const hillsData = await getDocs(hills);
    const hillsList = hillsData.docs.map((doc) => doc.data());
    return hillsList;
  } catch (error) {
    throw new Error("Something went wrong while receiving the hills data");
  }
}

export async function createEditHill(hill) {
  try {
    const hillsCollection = collection(database, "hills");
    await addDoc(hillsCollection, hill);
    console.log("Hill added successfully");
  } catch (error) {
    console.error("Error adding hill: ", error);
    throw new Error("Something went wrong while adding the hill");
  }
}