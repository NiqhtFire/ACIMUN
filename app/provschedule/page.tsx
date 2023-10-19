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
                  <span className=' text-[85px] md:text-[100px] my-[60px] fade-in-text '>
                  Provosional Schedule

                  
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
 <div className='grid  gird-cols-1 px-4 md:px-0 md:grid-cols-2 gap-x-[120px] gap-y-[100px] py-5'>

            <div className='flex flex-col shadow-xl rounded-xl pt-4 px-5 justify-center'>
                <div>Thursday</div>
                <div>15.00 - 16.00 Registration/Hatay Entrance</div>
                <div>15.15 - 15.45 StOff Workshop/B-1</div>
                <div>16.00 - 17.00 Committees in Session</div>
                <div>17.00 - 18.30 Opening Ceremony/Blake Auditorium</div>
                <div>18.30 - 20.00 Barbecue/Co-op</div>
                <div>20.30 Buses Leave</div>

            </div>
            <div className='flex flex-col shadow-xl rounded-xl px-5 pb-4 justify-center'>
                <div>Friday</div>
                <div>09.00 - 09.30 StOff Meeting/B1</div>
                <div>09.30 - 12.00 All Committees in Session</div>
                <div>12.00 - 13.30 Lunch/Cafeteria</div>
                <div>13.45 - 18.00 Approval Panel Open</div>
                <div>13.45 - 15.25 All Committees in Session</div>
                <div>15.25 - 15.35 Break</div>
                <div>15.35 - 17.30 All Committees in Session</div>
                <div>17.30 - 18.00 StOff Debriefing </div>
                <div>18.00 Buses Leave</div>
            </div>

            <div className='flex flex-col shadow-xl rounded-xl px-5  pb-4 justify-center'>
                <div>Saturday</div>
              <div>09.00 - 09.30 StOff Meeting/B1</div>
              <div>09.40 - 12.00 All Committees in Session</div>
              <div>10.00 - 17.30 Approval Panel Open</div>
              <div>12.00 - 13.30 Lunch/Cafeteria</div>
              <div>13.45 - 15.25 All Committees in Session</div>
              <div>15.25 - 15.35 Break</div>
              <div>15.35 - 17.30 All Committees in Session</div>
              <div>17.30 - 18.00 StOff Debriefing</div>
              <div>18.00 Buses Leave</div>
            </div>


            <div className='flex flex-col shadow-xl rounded-xl px-5 pb-4 justify-center'>
            <div>Sunday</div>
              <div>09.00 - 09.30 StOff Meeting/B1</div>
              <div>09.30 - 09.40 Break</div>
              <div>09.40 - 12.00 All Committees in Session</div>
              <div>10.00 - 17.30 Approval Panel Open</div>
              <div>12.00 - 13.30 Lunch/Cafeteria</div>
              <div>13.30 - 16.30 ECOSOC, SC, SDC1, SDC2, SPC1, SPC2 and ICJ in Session</div>
              <div>13.30 - 16.30 GA Plenary Session/Blake Auditorium</div>
              <div>16.45 - 18.00 Closing Ceremony </div>
              <div>18.30 Buses Leave</div>
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
