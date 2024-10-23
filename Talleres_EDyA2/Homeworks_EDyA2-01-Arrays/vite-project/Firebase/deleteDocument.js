import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/config";

// Function to delete a document from Firestore
export const deleteDocument = async (collection, id) => {
  const docRef = doc(db, collection, id);

  try {
    await deleteDoc(docRef);  // Delete the document
    console.log("Document deleted successfully!");
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};
