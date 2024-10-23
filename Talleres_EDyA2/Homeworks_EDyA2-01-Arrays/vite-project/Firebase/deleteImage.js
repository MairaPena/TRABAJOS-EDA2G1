import { getStorage, ref, deleteObject } from "firebase/storage";

// Function to delete image
export const deleteImage = async (imagePath) => {
  const storage = getStorage();
  const imageRef = ref(storage, imagePath); // Reference to the file in Firebase storage

  try {
    await deleteObject(imageRef);
    console.log('Image deleted successfully!');
  } catch (error) {
    console.error('Error deleting image:', error);
  }
};
