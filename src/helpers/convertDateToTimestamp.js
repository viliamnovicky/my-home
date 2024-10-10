import { Timestamp } from "firebase/firestore"; // Import Firebase Timestamp

export function convertDateToTimestamp(dateString) {
  // Convert the date input (string) into a JavaScript Date object
  const date = new Date(dateString);

  // Convert the JavaScript Date object to a Firebase Timestamp
  const firebaseTimestamp = Timestamp.fromDate(date);

  return firebaseTimestamp;
}

export function formatTimestampToDate(timestamp) {
  // Convert the Firebase Timestamp to a Date object
  const date = timestamp.toDate();
  
  // Extract day, month, and year
  const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month (months are zero-indexed)
  const year = date.getFullYear();

  // Format as dd.mm.yyyy
  return `${day}.${month}.${year}`;
}