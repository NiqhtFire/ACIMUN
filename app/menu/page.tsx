import Image from 'next/image'
import Link from 'next/link'
import { FaRegFile } from "react-icons/fa6";
import Navbar from '../../components/Navbar';





export default function Home() {
  return (
    <>

   
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

    <link href="/css/responsive.css" rel="stylesheet" />
   
    <Navbar isBlacked/>
    <div className='flex flex-row justify-center'>
    <div className='flex shadow-2xl rounded-xl flex-col justify-between mt-[150px] px-[150px] py-[100px]  '>
      
      <div className='text-black text-4xl'>Conference Details</div>  
     
 
  
    
      <Link href="/aboutmun" className='conferencedetails pt-4 text-[25px]'>About Us</Link>   
      <div className='flex w-[260px] h-[2px] bg-gray-500'></div>
      <Link href="/theme" className='conferencedetails pt-4 text-[25px]'>Theme</Link> 
      <div className='flex w-[260px] h-[2px] bg-gray-500'></div> 
      <Link href="/agendaitems" className='conferencedetails pt-4 text-[25px]'>Agenda Items</Link> 
      <div className='flex w-[260px] h-[2px] bg-gray-500'></div> 
      <Link href="/provschedule" className='conferencedetails pt-4 text-[25px]'>Provosional Schedule</Link> 
      <div className='flex w-[260px] h-[2px] bg-gray-500'></div> 
      <Link href="/allocations" className='conferencedetails pt-4 text-[25px]'>Allocations</Link> 
      <div className='flex w-[260px] h-[2px] bg-gray-500'></div> 
      <Link href="/chairicjlist" className='conferencedetails pt-4 text-[25px]'>Chair/ICJ List</Link> 
      <div className='flex w-[260px] h-[2px] bg-gray-500'></div> 

    
    { /* <Link href="/provschedule" className='conferencedetails pt-4 text-[25px]'>Provosional Schedule</Link> 
      <div className='flex w-[240px] h-[2px] bg-gray-500'></div> */}
      

     
    </div>  
    </div>
  
    
    
   
    
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
