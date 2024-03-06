import React from "react";
import Scene from "./Scene";

export default function HomeTop() {
  return (
    <div className="home-top h-screen bg-black w-screen">
      <Scene />
      <div className="home-top-bastedape-text-wrapper flex flex-col gap-y-3 items-center justify-center absolute left-0 right-0 bottom-0 top-0">
        <div className="home-top-blasted-text text-[#fed601] md:text-[78px] text-5xl not-italic tracking-[7px] font-normal text-center">
          Blasted
        </div>
        <div className="home-top-ape-text text-white md:text-[78px] text-5xl not-italic font-normal tracking-[7px] text-center">
          Ape
        </div>

        {/* <div className="home-top-desc-p1 text-white font-poppins md:text-4xl text-2xl leading-[normal] mt-6">
          The first Community driven BLAST coin.
        </div> */}
      </div>
    </div>
  );
}
