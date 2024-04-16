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
                  Agenda Items

                  
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
    <div className='flex justify-center md:px-[400px] px-5 items-center'>
    <div className=' px-4 md:px-0 py-5'>
    <div className='flex flex-col shadow-xl rounded-xl px-5 pb-4 justify-center'>
        <div className='text-2xl font-black'>Agenda Items</div>
        <div className='font-bold text-xl'>GA1: Disarmament and International Security Committee</div>
        <ul>
            <li>Redirecting military spending for socio-economic development</li>
            <li>Applying sustainable strategies to prevent resource-related conflicts</li>
            <li>The question of non-proliferating Weapons of Mass Destruction (WMDs)</li>
        </ul>
        <div className='font-bold text-xl'>GA2: Social and Humanitarian Committee</div>
        <ul>
            <li>Tackling the humanitarian crisis in Ethiopia</li>
            <li>Promoting strategies to improve transparency in the distribution of humanitarian aid</li>
            <li>Implementing measures to tackle the consequential spread of extremist ideologies in Europe as a consequence of the refugee crisis</li>
        </ul>
        <div className='font-bold text-xl'>GA3: Special Political & Decolonization Committee</div>
        <ul>
            <li>Discussing the right to self-determination of the remaining Non-Self-Governing Territories</li>
            <li>The question of Persian Gulf</li>
            <li>Monitoring the conflict between Sudan and South Sudan</li>
        </ul>
        <div className='font-bold text-xl'>GA4: Environmental Committee</div>
        <ul>
            <li>Addressing ways to enhance transparency and compliance in countries’ climate action plans</li>
            <li>Enhancing accessibility to responsible waste management systems</li>
            <li>Mitigating the effects of the collapsing glaciers and the rising sea-level in high risk regions</li>
        </ul>
        <div className='font-bold text-xl'>GA5: Legal Committee</div>
        <ul>
            <li>The question of legislative immunity</li>
            <li>Addressing tax evasion and profit shifting practices in multinational corporations</li>
            <li>Increasing transparency and accountability between parties in international treaties</li>
        </ul>
        <div className='font-bold text-xl'>SDC: Sustainable Development Committee</div>
        <ul>
            <li>Seeking strategies to promote the transition into circular economy models</li>
            <li>Pioneering ways to promote ethical and sustainable business practices based on fair labor standards and transparent supply chains</li>
            <li>Measures to enhance global health emergency preparedness and transparency in information regarding healthcare</li>
        </ul>
        <div className='font-bold text-xl'>SC: Security Council</div>
        <ul>
            <li>Mediating the conflict in West Bank and Gaza</li>
            <li>Distribution of natural income in African Great Lakes</li>
            <li>The aftermath of territories impacted by Boko-Haram</li>
        </ul>
        <div className='font-bold text-xl'>Economic and Social Council (ECOSOC)</div>
        <ul>
            <li>Ensuring safety nets for vulnerable populations’ uncertain economic incomes during times of natural disasters</li>
            <li>Developing strategies to promote sustainable agriculture production and responsible land use</li>
            <li>Promoting fair trade practices and transparency in international trade agreements</li>
        </ul>
        <div className='font-bold text-xl'>International Court of Justice (ICJ)</div>
        <ul>
            <li>Bosnia and Herzegovina v. Serbia and Montenegro: Application of the convention on the prevention and punishment of the crime of genocide</li>
        </ul>
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
