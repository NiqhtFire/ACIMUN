import Navbar from '@/components/Navbar';
import { Drawer } from '@mui/material';
import { FaRegFile } from "react-icons/fa6";

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
    <div className="hero_area_prov">
      <Navbar/>
   
      <section className=" slider_section ">
        <div className="container">
          <div className="">
            <div className="">
              <div className="detail_box">
                <div className='flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]    '>
             
                <div className='flex flex-col text-center justify-center'>
                  <span className=' text-[85px] md:text-[100px] my-[60px] fade-in-text '>
                  Allocations

                  
                </span>
            
            
               
             
                </div>


                
               
                 

            
              
                
                </div>



              <div className='flex flex-row '>
             
                
              </div>
               

              
              
              </div>
              <a href="" className=""></a>
          </div>
          
          </div>
        </div>
      


      </section>
   
    </div>
    <section>
    <div className='flex justify-center'>
    <div className='grid grid-cols-1 px-4 md:px-0 md:grid-cols-1 gap-x-[120px] gap-y-[100px] py-5'>
<div className='flex justify-center text-2xl font-bold'> Delegation Allocations</div>
<div className='grid grid-cols-2 gap-5 shadow-xl rounded-xl pt-4 px-5 justify-center'>
    <div>ÇAKABEY</div>
    <div className='flex flex-col'>
      <div>India</div>
       <div>Sierra Leone</div>
    </div>
    <div>İSTEK ANTALYA LARA</div>
    <div>Israel</div>
    <div>ODTÜ GVÖ MERSİN</div>
    <div className='flex flex-col'>
      <div>India</div>
       <div>European Union</div>
    </div>
    <div>FMV ÖZEL AYAZAĞA IŞIK</div>
    <div>Iraq</div>
    <div>IŞIKKENT</div>
    <div className='flex flex-col'>
      <div>Ukraine</div>
       <div>Guyana</div>
    </div>
    <div>GAZİEMİR ROTA COLLEGE</div>
    <div>Japan</div>
    <div>İZMİR BAHÇEŞEHİR COLLEGE</div>
    <div>Pakistan</div>
    <div>TEV İNANÇ TÜRKEŞ HIGH SCHOOL</div>
    <div>United Kingdom</div>
    <div>TAKEV</div>
    <div className='flex flex-col'>
      <div>Greece</div>
       <div>Dominican Republic</div>
       <div>Algeria</div>
    </div>
    <div>İSTEK İZMİR</div>
    <div className='flex flex-col'>
      <div>Malta</div>
       <div>Ecuador</div>
    </div>
    <div>TED EGE COLLEGE</div>
    <div>Saudi Arabia</div>
    <div>IZMIR SAINT JOSEPH</div>
    <div>China</div>
    <div>ITÜ GVÖ</div>
    <div className='flex flex-col pb-2'>
      <div>Switzerland</div>
       <div>Russia</div>
    </div>
</div>

<div className='flex justify-center text-2xl font-bold'> Room Allocations</div>
<div className='grid grid-cols-2 gap-5 shadow-xl rounded-xl pt-4 px-5 justify-center'>
<div>Beacon 2</div>
<div>General Assembly 1</div>
<div>Beacon 3</div>
<div>General Assembly 2</div>
<div>Beacon 5</div>
<div>General Assembly 3</div>
<div>Beacon 6</div>
<div>General Assembly 4</div>
<div>Beacon 7</div>
<div>General Assembly 5</div>
<div>Beacon 8</div>
<div>Sustainable Development Committee</div>
<div>Beacon 9</div>
<div>Economic and Social Council</div>

<div>Beacon 12</div>
<div>International Court of Justice</div>
<div>Heritage Room</div>
<div>Security Council</div>
<div>Registration and Welcome Dinner</div>
<div>Co-op</div>
<div>Advisor Lounge</div>
<div>Co-Op</div>
<div>Beacon 7.5</div>
<div className='pb-3'>Secretariat Room</div>
</div>

</div>


    </div>
    
     
     

    </section>
    
    
    
   
  
   
    <section className="info_section layout_padding">
      <div className="container">
        <div className="info_contact">
          <div className="row">
            <div className="col-md-4">
              <a href="">
                <img src="/images/location-white.png" alt="" />
                <span>
Göztepe, İnönü Cd. No:476, 35290 Konak/İzmir</span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <img src="/images/telephone-white.png" alt="" />
                <span>Call : (0232) 355 05 55</span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <img src="/images/envelope-white.png" alt="" />
                <span>
secretariat@my.aci.k12.tr</span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          
          <div className="col-md-4 col-lg-3">
            <div className="info_social">
            
             
              <div>
                <a href="">
                  <img src="/images/instagram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="container-fluid footer_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9 mx-auto">
            <p>
              © <noscript>2023</noscript>{new Date().getFullYear()} All Rights Reserved By
              <a href="/"> ACIMUN</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
   
  </>
  
  )
}
