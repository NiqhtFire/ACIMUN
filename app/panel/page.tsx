'use client'
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { FaTrashAlt } from "react-icons/fa";

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
const db = getFirestore();

export default function Home() {
    const [selectedForm, setSelectedForm] = useState('');
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState<{ id: string; name: string; url: string; form: string }[]>([]);
    const correctPassword = 'acimun25';

    useEffect(() => {
        fetchFiles();
    }, []);

    const fetchFiles = async () => {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "documents"));
        const fileList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as { id: string; name: string; url: string; form: string }[];
        setFiles(fileList);
        setLoading(false);
    };

    const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Yanlış şifre!');
        }
    };

    const onFormChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedForm(e.target.value);
    };

    const addItem = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedForm || !name || !url) {
            alert('Lütfen tüm alanları doldurun!');
            return;
        }
        setLoading(true);
        await addDoc(collection(db, "documents"), {
            form: selectedForm,
            name: name,
            url: url
        });
        setLoading(false);
        alert('Başarıyla eklendi!');
        setSelectedForm('');
        setName('');
        setUrl('');
        fetchFiles();
    };

    const deleteFile = async (id: string) => {
        const confirmDelete = confirm("Bu belgeyi silmek istediğinize emin misiniz?");
        if (confirmDelete) {
            await deleteDoc(doc(db, "documents", id));
            fetchFiles(); 
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
            {!isAuthenticated ? (
                <div className="bg-white/10 backdrop-blur-lg shadow-2xl shadow-green-400/50 rounded-lg p-8 max-w-md w-full text-center">
                    <h2 className="text-2xl font-semibold mb-4 text-white">Şifreyi Giriniz</h2>
                    <form onSubmit={handlePasswordSubmit} className="space-y-4">
                        <input
                            type="password"
                            placeholder="Şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                        />
                        <button 
                            type="submit" 
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md"
                        >
                            Giriş Yap
                        </button>
                    </form>
                </div>
            ) : (
                <>
                   
                    <div className="bg-white/10 backdrop-blur-lg shadow-2xl shadow-green-400/50 rounded-lg p-8 max-w-md w-full text-center mb-8">
                        <h2 className="text-xl font-semibold mb-4 text-white">Belge Ekle</h2>
                        <form onSubmit={addItem} className="space-y-4">
                            <select 
                                name="forms" 
                                id="form" 
                                onChange={onFormChange} 
                                value={selectedForm}
                                className="w-full border border-gray-300 p-2 rounded-md bg-white"
                            >
                                <option value="">Komite Seçin</option>
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
                            
                            <input 
                                type="text" 
                                placeholder="Belge Adı" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md"
                            />

                            <input 
                                type="text" 
                                placeholder="Google Docs URL'si" 
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                className="w-full border border-gray-300 p-2 rounded-md"
                            />

                            <button 
                                type="submit" 
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md flex items-center justify-center"
                            >
                                {loading ? (
                                    <svg className="animate-spin h-5 w-5 mr-2 border-4 border-white rounded-full border-t-transparent" viewBox="0 0 24 24"></svg>
                                ) : (
                                    "Ekle"
                                )}
                            </button>
                        </form>
                    </div>

                    <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg shadow-2xl shadow-green-400/50 rounded-lg p-6 text-white">
                        <h2 className="text-2xl font-semibold text-center mb-4">Yüklenen Belgeler</h2>
                        {loading ? (
                            <p className="text-center">Yükleniyor...</p>
                        ) : files.length === 0 ? (
                            <p className="text-center">Henüz belge eklenmedi.</p>
                        ) : (
                            <ul className="space-y-4">
                                {files.map((file) => (
                                    <li key={file.id} className="flex justify-between items-center bg-black/30 p-4 rounded-md">
                                        <div>
                                            <p className="text-lg font-semibold">{file.name}</p>
                                            <p className="text-sm text-gray-300">{file.form}</p>
                                            <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Görüntüle</a>
                                        </div>
                                        <button onClick={() => deleteFile(file.id)} className="text-red-400 hover:text-red-600">
                                            <FaTrashAlt size={18} />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </>
            )}
        </main>
    );
}
