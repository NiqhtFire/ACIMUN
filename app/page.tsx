import Navbar from '@/components/Navbar';
import { Drawer } from '@mui/material';
import { FaRegFile } from "react-icons/fa6";
export default function Home() {
  return (
    <>

    <meta name="keywords" content="mun muntürkiye munizmir muntr" />
    <meta name="description" content="Welcome to ACIMUN, the American Collegiate Institute Model United Nations, where diplomacy, debate, and global engagement come to life! At ACIMUN, we believe in fostering a dynamic environment that empowers students to explore and understand the intricacies of international relations, hone their public speaking skills, and cultivate a deeper appreciation for the diverse perspectives that shape our world." />
    <meta name="author" content="ACIMUN" />
    <title>ACIMUN</title>
  
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.1.3/assets/owl.carousel.min.css"
    />

    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
      rel="stylesheet"
    />
   
    <link href="css/style.css" rel="stylesheet" />

    <link href="css/responsive.css" rel="stylesheet" />
    <div className="hero_area">
      <Navbar/>
   
      <section className=" slider_section ">
        <div className="container">
          <div className="">
            <div className="">
              <div className="detail_box">
                <div className='flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]    '>
             
                <div className='flex flex-col text-center justify-center'>
                  <span className='text-6xl my-[60px] '>
                  ACIMUN'24 

                  
                </span>
                <span className='text-5xl italic'>
                "Sustaining Democracy in Times of Turmoil"
                </span>
                <span className='text-2xl mt-2 mb-2'>
                Izmir, Turkey
                </span>
                <p className='text-[20px]'>
                ACIMUN'23 REGISTRATIONS ARE FINISHED! <br />
                 YOU'LL BE CONTACTED SOON
                </p>
            
                <div>
                <a className="text-center whitespace-nowrap" href='/'>
                  Contact Us
                </a>
                </div>
             
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
  
    <section className="service_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Things That You Can Experience In ACIMUN</h2>
          <div className='mb-[6px]'>
        
          </div>
          
          
        </div>
        <div className="service_container ">
          <div className="box hover:scale-105">
            <div className="">
            
            </div>
            <div className="detail-box">
              <h5>Engaging Simulations</h5>
              <p>
              ACIMUN hosts engaging Model UN simulations mirroring UN proceedings. Delegates represent countries, negotiate global issues, and craft resolutions for complex problems.
              </p>
            </div>
          </div>
          <div className="box hover:scale-105">
            <div className="">
    
            </div>
            <div className="detail-box ">
              <h5>Skill Development</h5>
              <p>
              ACIMUN fosters growth in public speaking, negotiation, research, and critical analysis. It offers a nurturing space for members to develop confidence and skills within a challenging yet supportive setting.
              </p>
            </div>
          </div>
          <div className="box hover:scale-105">
            <div className="">
              
        
            </div>
            <div className="detail-box ">
              <h5>Global Awareness</h5>
              <p>
              ACIMUN opens a global window, immersing students in diverse perspectives and cultures. Exploring international issues, members grasp our interconnected global community's depth and complexity.
              </p>
            </div>
          </div>
          <div className="box hover:scale-105 ">
            <div className="">
            
            </div>
            <div className="detail-box ">
              <h5>Networking Opportunities</h5>
              <p>
              As part of ACIMUN, students have the chance to interact with like-minded peers from various backgrounds. Through conferences, workshops, and events, members can establish valuable connections that may extend beyond their academic careers.
              </p>
            </div>
          </div>
        </div>
        <div className="btn-box">
          <a href="/">Read More</a>
        </div>
      </div>
    </section>
    
    <section className="blog_section layout_padding">
      <div className="container">
        <div className=" flex justify-center">
          <h2>News</h2>
          <img src="" alt="" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="https://www.acimun.com/wp-content/uploads/2022/10/57-574316_karsiyaka-izmir-turkey-turkey-by-stefan-king-sk-scaled.jpeg" alt="" />
              </div>
              <div className="detail-box">
                <h5>Registrations</h5>
                <p>
                ACIMUN'23 REGISTRATIONS ARE FINISHED! YOU'LL BE CONTACTED SOON
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">
              <div className="img-box">
                <img src="https://www.acimun.com/wp-content/uploads/2022/11/BLAKEHALL-GECE.jpg" alt="" />
              </div>
              <div className="detail-box">
                <h5>ACCOMMODATION</h5>
                <p>
                ACCOMMODATION DETAILS WILL BE PUSBLISHED
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="contact_section layout_padding">
      <div className="container ">
        <div className="heading_container">
          <h2>Contact Us</h2>
          <img src="" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form action="">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input
                  type="text"
                  className="message-box"
                  placeholder="Message"
                />
              </div>
              <div className="d-flex ">
                <button>SEND</button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.9918204025803!2d27.088637076391187!3d38.395438176164966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdeaf8c5798f7%3A0x67ceb88a0057d66!2sAmerican%20Collegiate%20Institute!5e0!3m2!1sen!2str!4v1692617795371!5m2!1sen!2str"
                  width={600}
                  height={300}
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: "100%" }}
         
                />
              </div>
            </div>
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
                <img src="images/location-white.png" alt="" />
                <span>
Göztepe, İnönü Cd. No:476, 35290 Konak/İzmir</span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <img src="images/telephone-white.png" alt="" />
                <span>Call : (0232) 355 05 55</span>
              </a>
            </div>
            <div className="col-md-4">
              <a href="">
                <img src="images/envelope-white.png" alt="" />
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
                  <img src="images/instagram.png" alt="" />
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
