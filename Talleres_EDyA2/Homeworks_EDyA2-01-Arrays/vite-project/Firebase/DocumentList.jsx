import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/config';
import { updateDocument } from './updateDocument';
import { deleteDocument } from './deleteDocument';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [newData, setNewData] = useState("");

  // Fetch documents from Firestore
  useEffect(() => {
    const fetchDocuments = async () => {
      const querySnapshot = await getDocs(collection(db, "your-collection-name"));
      const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDocuments(docs);
    };

    fetchDocuments();
  }, []);

  // Handle document update
  const handleUpdate = async (id) => {
    await updateDocument("your-collection-name", id, { fieldToUpdate: newData });
    setDocuments((prevDocs) =>
      prevDocs.map((doc) => (doc.id === id ? { ...doc, fieldToUpdate: newData } : doc))
    );
  };

  // Handle document delete
  const handleDelete = async (id) => {
    await deleteDocument("your-collection-name", id);
    setDocuments(documents.filter((doc) => doc.id !== id));  // Remove deleted document from the state
  };

  return (
    <div>
      <h1>Document List</h1>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            <p>{doc.fieldToUpdate}</p>
            <input
              type="text"
              placeholder="New Value"
              value={newData}
              onChange={(e) => setNewData(e.target.value)}
            />
            <button onClick={() => handleUpdate(doc.id)}>Update</button>
            <button onClick={() => handleDelete(doc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
