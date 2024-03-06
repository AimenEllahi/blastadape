import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth < 768;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className='nav-wrapper fixed flex justify-between flex-row h-20 md:h-20 w-full top-0 left-0 z-50 border-b-2 border-yellow-400 bg-black items-center p-4 md:px-10'>
        <div className='nav-left'>
          <a href='/'>
            <img
              className='nav-logo h-4 md:h-auto'
              src='/img/nav-logo.svg'
              alt='Logo'
            />
          </a>
        </div>
        <div className='nav-middle hidden md:flex flex-row md:justify-center md:gap-8 flex-1'>
          <a href='/'>
            <div className='nav-twitter-wrapper flex flex-col items-center gap-2 '>
              <div className='nav-twitter-barline w-12 h-1 bg-gray-800 '></div>
              <div className='nav-twitter-text text-white font-medium !text-lg !font-poppins'>
                Twitter
              </div>
            </div>
          </a>
          <a href='/'>
            <div className='nav-telegram-wrapper flex flex-col items-center gap-2'>
              <div className='nav-telegram-barline w-12 h-1 bg-gray-800'></div>
              <div className='nav-telegram-text text-white font-medium !text-lg !font-poppins'>
                Telegram
              </div>
            </div>
          </a>
          <a href='/'>
            <div className='nav-chart-wrapper flex flex-col items-center gap-2'>
              <div className='nav-chart-barline w-12 h-1 bg-gray-800'></div>
              <div className='nav-chart-text text-white font-medium !text-lg !font-poppins'>
                Chart
              </div>
            </div>
          </a>
          <a href='/'>
            <div className='nav-contract-wrapper flex flex-col items-center gap-2'>
              <div className='nav-contract-barline w-12 h-1 bg-gray-800'></div>
              <div className='nav-contract-text text-white font-medium !text-lg !font-poppins'>
                Contract
              </div>
            </div>
          </a>
        </div>
        <div className='nav-right flex gap-x-3'>
          <a href='/'>
            <div className='nav-buy-btn w-32 h-10 rounded-md border bg-[#FE99016B] border-[#FDAB33]  text-[#FED601] flex justify-center items-center text-lg font-semibold'>
              Buy Now
            </div>
          </a>
          <div
            className='bg-yellow-400 md:hidden block p-4 h-10 rounded-lg text-black'
            onClick={toggleMenu}
          >
            ...
          </div>
        </div>
      </div>
      {isMobile && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          // activeSection={activeSection}
          // goToSection={goToSection}
        />
      )}
    </>
  );
}
