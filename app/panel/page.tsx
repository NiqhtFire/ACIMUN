export default function Home(){
  return(
      <div></div>
  )
}
/*'use client'
import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import 'app/firebase.tsx';
export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
          setFile(e.target.files[0]);
      }
  };

  const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!file) {
          alert('Please select a file first!');
          return;
      }

      // Get a reference to the storage service
      const storage = getStorage();
      // Create a storage reference
      const storageRef = ref(storage, `files/${file.name}`);

      // Upload the file
      const snapshot = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(snapshot.ref);

      // Get a reference to the Firestore service
      const db = getFirestore();
      // Add a new document with a generated ID
      await addDoc(collection(db, "files"), {
          name: file.name,
          url: url
      });

      alert('File uploaded and added to Firestore!');
  };

  return (
      <main>
          <form onSubmit={addItem}>
              <input type="file" name="file" onChange={onFileChange}/>
              <input type="submit" value="Upload"/>
          </form>
      </main>
  );
}*/
