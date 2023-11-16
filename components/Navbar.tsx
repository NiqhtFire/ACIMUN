"use client"
import { Drawer } from '@mui/material';
import { red } from '@mui/material/colors';
import { link } from 'fs';
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';

import { Router, useLocation } from 'react-router-dom';
const navs = [
    {title: "Home", route: "/"},
    {title: "Venue", route: "/venue"},
    {title: "Conference Details", route: "/fee"},
    {title: "Register", route: "/register"},
  
    
]

interface Props{
  isBlacked?:boolean

}





const Navbar = ( props:Props) => {
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    console.log("ads")
    useEffect(() => {
   
      const listen = () => {
        const nav = navRef.current;
        
        if (!nav) return;
        if (document.documentElement.scrollTop > 40) {
          nav.classList.add("black");
        } else {
          nav.classList.remove("black");
        }
      }
      window.addEventListener("scroll", listen)
      listen();
      return () => {
        window.removeEventListener("scroll", listen)
      }
    }, []);

    return (
       <>
     
       <div className="responsive-bar">
        <div className="logo">
           
            </div>
            <div className="text-white text-right mt-2">
            <h4>ACIMUN</h4>
            </div>
        </div>
        <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
      rel="stylesheet"
    />

      

        <div>
        <button
              className="navbar-toggler md:hidden responsive-bar "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupporte dContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
             
            >
                <div id='menua' className='flex justify-start'>
                <div id="menuToggle">
                    <input type="checkbox" onChange={(e ) => { setOpen(e.target.checked) }} checked={open}/>
                        <span></span>
                        <span></span>
                        <span></span>
    
                </div>
            
                </div>
               
            </button>
            </div>
           
            <div>
            <Drawer
      anchor= "right"
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
            <div className='flex flex-col gap-4 py-2 px-4 text-lg'>
                {navs.map((nav, i) => {
                        return(
                            <Link key={i} href = {nav.route}>{nav.title}</Link>
                        )
                })}
            </div>
    </Drawer>
        </div>
		<nav ref={navRef} className={' justify-between w-full text-nowrap hidden md:flex' + (props.isBlacked ? ' blacked' : '') }>
    <a className="navbar-brand gap-3" href="/">
              <div className=''>
               <img className="object-scale-down h-[55px] w-[55px] min-h-[55px] min-w-[55px]" src="/images/munlogo.png" alt="" />
              </div>
             
              <div className='navbar-brand navbar-sd text-2xl'>
                <span>ACIMUN &apos;24</span>
               
              </div>
           
              
            </a>

         <ul className='md:ml-[50px]  sm:ml-[20px] lg:ml-[460px]'>
          
         {navs.map((nav, i) => {
                        return(
                          <li key={i}><Link href={nav.route}>{nav.title}</Link></li>
                        )
                })}
            </ul>
           
        </nav>
       </>
    )





}
export default Navbar;