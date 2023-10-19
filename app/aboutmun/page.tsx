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
      href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
      rel="stylesheet"
    />
   
    <link href="/css/style.css" rel="stylesheet" />

    <link href="/css/responsive.css" rel="stylesheet" />
    <div className="hero_area">
      <Navbar/>
   
      <section className=" slider_section ">
        <div className="container">
          <div className="">
            <div className="">
              <div className="detail_box">
                <div className='flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]    '>
             
                <div className='flex flex-col text-center justify-center'>
                  <span className='text-[100px] my-[60px] fade-in-text '>
                  About ACIMUN 

                  
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
        <div className='px-5 md:px-4 text-xl py-2'> American Collegiate Institute Model United Nations (ACIMUN) club has a long history that dates way back to 1995 when our beloved school principal Didem Erpulat – who was a history teacher back then – established the club. </div>
        <div className='px-5 md:px-4 text-xl py-4'>When the club was first established, access to information regarding world politics was extremely limited. Our current principal, along with the first-generation students of the club, have rigorously put efforts into learning what MUN is. They have spent long hours in libraries, endeavored to communicate with actual diplomats to find out information about international relations, and performed with absolute success by representing the Solomon Islands at the THIMUN conference that our school attended for the first time.</div>
        <div className='px-5 md:px-4 text-xl py-4'>Since then, our principal always recounted how they formed the club from scratch and brought it to the position where it stands right now by experiencing such difficulties and encountering such obstacles. Because of this – the enriched history of rigor that is deeply rooted in the foundation of the club – the principle of hard work underlies the past, current existence, and future of the club. </div>
        <div className='px-5 md:px-4 text-xl py-4'>Given the history and the core values of the club, students in ACIMUN are extremely skilled delegates with proficient English, adequate information about international relations, and the passion to do MUN rigorously despite all the obstacles and difficulties it may bring. </div>
        <div className='px-5 md:px-4 text-xl py-4'>This prestigious club held its first conference last year on an online platform with numerous participants. The conference was committed to outstanding success and absolute professionalism. The same qualities of our past conference will be dominantly seen in our conference this year as well, without question.</div>
        <div className='px-5 md:px-4 text-xl py-4'>This is the history of the prestigious ACIMUN club, and there is no doubt that the quality of our conference will be proportional to the prosperity of our club.</div>
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
