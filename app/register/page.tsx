"use client";
import Image from 'next/image'
import Link from 'next/link'
import { FaRegFile } from "react-icons/fa6";
import Navbar from '../../components/Navbar';

import { SetStateAction, useState } from 'react';
import React from 'react';
export default function Home() {
  const [likes, setLikes] = React.useState(0);

  const [selectedValue, setSelectedValue] = useState('');

  const handleClick = (e:any) => {
    setSelectedValue(e.target.value);
  };

  

  return (
    <>

    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
   
    <meta name="keywords" content="mun muntürkiye munizmir muntr" />
    <meta name="description" content="Welcome to ACIMUN, the American Collegiate Institute Model United Nations, where diplomacy, debate, and global engagement come to life! At ACIMUN, we believe in fostering a dynamic environment that empowers students to explore and understand the intricacies of international relations, hone their public speaking skills, and cultivate a deeper appreciation for the diverse perspectives that shape our world." />
    <meta name="author" content="ACIMUN" />
    <title>ACIMUN</title>
    
  
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
    />

    <link rel="stylesheet" type="text/css" href="/css/bootstrap.css" />
  
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
      rel="stylesheet"
    />
   
    <link href="/css/style.css" rel="stylesheet" />
<div className='a'>

</div>
    <Navbar isBlacked />
    <div className='mt-5'></div>
    <section>
<div className='flex justify-center mt-[100px]'>
<div className='flex items-center flex-col'>
  <div className='pb-4 text-2xl'>Form Selection</div>
        <select name="forms" id="form" onChange={handleClick}>
        <option value="">Select a Form</option>
        <option value="1">Form 1</option>
        <option value="2">Stoff</option>
        <option value="3">AP</option>
        <option value="4">ICJ</option>
        <option value="5">French Forum</option>
        <option value="6">Press Team</option>




        </select>
    </div>
</div>
</section>
{ selectedValue === '1'&&(
      <div>
        <iframe src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/6" style={{border:0,width:"100%"}} height="2765"></iframe>
        <script src="https://www.cognitoforms.com/f/iframe.js"></script>
      </div>
  )}

{selectedValue ==='2' && (
    <div>
      <iframe src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/4" style={{border:0,width:"100%"}} height="2765"></iframe>
<script src="https://www.cognitoforms.com/f/iframe.js"></script>
    </div>)
 
  }
  {selectedValue ==='3' && (
    <div>
   <iframe src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/8" style={{border:0,width:"100%"}} height="2765"></iframe>
<script src="https://www.cognitoforms.com/f/iframe.js"></script>
    </div>)
 
  }
  {selectedValue ==='4' && (
    <div>
 <iframe src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/5" style={{border:0,width:"100%"}} height="2765"></iframe>
<script src="https://www.cognitoforms.com/f/iframe.js"></script>

    </div>)
 
  }
  {selectedValue ==='5' && (
    <div>
 <iframe src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/7" style={{border:0,width:"100%"}} height="2765"></iframe>
<script src="https://www.cognitoforms.com/f/iframe.js"></script>

    </div>)
 
  }
  {selectedValue ==='6' && (
    <div>
 <iframe src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/1"  style={{border:0,width:"100%"}} height="2765"></iframe>
<script src="https://www.cognitoforms.com/f/iframe.js"></script>

    </div>)
 
  }




    
    
   
    
    <footer className="container-fluid footer_section mt-[300px]">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 mx-auto">
            <p>
              © 2023 All Rights Reserved By
              <a href="/"> ACIMUN</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
   
  </>
  
  )
}
