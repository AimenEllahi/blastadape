import React from "react";
import Scene from "./Scene";

export default function HomeTop() {
  return (
    <div className="home-top h-screen bg-black w-screen">
      <Scene />
      <div className="home-top-bastedape-text-wrapper flex flex-col items-center absolute md:left-[20%] left-[6%] md:top-[20%] top-[30%]">
        <div className="home-top-blasted-text text-[#fed601] md:text-[78px] text-5xl not-italic font-normal leading-[normal] tracking-[7px]">
          Blasted
        </div>
        <div className="home-top-ape-text text-white md:text-[78px] text-5xl not-italic font-normal leading-[normal] tracking-[7px]">
          Ape
        </div>
        <div className="home-top-desc-wrapper">
          <div className="home-top-desc-p1 text-white font-poppins md:text-4xl text-5xl  leading-[normal]">
            The first Community driven
          </div>
          <span> </span>
          <div className="home-top-desc-p2 text-[#fed501] md:text-4xl text-5xl not-italic font-black leading-[normal]">
            BLAST coin.
          </div>
        </div>
      </div>
    </div>
  );
}
