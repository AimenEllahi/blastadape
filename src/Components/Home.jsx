import React from "react";

import HomeTop from "./HomeTop";
import HomeBottom from "./HomeBottom";
import HomeMiddle from "./HomeMiddle";

export default function Home() {
  return (
    <div className="home-wrapper w-screen h-full ">
      <HomeTop />
      <HomeMiddle />
      <HomeBottom />
    </div>
  );
}
