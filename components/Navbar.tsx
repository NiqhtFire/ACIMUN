"use client"
import { Drawer } from '@mui/material';
import { link } from 'fs';
import Link from 'next/link'
import { useState } from 'react';


const navs = [
    {title: "Home", route: "/"},
    {title: "About", route: "/"},
    {title: "Fees", route: "/fee"},
    {title: "News", route: "/news"},
    {title: "Register", route: "/register"},
    
]







const Navbar = ( ) => {
    const [open, setOpen] = useState(false);
    return (
        <header className="header_section">
        <div className="md:mx-[110px]">
        
          <nav className="navbar  custom_nav-container flex justify-between mt-[40px] ">
            <a className="navbar-brand gap-3" href="/">
              <div className=''>
               <img className="object-scale-down h-[70px] w-[70px]"src="https://www.acimun.com/wp-content/uploads/2022/10/f68d6cb0-e8e8-4bbd-95c9-af49ed34eae6.png" alt="" />
              </div>
             
              <div className='navbar-brand'>
                <span>ACIMUN</span>
              </div>
            </a>
            <div>
            <button
              className="navbar-toggler md:hidden"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
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
            <div className=" md:block hidden  " id="navbarSupportedContent">
              <div className="d-flex ml-auto flex-row flex-lg-row align-items-center ">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link className="nav-link" href="/">
                      {" "}
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
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
                    <a className="nav-link" href="/">
                      {" "}
                      News{" "}
                    </a>
                  </li>

                
                  <li className="nav-item ">
                    <a className="nav-link  " href="/register">
                      Register{" "}
                    </a>
                  </li>
       
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )





}
export default Navbar;