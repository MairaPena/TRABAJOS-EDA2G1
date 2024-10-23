import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/config";

// Function to update a document in Firestore
export const updateDocument = async (collection, id, newData) => {
  const docRef = doc(db, collection, id);

  try {
    await updateDoc(docRef, newData);  // Update specific fields in the document
    console.log("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};
