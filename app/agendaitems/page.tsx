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
                <li><a href="https://drive.google.com/file/d/19DdkB4-m9vyj5xe5zyVVtr_ptNo0vGjj/view?usp=sharing" target="">1-Regulating the integration of AI technologies in defense systems to mitigate risks of misuse and escalation of conflicts</a></li>
                <li><a href="https://drive.google.com/file/d/1J_pEtTnAU-WHpOci0Lo0stSeY-FFxZHm/view?usp=sharing" target="_blank">2-Strengthening early warning systems for conflict prevention</a></li>
                <li><a href="https://drive.google.com/file/d/1ZqF4-zWJbQa4yUm2vGf8_bhCgw532OtC/view?usp=sharing" target="_blank">3-Restricting illicit arms trafficking to conflict regions and its impact on prolonging violence</a></li>
              </ul>

              <div className='font-bold text-xl'>GA2: Social and Humanitarian Committee</div>
              <ul>
                <li><a href="https://drive.google.com/file/d/1yFscaGKS6LTw8oglqxva49905jMrPM_D/view?usp=sharing" target="_blank">1-Tackling the crisis originating from climate-induced displacement in disadvantaged regions</a></li>                
                <li><a href="https://drive.google.com/file/d/1pifX37rGPap4mTUvYZ9Jko1GfLck5Chx/view?usp=sharing" target="_blank">2-Ensuring the right to asylum for those fleeing violence</a></li>                
                <li><a href="https://drive.google.com/file/d/1FX5YhKp2d6OQv9sylMnoiJYx2EWAbgbW/view?usp=sharing" target="_blank">3-Enhancing the coordination of humanitarian assistance in crisis situations</a></li>                
              </ul>

              <div className='font-bold text-xl'>GA3: Special Political & Decolonization Committee</div>
              <ul>
                <li><div>1-Resolving land disputes stemming from colonial borders</div></li>    
                <li><a href="https://drive.google.com/file/d/1OinxDsf3P--_4KBEeJuLIkjJxWp_gAWT/view?usp=sharing" target="_blank">2-Monitoring the conflict in the West Bank and Gaza</a></li>    
                <li><a href="https://drive.google.com/file/d/1A5JpXqjUqlq5M2TygGhnfVYhNig2eM8Y/view?usp=sharing" target="_blank">3-Promoting the principle of territorial integrity in the face of secessionist movements</a></li>    
              </ul>

              <div className='font-bold text-xl'>GA4: Environmental Committee</div>
              <ul>
                <li><a href="https://drive.google.com/file/d/1mQirpn6v27pXwvxmuaxH4taJV6I4Tuys/view?usp=sharing" target="_blank">1-Rehabilitating war-damaged environments as part of peace processess</a></li>
                <li><a href="https://drive.google.com/file/d/1zbfF1wROA3ql3UMSajeZlUYdYbLg_hCZ/view?usp=sharing" target="_blank">2-Enhancing accessibility to clean water systems in areas of conflict</a></li> 
                <li><a href="https://drive.google.com/file/d/1z2jSAeixgo8tdlLu9ptllKzie_6pBH8c/view?usp=sharing" target="_blank">3-Reducing the effects of radioactive decay including health, safety, and environmental implications</a></li> 
              </ul>

              <div className='font-bold text-xl'>GA5: Legal Committee</div>
              <ul>
                <li><a href="https://drive.google.com/file/d/1zgNEUA8FAk-olOjdd1uoBNoESn9Lr6yN/view?usp=sharing" target="_blank">1-Addressing legal challenges related to sovereignty and territorial disputes</a></li>
                <li><a href="https://drive.google.com/file/d/10vf3YuxuvnduSoqNbcJFlmzZUCCDJNSQ/view?usp=sharing" target="_blank">2-Enhancing legal mechanisms for protecting civilian populations in warfare</a></li>
                <li><a href="https://drive.google.com/file/d/1PCCeRyF8p2eZA2JviigobJOOa2ofW1Bg/view?usp=sharing" target="_blank">3-Increasing collaboration among regional organizations and the United Nations</a></li>
              </ul>

              <div className='font-bold text-xl'>SDC: Sustainable Development Committee</div>
              <ul>
                <li><a href="https://drive.google.com/file/d/1AsuPwEIsYjU52ItXvPxnswFq-Fkcy1QB/view?usp=sharing" target="_blank">1-Pioneering ways to promote social and economic equality in conflict-affected states</a></li>
                <li><a href="https://drive.google.com/file/d/10ctlDN3Zct_zQXcNc04cikxDmuC1b8OP/view?usp=sharing" target="_blank">2-Promoting sustainable development goals (SDGs) via multi-stakeholder
                collaboration</a></li>
                <li><a href="https://drive.google.com/file/d/1uN1PbCmZTh99PWUO28krwaWv-0A6JnQ5/view?usp=sharing" target="_blank">3-Enhancing sustainable development through the utilization of information and communications technologies (ICTs)</a></li>
              </ul>

              <div className='font-bold text-xl'>SPC: Special Conference on Immigration and Refugee Crises</div>
              <ul>
                  <li><a href="https://drive.google.com/file/d/1SbpDi7XAsv7xz2kiX8uMY4AYOpmKwM3L/view?usp=sharing" target="_blank">1-Improving access to education and healthcare for displaced people</a></li>
                  <li><a href="https://drive.google.com/file/d/1nQDWF7HLu11j5H7uzwdNDTPc9wfWHPXW/view?usp=sharing" target="_blank">2-Preventing discrimination and xenophobia against migrants and refugees</a></li>
                  <li><a href="https://drive.google.com/file/d/1wFkQ4o_bkT12ZRAXXoPHHdcQjrARifJK/view?usp=sharing" target="_blank">3-Integrating refugees while enhancing their economic opportunities</a></li>
              </ul>

              <div className='font-bold text-xl'>SC: Security Council</div>
              <ul>
              <li><a href="https://drive.google.com/file/d/1RCTOCJli7OYE4JQETO2BW-_Y_gH4hOdH/view?usp=sharing" target="_blank">1-Addressing the role of veto power in hindering conflict resolution</a></li>
              <li><a href="https://drive.google.com/file/d/18GFW9gJEeS_lxOGDHDiVsJC4OOGnnoca/view?usp=sharing" target="_blank">2-Addressing methods for harmonious discussion and long-term administration of South China Sea territorial disputes</a></li>
              <li><a href="https://drive.google.com/file/d/1-LNKpRgmdUfSAvdrAP9xcP84huKc0CMm/view?usp=sharing" target="_blank">3-The aftermath of the political instability in Haiti</a></li>
              </ul>

              <div className='font-bold text-xl'>Economic and Social Council (ECOSOC)</div>
              <ul>
                <li><a href="https://drive.google.com/file/d/1WZ7Jx31eMw7fTblSeATdspe9RzdAcH9-/view?usp=sharing" target="_blank">1-Exploring transparent and sustainable job creation initiatives that protect human rights and promote long-term growth</a></li>
                <li><a href="https://drive.google.com/file/d/14-VikpdcM5wGChNDI2OZmJUvY8weACsa/view?usp=sharing" target="_blank">2-Tackling trade inequalities and supporting Least Developed Countries (LDCs) to integrate into global markets</a></li>
                <li><a href="https://drive.google.com/file/d/1tivQsVLzkF2UnSF56y-gt2FAfxzK_iXu/view?usp=sharing" target="_blank">3-Integrating refugees while enhancing their economic opportunities</a></li>
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
                <li><a href="https://drive.google.com/file/d/1YiR9PJ7OGi3MaIKMAK90pZApqn0qchUz/view?usp=sharing" target='_blank'>2-Regulating the use of emerging technologies, such as artificial intelligence and cyber tools, in nuclear warfare</a></li>
                <li><a href="https://drive.google.com/file/d/1YiR9PJ7OGi3MaIKMAK90pZApqn0qchUz/view?usp=sharing" target='_blank'>2-La régulation de l'utilisation des technologies émergentes, telles que l’intelligence artificielle et les outils cybernétiques, dans la guerre nucléaire</a></li>
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
