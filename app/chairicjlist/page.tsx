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
              <div className="">
                <div className="detail_box">
                  <div className="flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]">
                    <div className="flex flex-col text-center justify-center">
                      <span className="text-[85px] md:text-[100px] my-[60px] fade-in-text">
                        Chair / ICJ List For ACIMUN'25
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <a href="" className=""></a>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 px-4 md:px-0 md:grid-cols-1 gap-x-[120px] gap-y-[100px] py-5">
            
       
            <div className="flex justify-center text-2xl font-bold">Chair List</div>
            <div className="grid grid-cols-3 gap-5 shadow-xl rounded-xl py-4 px-5 justify-center">
              <div className="font-bold">Committee</div>
              <div className="font-bold">President Chair</div>
              <div className="font-bold">Deputy Chair(s)</div>

              <div>GA1</div>
              <div>Janset Selen</div>
              <div>Deniz İpek Zeynioğlu, Aileen Aylin Hillhouse</div>

              <div>GA2</div>
              <div>Zeynep Turhan</div>
              <div>Ceyda Kuzucu, Can Kuzey Güner</div>

              <div>GA3</div>
              <div>İlke Biçeroğlu</div>
              <div>Can Şentaşlar, Mina Yorgancılar</div>

              <div>GA4</div>
              <div>Erke Değerli</div>
              <div>Deniz Ege Demirtaş, Ali Ege Solmaz</div>

              <div>GA5</div>
              <div>Zehra Desen Çelik</div>
              <div>Cafer Demir Özalp, Damla Çakır</div>

              <div>SDC</div>
              <div>Efe Özgür</div>
              <div>Talya Dedeköylü</div>

              <div>SPC</div>
              <div>Kaan Şen</div>
              <div>Osman Yılmaz Ünver, Berke Balliel</div>

              <div>SC</div>
              <div>Nazlı Emre</div>
              <div>Yağız Saraçoğlu, Deniz Kolukısaoğlu</div>

              <div>ECOSOC</div>
              <div>Eda Gönül</div>
              <div>Efe Tatlıağaç, Başak Göç</div>

              <div>ICJ</div>
              <div>Defne Serdar</div>
              <div></div>

              <div>Bilingual Forum</div>
              <div>Ali Altan Yılmaz</div>
              <div>Su Arseven</div>
            </div>

 
            <div className="flex justify-center text-2xl font-bold">ICJ List</div>
            <div className="grid grid-cols-2 gap-5 shadow-xl rounded-xl pt-4 px-5 justify-center">
              <div>Damla Sinem Araz</div>
              <div>Selin İzmirlioğlu</div>
              <div>Melis Tatoğlu</div>
              <div>Serra Berrin Uysal</div>
              <div>Mete Alp Ünsal</div>
              <div>Gülefza Özkaraca</div>
              <div>Ceylin Güler</div>
              <div>Melis Itır Kaplan</div>
              <div>Zeynep Ünver</div>
              <div>Simay Özer</div>
              <div>Ada Düşünceli</div>
              <div>Jiyan Nur Çoban</div>
              <div className="pb-4">Duru Taflı</div>
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
                  <span>Göztepe, İnönü Cd. No:476, 35290 Konak/İzmir</span>
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
                  <span>secretariat@my.aci.k12.tr</span>
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
