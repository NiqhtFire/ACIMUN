import Image from "next/image";
import Link from "next/link";
import { FaRegFile } from "react-icons/fa6";
import Navbar from "../../components/Navbar";

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
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
      <link rel="stylesheet" type="text/css" href="/css/responsive.css" />

      <Navbar isBlacked />

     
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="shadow-xl rounded-xl md:mt-14 bg-white max-w-lg w-full px-8 py-[100px] md:px-10 md:py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Conference Details
          </h2>
          <p className="text-center text-gray-600 mb-8 leading-relaxed">
            Navigate through the sections below to learn more about our conference.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { href: "/aboutmun", label: "About Us" },
              { href: "/theme", label: "Theme" },
              { href: "/agendaitems", label: "Agenda Items" },
              { href: "/provschedule", label: "Provisional Schedule" },
              { href: "/allocations", label: "Allocations" },
              { href: "/chairicjlist", label: "Chair/ICJ List" },
              { href: "/resolutions", label: "Resolutions" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group flex items-center justify-center gap-2 rounded-lg px-5 py-3 border border-gray-200 hover:bg-blue-100 transition-all duration-300"
              >
                
                <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-700">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

   
      <footer className="container-fluid footer_section py-6 text-white text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} All Rights Reserved By
          <Link href="/" className="text-blue-400 hover:text-blue-500 ml-1">
            ACIMUN
          </Link>
        </p>
      </footer>
    </>
  );
}
