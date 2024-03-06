import React from "react";

export default function HomeMiddle() {
  return (
    <div className="home-middle w-screen h-[1514px] bg-[#000000] md:-mt-[7%] -mt-[20%] pt-[180px] bg-cover bg-center relative">
      <div className="home-middle-header-wrapper flex items-center justify-center">
        <img src="/img/blasted-ape-token.svg" />
        <div className="home-middle-header text-[#fed501] md:text-[64px] text-4xl not-italic font-bold leading-[normal]">
          Big Dreams
        </div>
        <img src="/img/blasted-ape-token.svg" />
      </div>
      <div className="home-middle-desc-wrapper flex items-center justify-center flex-col">
        <div className="home-middle-desc">
          Welcome fellow apes… welcome to the future of Ethereum.Brought to you
          by the wild minds at BLAST and $BAPE.
        </div>
        <div className="home-middle-desc">
          Forget everything you thought you knew about the game. Here, your
          contribution earns you $BAPE.
        </div>
        <div className="home-middle-desc">
          Your voice is heard with $BAPE, your input matters. The moment for
          next-gen ETH tokens is here.
        </div>
        <div className="home-middle-desc">
          Ape into $BAPE and grab your bananas as we ascend further into the
          crypto jungle.
        </div>
      </div>
      <div className="home-middle-pcr-wrapper flex justify-center flex-wrap">
        <div className="home-middle-pcr flex justify-center mt-10 ">
          <div className="home-middle-pcr-post w-[40%] md:w-[25vw] h-[108px] shrink-0 justify-center items-center flex text-[#fed501] md:text-[32px] text-lg not-italic font-medium leading-[normal] rounded-[10px] border-t-4 border-t-[#f3d126] border-solid">
            POST
          </div>
          <img src="/img/home-middle-arrow.svg" />
          <div className="home-middle-pcr-captivate w-[40%] md:w-[25vw] h-[108px] shrink-0 justify-center items-center flex text-[#fed501] md:text-[32px] text-lg not-italic font-medium leading-[normal] rounded-[10px] border-t-4 border-t-[#f3d126] border-solid">
            CAPTIVATE
          </div>
          <img src="/img/home-middle-arrow.svg" />
          <div className="home-middle-pcr-reward w-[40%] md:w-[25vw] h-[108px] shrink-0 justify-center items-center flex text-[#fed501] md:text-[32px] text-lg not-italic font-medium leading-[normal] rounded-[10px] border-t-4 border-t-[#f3d126] border-solid">
            REWARD
          </div>
        </div>
      </div>
      <div className="home-middle-howto-wrapper flex justify-center flex-col items-center gap-[33px] mt-[74px]">
        <div className="home-middle-howto w-[80vw] md:w-[518px] h-[82px] shrink-0 text-[#fed501] md:text-[32px] text-3xl not-italic font-medium leading-[normal] flex justify-center items-center rounded-[50px] border-t-4 border-t-[#f3d126] border-solid">
          How to Earn your BANANAS
        </div>
        <div className="home-middle-howto-desc-bubble relative">
          <img src="/img/home-middle-bubble.svg" />
          <div className="home-middle-howto-desc-bubble-text-wrapper flex flex-col justify-center items-center absolute left-[5vw] md:left-[67px] top-[20px]">
            <div className="home-middle-howto-desc-bubble-text text-[#a07929] md:text-[22px] text-xl not-italic font-semibold leading-[normal]">
              Regular $BAPE drops to apes
            </div>
            <div className="home-middle-howto-desc-bubble-text text-[#a07929] md:text-[22px] text-xl not-italic font-semibold leading-[normal]">
              engaging in BLAST and $BAPE X (Twitter) posts.
            </div>
            <div className="home-middle-howto-desc-bubble-text text-[#a07929] md:text-[22px] text-xl not-italic font-semibold leading-[normal]">
              Every X post can be rewarded with $BAPE.
            </div>
            <div className="home-middle-howto-desc-bubble-text text-[#a07929] md:text-[22px] text-xl not-italic font-semibold leading-[normal]">
              We’re for the community, and we will be heard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
