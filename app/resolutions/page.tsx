'use client'
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { FaFileAlt } from "react-icons/fa";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2w_h2Q_46PXQVMIbl1gi6MxxtYus6_x4",
    authDomain: "acimun-a7d67.firebaseapp.com",
    projectId: "acimun-a7d67",
    storageBucket: "acimun-a7d67.appspot.com",
    messagingSenderId: "1015928433938",
    appId: "1:1015928433938:web:37d66e448bc2e78c7357cb",
    measurementId: "G-WNM8NMX8ZV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Define the order of forms
const formOrder = [
    "GA1", "GA2", "GA3", "GA4", "GA5", 
    "SDC", "SC", "ECOSOC", "ICJ"
];

export default function Home() {
    const [files, setFiles] = useState<{ name: string; url: string; form: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [categorizedFiles, setCategorizedFiles] = useState<Record<string, { name: string; url: string }[]>>({});

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "documents"));
                const fileList = querySnapshot.docs.map(doc => doc.data()) as { name: string; url: string; form: string }[];

                // Group files by form
                const groupedFiles: Record<string, { name: string; url: string }[]> = {};
                fileList.forEach(file => {
                    if (!groupedFiles[file.form]) {
                        groupedFiles[file.form] = [];
                    }
                    groupedFiles[file.form].push({ name: file.name, url: file.url });
                });

                setCategorizedFiles(groupedFiles);
                setFiles(fileList);
            } catch (error) {
                console.error("Error fetching files:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFiles();
    }, []);

    return (
        <>
            <title>ACIMUN</title>
            <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="/css/style.css" />
            <link rel="stylesheet" type="text/css" href="/css/responsive.css" />
            
            <div className="bg-white min-h-screen">
                <Navbar />

                {/* Header */}
                <section className="bg-[#6c9286] slider_section ">
        <div className="container">
          <div className="">
            <div className="">
              <div className="detail_box">
                <div className='flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]    '>
             
                <div className='flex flex-col text-center justify-center'>
                  <span className='text-[100px] my-[60px] fade-in-text '>
                  Resolutions 

                  
                </span>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>

                {/* Files Section */}
                <section className="container mx-auto py-10">
                    <h2 className="text-3xl font-semibold text-center mb-6">Resolutions</h2>

                    {loading ? (
                        <p className="text-center text-gray-600">Loading files...</p>
                    ) : Object.keys(categorizedFiles).length === 0 ? (
                        <p className="text-center text-gray-600">No files uploaded yet.</p>
                    ) : (
                        // Display files in a fixed order based on formOrder
                        formOrder.map((form, index) => (
                            categorizedFiles[form] ? (
                                <div key={index} className="mb-10">
                                    <h3 className="text-2xl font-semibold text-white bg-[#6c9286] px-4 py-2 rounded-md">
                                        {form}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                                        {categorizedFiles[form].map((file, fileIndex) => (
                                            <div key={fileIndex} className="bg-white p-4 rounded-lg shadow-md text-center">
                                                <FaFileAlt className="text-4xl text-blue-500 mx-auto mb-2" />
                                                <p className="text-lg font-semibold truncate">{file.name}</p>
                                                <a 
                                                    href={file.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="mt-2 block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                                                >
                                                    View Document
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : null
                        ))
                    )}
                </section>

                {/* Contact Section */}
                <section className="info_section layout_padding">
                    <div className="container">
                        <div className="info_contact">
                            <div className="row">
                                <div className="col-md-4">
                                    <a href="#">
                                        <img src="/images/location-white.png" alt="Location" />
                                        <span>Göztepe, İnönü Cd. No:476, 35290 Konak/İzmir</span>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="#">
                                        <img src="/images/telephone-white.png" alt="Phone" />
                                        <span>Call : (0232) 355 05 55</span>
                                    </a>
                                </div>
                                <div className="col-md-4">
                                    <a href="#">
                                        <img src="/images/envelope-white.png" alt="Email" />
                                        <span>secretariat@my.aci.k12.tr</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="container-fluid footer_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-9 mx-auto text-center">
                                <p>
                                    © {new Date().getFullYear()} All Rights Reserved By
                                    <a href="/"> ACIMUN</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
