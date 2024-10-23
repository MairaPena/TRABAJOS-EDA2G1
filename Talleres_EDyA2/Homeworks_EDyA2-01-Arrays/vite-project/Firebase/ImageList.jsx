import React, { useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { deleteImage } from './deleteImage';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const storage = getStorage();

  // Fetch list of images from Firebase Storage
  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'images/'); // Folder in Firebase Storage
      try {
        const result = await listAll(listRef);
        const urls = await Promise.all(result.items.map((item) => getDownloadURL(item)));
        setImages(urls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [storage]);

  // Handle delete image
  const handleDelete = async (imageUrl) => {
    const imagePath = imageUrl.split('?')[0].split('/o/')[1].replace('%2F', '/'); // Extract image path from URL
    await deleteImage(`images/${imagePath}`);
    setImages(images.filter((url) => url !== imageUrl)); // Update state after deletion
  };

  return (
    <div>
      <h1>Image List</h1>
      <ul>
        {images.map((imageUrl, index) => (
          <li key={index}>
            <img src={imageUrl} alt="Firebase" style={{ width: '100px', marginRight: '10px' }} />
            <button onClick={() => handleDelete(imageUrl)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
