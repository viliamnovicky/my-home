import { Timestamp } from "firebase/firestore"; // Import Firebase Timestamp

export function convertDateToTimestamp(dateString) {
  // Convert the date input (string) into a JavaScript Date object
  const date = new Date(dateString);

  // Convert the JavaScript Date object to a Firebase Timestamp
  const firebaseTimestamp = Timestamp.fromDate(date);

  return firebaseTimestamp;
}