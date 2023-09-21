"use client"
import { Drawer } from '@mui/material';
import { red } from '@mui/material/colors';
import { link } from 'fs';
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react';

import { Router, useLocation } from 'react-router-dom';
const navs = [
    {title: "Home", route: "/"},
    {title: "About", route: "/"},
    {title: "Fees", route: "/fee"},
    {title: "News", route: "/news"},
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
      console.log("adabs")
      const listen = () => {
        const nav = navRef.current;
        console.log("adfasdsas", !!nav, document.body.scrollTop)
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
            <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo"/>
            </div>
            <div className="menu">
            <h4>Menu</h4>
            </div>
        </div>
		<nav ref={navRef} className={' justify-between w-full text-nowrap hidden md:flex' + (props.isBlacked ? ' blacked' : '') }>
    <a className="navbar-brand gap-3" href="/">
              <div className=''>
               <img className="object-scale-down h-[55px] w-[55px] min-h-[55px] min-w-[55px]" src="https://www.acimun.com/wp-content/uploads/2022/10/f68d6cb0-e8e8-4bbd-95c9-af49ed34eae6.png" alt="" />
              </div>
             
              <div className='navbar-brand navbar-sd text-2xl'>
                <span>ACIMUN</span>
               
              </div>
              <span className='font-sans text-[30px] font-italic'>2024</span>
              
            </a>

         <ul className='md:ml-[50px] lg:ml-[520px]'>
          
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