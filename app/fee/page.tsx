import Image from 'next/image'
import Link from 'next/link'
import { FaRegFile } from "react-icons/fa6";
import Navbar from '../../components/Navbar';


const fees = [
  {content: "Participation Fee Per Delegate",fee:"900" + " Turkish Liras"},
  {content: "Participation Fee Per ICJ Member",fee:"900" + " Turkish Liras"},
  {content: "Participation Fee Per Student Officer",fee:"900" + " Turkish Liras"},
  {content: "Delegation Fee (per delegation only)",fee:"450" + " Turkish Liras"},
]


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
        <div className="">
        <Navbar/>
        </div>
      </header>
      <div className='flex justify-around text-4xl font-bold  my-5'>
        ACIMUN'2024 Conference Fees Are As Follows
      </div>

      <div className='flex justify-center'>
        <div className="grid grid-cols-2 gap-4 place-items-center place-content-center h-56 pointer-events-none bg-blue-800/75 rounded-xl mx-4 pl-2 mt-2 md:mt-0 md:mx-0 md:pl-5">
          {fees.map((feez, i) =>{
            return(
             <><div className='font-bold' key={i} >{feez.content}</div><div>{feez.fee}</div></> 
            )
          })}
        </div>
      </div>
    <div className='flex justify-center md:px-[200px] px-[30px] py-[50px]'>
          The fees include: First day welcome barbecue, lunch for three days (2nd, 3rd, and 4th days of the conference), snacks/drinks throughout the conference, and of course, conference giveaways such as the plaque-cards, pens, and notepads.
    </div>
    <div className='flex justify-center md:px-[200px] px-[30px] py-[25px]'>
          Transportation is NOT included in the fee and the fee for shuttles will be communicated to the schools who wish to use them.
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
