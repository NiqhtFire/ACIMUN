import Image from 'next/image'
import Link from 'next/link'
import { FaRegFile } from "react-icons/fa6";
export default function Home() {
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

    <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
  
    <link
      href="https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap"
      rel="stylesheet"
    />
   
    <link href="css/style.css" rel="stylesheet" />

    <link href="css/responsive.css" rel="stylesheet" />
    <div className="hero_area">
      <header className="header_section">
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand" href="/">
              <div className='object-scale-down mt-[18px] h-[100px] w-[100px]'>
               <img src="https://www.acimun.com/wp-content/uploads/2022/10/f68d6cb0-e8e8-4bbd-95c9-af49ed34eae6.png" alt="" />
              </div>
             
              <div className='navbar-brand'>
                <span>ACIMUN</span>
              </div>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="s-1"> </span>
              <span className="s-2"> </span>
              <span className="s-3"> </span>
            </button>
            <div className="ml-[300px]" id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item">
                  <Link className="nav-link" href="/">
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      {" "}
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/fee">
                      {" "}
                      Fees{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="blog.html">
                      {" "}
                      News{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/about">
                      Register{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
 
      <section className=" slider_section ">
        <div className="container">
          <div className="">
            <div className=" ">
              <div className="detail_box">
                <div className='flex justify-center'>
                <h1 className=''>
                  ACIMUN'24 
                </h1>
                </div>
                <div className='flex justify-center'>
                <h1>
                  Registrations
                </h1>
                </div>

              <div className='flex justify-center'>
                <p className=''>
                ACIMUN'23 REGISTRATIONS ARE FINISHED! WAIT FOR ACIMUN'24
                </p>
              </div>
              <div className='flex justify-center'>
              <a href="/" className="">
                  Have Questions?
                </a>
              </div>
              
              </div>
              <a href="" className=""></a>
          </div>
          
          </div>
        </div>
      </section>


    </div>
    <iframe className="pt-[60px]" src="https://www.cognitoforms.com/f/zBOt36SYnEOOSsScc6diuA/7" style={{border:0,width:"100%"}} height="1402"></iframe>
      <script src="https://www.cognitoforms.com/f/iframe.js"></script>
    
    
   
    
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
