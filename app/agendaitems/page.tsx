import Navbar from '@/components/Navbar';
import { Drawer } from '@mui/material';
import Link from 'next/link';
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
      
      <div className="hero_area_agend">
        <Navbar/>
   
        <section className="slider_section">
          <div className="container">
            <div className="detail_box">
              <div className='flex justify-evenly flex-col md:flex-row gap-4 md:gap-[200px]'>
                <div className='flex flex-col text-center justify-center'>
                  <span className='text-[85px] md:text-[100px] my-[60px] fade-in-text'>
                    Agenda Items
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className='flex justify-center md:px-[400px] px-5 items-center'>
          <div className='px-4 md:px-0 py-5'>
            <div className='flex flex-col shadow-xl rounded-xl px-2 pb-4 justify-center'>
              <div className='text-2xl font-black'>Agenda Items</div>
              
              <div className='font-bold text-xl'>GA1: Disarmament and International Security Committee</div>
              <ul>
                <li>1-Regulating the integration of AI technologies in defense systems to mitigate risks of misuse and escalation of conflicts</li>
                <li>2-Strengthening early warning systems for conflict prevention</li>
                <li>3-Restricting illicit arms trafficking to conflict regions and its impact on prolonging violence</li>
              </ul>

              <div className='font-bold text-xl'>GA2: Social and Humanitarian Committee</div>
              <ul>
                <li>1-Tackling the crisis originating from climate-induced displacement in disadvantaged regions</li>
                <li>2-Ensuring the right to asylum for those fleeing violence</li>
                <li>3-Enhancing the coordination of humanitarian assistance in crisis situations</li>
              </ul>

              <div className='font-bold text-xl'>GA3: Special Political & Decolonization Committee</div>
              <ul>
                <li>1-Resolving land disputes stemming from colonial borders</li>
                <li>2-Monitoring the conflict in the West Bank and Gaza</li>
                <li>3-Promoting the principle of territorial integrity in the face of secessionist movements</li>
              </ul>

              <div className='font-bold text-xl'>GA4: Environmental Committee</div>
              <ul>
                <li>1-Rehabilitating war-damaged environments as part of peace processes</li>
                <li>2-Enhancing accessibility to clean water systems in areas of conflict</li>
                <li>3-Reducing the effects of radioactive decay including health, safety, and environmental implications</li>
              </ul>

              <div className='font-bold text-xl'>GA5: Legal Committee</div>
              <ul>
                <li>1-Addressing legal challenges related to sovereignty and territorial disputes</li>
                <li>2-Enhancing legal mechanisms for protecting civilian populations in warfare</li>
                <li>3-Increasing collaboration among regional organizations and the United Nations</li>
              </ul>

              <div className='font-bold text-xl'>SDC: Sustainable Development Committee</div>
              <ul>
                <li>1-Pioneering ways to promote social and economic equality in conflict-affected states</li>
                <li>2-Promoting sustainable development goals (SDGs) via multi-stakeholder collaboration</li>
                <li>3-Enhancing sustainable development through the utilization of information and communications technologies (ICTs)</li>
              </ul>

              <div className='font-bold text-xl'>SPC1: Special Conference on Economic Instability and Inflation</div>
              <ul>
                <li>1-Exploring strategies to combat hyperinflation in developing economies and devise new monetary policies</li>
                <li>2-Creating frameworks for long-term economic stability in post-conflict regions</li>
                <li>3-Techniques for maintaining and accelerating growth</li>
              </ul>

              <div className='font-bold text-xl'>SPC2: Special Conference on Immigration and Refugee Crises</div>
              <ul>
                <li>1-Improving access to education and healthcare for displaced people</li>
                <li>2-Preventing discrimination and xenophobia against migrants and refugees</li>
                <li>3-Integrating refugees while enhancing their economic opportunities</li>
              </ul>

              <div className='font-bold text-xl'>SC: Security Council</div>
              <ul>
                <li>1-Addressing the role of veto power in hindering conflict resolution</li>
                <li>2-Addressing methods for harmonious discussion and long-term administration of South China Sea territorial disputes</li>
                <li>3-The aftermath of the political instability in Haiti</li>
              </ul>

              <div className='font-bold text-xl'>Advisory Panel on the Question of the Sahel (APQS)</div>
              <ul>
                <li>1-Question of Niger</li>
                <li>2-Investigating and evaluating the war crimes in Burkina Faso</li>
                <li>3-Tackling extremist militancy in the Sahel region</li>
              </ul>

              <div className='font-bold text-xl'>Economic and Social Council (ECOSOC)</div>
              <ul>
                <li>1-Exploring transparent and sustainable job creation initiatives that protect human rights and promote long-term growth</li>
                <li>2-Tackling trade inequalities and supporting Least Developed Countries (LDCs) to integrate into global markets</li>
                <li>3-Addressing the effects of employment of refugees on regional labor markets</li>
              </ul>

              <div className='font-bold text-xl'>International Court of Justice (ICJ)</div>
              <ul>
                <li>1-Sovereignty over Pedra Branca/Pulau Batu Puteh, Middle Rocks and South Ledge (Malaysia v. Singapore)</li>
              </ul>
              <div className='font-bold text-xl'>Bilingual Forum on the Efforts of Nuclear Non-Proliferation</div>
              <div className='font-bold text-xl'>Forum Bilingue sur les Efforts de Non-Prolifération Nucléaire</div>
              <div className='font-semibold text-lg'>Sub-Forum 1: Treaties and State Actors</div>
              <div className='font-semibold text-lg'>Sous-Forum 1 : Traités et Acteurs Étatiques</div>
              <ul>
                <li>1-The question of strengthening the Non-Proliferation Treaty (NPT) to address
                modern nuclear challenges </li>
                <li>1-La question du renforcement du Traité de
                Non-Prolifération (TNP) pour relever les défis nucléaires modernes</li>
                <div className='h-2'></div>
                <li>2-Regulating the use of emerging technologies, such as artificial intelligence and cyber tools, in nuclear warfare</li>
                <li>2-La régulation de l'utilisation des technologies émergentes, telles que l’intelligence artificielle et les outils cybernétiques, dans la guerre nucléaire</li>
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
        </div>
      </section>

      <footer className="container-fluid footer_section">
        <div className="container">
          <p>© {new Date().getFullYear()} All Rights Reserved By <a href="/">ACIMUN</a></p>
        </div>
      </footer>
    </>
  )
}
