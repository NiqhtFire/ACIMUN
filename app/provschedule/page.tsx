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
        <Navbar />
        <section className="slider_section">
          <div className="container">
            <div className="">
              <div className="detail_box">
                <div className='flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]'>
                  <div className='flex flex-col text-center justify-center'>
                    <span className='text-[85px] md:text-[100px] my-[60px] fade-in-text'>
                      Provisional Schedule for ACIMUN'25
                    </span>
                  </div>
                </div>
              </div>
              <a href="" className=""></a>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className='flex justify-center'>
          <div className='grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-x-[120px] gap-y-[100px] py-5'>
            <div className='flex flex-col shadow-xl rounded-xl pt-4 px-5 pb-4 justify-top'>
              <div>THURSDAY, February 20</div>
              <div>15:00 Hatay Gate Opens</div>
              <div>15:00 - 16:00 Registration (Hatay Gate)</div>
              <div>15:30 - 16:00 Committee Chairs Meeting - Beacon 13</div>
              <div>16:00 - 17:00 Opening Ceremony (Blake Auditorium)</div>
              <div>16:30 - 17:00 Press Conference - Taner Garaj</div>
              <div>17:00 - 18:00 Committees in Meeting</div>
              <div>18:00 - 20:00 Dinner</div>
              <div>20:00 Buses Leave</div>
            </div>

            <div className='flex flex-col shadow-xl rounded-xl px-5 pb-4 pt-4 justify-top'>
              <div>FRIDAY, February 21</div>
              <div>8:30 - 9:00 Committee Chairs Meeting - Beacon 13</div>
              <div>9:00 - 17:30 Committees in Meeting</div>
              <div>9:30 - 17:00 Approval Panel Opens</div>
              <div>12:00 - 12:45 Group 1 Lunch</div>
              <div>12:45 - 13:30 Group 2 Lunch</div>
              <div>15:00 - 15:15 Break</div>
              <div>17:00 - 17:30 Committee Chairs Meeting - Beacon 13</div>
              <div>17:30 Buses Leave</div>
            </div>

            <div className='flex flex-col shadow-xl rounded-xl px-5 pb-4 pt-4 justify-top'>
              <div>SATURDAY, February 22</div>
              <div>8:30 - 9:00 Committee Chairs Meeting - Beacon 13</div>
              <div>9:00 - 17:00 Committees in Meeting</div>
              <div>9:00 - 14:00 Approval Panel Opens</div>
              <div>12:00 - 12:45 Group 1 Lunch</div>
              <div>12:45 - 13:30 Group 2 Lunch</div>
              <div>15:00 - 15:15 Break</div>
              <div>17:00 - 17:30 Committee Chairs Meeting - Beacon 13</div>
              <div>17:30 Buses Leave</div>
            </div>

            <div className='flex flex-col shadow-xl rounded-xl px-5 pb-4 pt-4 justify-top'>
              <div>SUNDAY, February 23</div>
              <div>8:30 - 9:00 Committee Chairs Meeting - Beacon 13</div>
              <div>9:00 - 15:30 ECOSOC, SC, SDC, SPC1, SPC2, ICJ, Bilingual Forum in Meeting</div>
              <div>12:00 - 12:30 GA Committees Lunch</div>
              <div>12:30 - 13:30 ECOSOC, SC, SDC, SPC1, SPC2, ICJ, Bilingual Forum Lunch</div>
              <div>12:30 - 15:30 General Assembly in Meeting (Blake Auditorium)</div>
              <div>15:30 - 16:30 Closing Ceremony (Blake Auditorium)</div>
              <div>16:30 Buses Leave</div>
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
                    Göztepe, İnönü Cd. No:476, 35290 Konak/İzmir
                  </span>
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
                    secretariat@my.aci.k12.tr
                  </span>
                </a>
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
                © {new Date().getFullYear()} All Rights Reserved By
                <a href="/"> ACIMUN</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
