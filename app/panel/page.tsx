'use client'
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB2w_h2Q_46PXQVMIbl1gi6MxxtYus6_x4",

    authDomain: "acimun-a7d67.firebaseapp.com",
  
    projectId: "acimun-a7d67",
  
    storageBucket: "acimun-a7d67.appspot.com",
  
    messagingSenderId: "1015928433938",
  
    appId: "1:1015928433938:web:37d66e448bc2e78c7357cb",
  
    measurementId: "G-WNM8NMX8ZV"
  
};

initializeApp(firebaseConfig);

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [selectedForm, setSelectedForm] = useState('');

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const onFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedForm(e.target.value);
    };

    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file || !selectedForm) {
            alert('Please select a file and a form first!');
            return;
        }

       
        const storage = getStorage();
     
        const storageRef = ref(storage, `${selectedForm}/${file.name}`);

       
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);

        
        const db = getFirestore();
       
        await addDoc(collection(db, "files"), {
            name: file.name,
            url: url,
            form: selectedForm
        });

        alert('File uploaded and added to Firestore!');
    };

    return (
        <main>
            <form onSubmit={addItem}>
                <input type="file" name="file" onChange={onFileChange} />
                <select name="forms" id="form" onChange={onFormChange}>
                    <option value="">Select a form</option>
                    <option value="GA1">GA1</option>
                    <option value="GA2">GA2</option>
                    <option value="GA3">GA3</option>
                    <option value="GA4">GA4</option>
                    <option value="GA5">GA5</option>
                    <option value="SDC">SDC</option>
                    <option value="SC">SC</option>
                    <option value="ECOSOC">ECOSOC</option>
                    <option value="ICJ">ICJ</option>
                </select>
                <input type="submit" value="Upload" />
            </form>
        </main>
    );
}
