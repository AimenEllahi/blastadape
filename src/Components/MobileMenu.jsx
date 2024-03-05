// MobileMenu.js
import React from "react";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed z-[100] text-white right-0 transition-all duration-500 ease-in-out bg-[#000] border-l border-yellow-400 w-[60vw] h-screen rounded shadow ${
        isMenuOpen ? "translate-x-0" : "translate-x-[100%]"
      }`}
    >
      <div
        className="absolute top-4 right-4 text-white p-4 cursor-pointer border border-white rounded-full w-8 h-8 flex justify-center items-center hover:text-yellow-300 hover:border-yellow-300 transition duration-300"
        onClick={toggleMenu}
      >
        X
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full px-5 ">
          <div
            className="mt-4 hover:text-yellow-400 transition-all duration-300"
            // onClick={() => goToSection("home", true)}
            // className={`md:block hidden md:w-1/4 w-full px-4 py-1 hover:border cursor-pointer hover:text-[#fff700] hover:border-[#fff700] hover:rounded-tl-full hover:rounded-tr-full hover:rounded-bl-full transition duration-300 ${
            //   activeSection === "home"
            //     ? "border border-[#fff700] text-[#fff700] rounded-tl-full rounded-tr-full rounded-bl-full"
            //     : "border-transparent text-white"
            // }`}
          >
            Twitter
          </div>
          <hr className="border border-yellow-300 mt-4" />
          <div
            className="mt-4 hover:text-yellow-400 transition-all duration-300"
            // onClick={() => goToSection("about", true)}
            // className={`md:block hidden mt-4 md:w-1/4 w-full px-4 py-1 hover:border cursor-pointer hover:text-[#fff700] hover:border-[#fff700] hover:rounded-tl-full hover:rounded-tr-full hover:rounded-bl-full transition duration-300 ${
            //   activeSection === "about"
            //     ? "border border-[#fff700] text-[#fff700] rounded-tl-full rounded-tr-full rounded-bl-full"
            //     : "border-transparent text-white"
            // }`}
          >
            Telegram
          </div>
          <hr className="border border-yellow-300 mt-4" />
          <div
            className="mt-4 hover:text-yellow-400 transition-all duration-300"
            // onClick={() => goToSection("store", true)}
            // className={`md:block hidden mt-4 md:w-1/4 w-full px-4 py-1 hover:border cursor-pointer hover:text-[#fff700] hover:border-[#fff700] hover:rounded-tl-full hover:rounded-tr-full hover:rounded-bl-full transition duration-300 ${
            //   activeSection === "store"
            //     ? "border border-[#fff700] text-[#fff700] rounded-tl-full rounded-tr-full rounded-bl-full"
            //     : "border-transparent text-white"
            // }`}
          >
            Chart
          </div>
          <hr className="border border-yellow-300 mt-4" />
          <div
            // onClick={() => goToSection("store", true)}
            // className={`md:block hidden mt-4 md:w-1/4 w-full px-4 py-1 hover:border cursor-pointer hover:text-[#fff700] hover:border-[#fff700] hover:rounded-tl-full hover:rounded-tr-full hover:rounded-bl-full transition duration-300 ${
            //   activeSection === "store"
            //     ? "border border-[#fff700] text-[#fff700] rounded-tl-full rounded-tr-full rounded-bl-full"
            //     : "border-transparent text-white"
            // }`}
            className="mt-4 hover:text-yellow-400 transition-all duration-300"
          >
            Contract
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
