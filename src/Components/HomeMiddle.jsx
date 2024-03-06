import React from "react";

export default function HomeMiddle() {
  return (
    <div className='home-middle w-screen h-full bg-[#000000] md:-mt-[7%] -mt-[20%] pt-[180px] bg-cover bg-center relative'>
      <img
        src='/img/mid-bg.png'
        className='h-full  absolute top-0 left-0 z-[0] object-cover md:object-fill'
      />
      <div className='home-middle-header-wrapper flex items-center justify-center z-[1]'>
        <img src='/img/blasted-ape-token.svg' />
        <div className='home-middle-header z-[1] text-[#fed501] md:text-[64px] text-4xl not-italic font-bold leading-[normal] rubik'>
          Big Dreams
        </div>
        <img src='/img/blasted-ape-token.svg' />
      </div>
      <div className='home-middle-desc-wrapper z-[1] flex items-center justify-center flex-col'>
        <div className='text-[#898584] z-[1] text-center md:text-xl text-sm not-italic font-medium font-poppins leading-[normal] md:w-[60%] w-[90%]'>
          Welcome fellow apes… welcome to the future of Ethereum.Brought to you
          by the wild minds at BLAST and $BAPE. Forget everything you thought
          you knew about the game. Here, your contribution earns you $BAPE. Your
          voice is heard with $BAPE, your input matters. The moment for next-gen
          ETH tokens is here. Ape into $BAPE and grab your bananas as we ascend
          further into the crypto jungle.
        </div>
      </div>
      <div className='home-middle-pcr-wrapper z-[1] flex justify-center flex-wrap '>
        <div className='home-middle-pcr flex justify-center mt-20  z-[1] flex-col items-center gap-y-3 md:flex-row w-full'>
          <div className='home-middle-pcr-post w-[50%] md:w-[25vw] z-[1] md:h-[108px] h-28 shrink-0 justify-center items-center flex text-[#fed501] md:text-[32px] text-lg not-italic font-medium leading-[normal] rounded-[10px] border-t-4 border-t-[#f3d126] border-solid bg-gradient-custom'>
            POST
          </div>
          <img
            src='/img/home-middle-arrow.svg'
            className='rotate-[90deg] md:rotate-0 w-12'
          />
          <div className='home-middle-pcr-captivate w-[50%] md:w-[25vw] md:h-[108px] h-28 shrink-0 justify-center items-center flex text-[#fed501] md:text-[32px] text-lg not-italic font-medium leading-[normal] rounded-[10px] border-t-4 border-t-[#f3d126] border-solid bg-gradient-custom'>
            CAPTIVATE
          </div>
          <img
            src='/img/home-middle-arrow.svg'
            className='rotate-[90deg] md:rotate-0 w-12'
          />
          <div className='home-middle-pcr-reward w-[50%] md:w-[25vw] md:h-[108px] h-28 shrink-0 justify-center items-center flex text-[#fed501] md:text-[32px] text-lg not-italic font-medium leading-[normal] rounded-[10px] border-t-4 border-t-[#f3d126] border-solid bg-gradient-custom'>
            REWARD
          </div>
        </div>
      </div>
      <div className='home-middle-howto-wrapper flex justify-center flex-col items-center gap-[33px] md:mt-[74px] mt-10'>
        <div className=' w-[80vw] md:w-[518px] h-[82px] shrink-0 text-[#fed501] md:text-[32px] text-2xl not-italic font-medium leading-[normal] flex justify-center items-center rounded-[50px] border-t-4 border-t-[#f3d126] border-solid bg-gradient-custom'>
          How to Earn your BANANAS
        </div>

        <div className='home-middle-howto-desc-bubble relative'>
          <img src='/img/home-middle-bubble.svg' />
          <div className='home-middle-howto-desc-bubble-text-wrapper flex flex-col justify-center items-center absolute left-[5vw] md:left-[47px] md:top-[40px] top-8'>
            <div className=' text-[#a07929] md:text-[18px] text-[11px] md:w-[90%] w-[80%] not-italic font-poppins font-semibold leading-[normal]'>
              Regular $BAPE drops to apes engaging in BLAST and $BAPE X
              (Twitter) posts. Every X post can be rewarded with $BAPE. We’re
              for the community, and we will be heard.
            </div>
          </div>
        </div>
        <div className='h-[80vh] sm:h-[50vh] md:h-[35vh] xl:h-[55vh] 2xl:h-[30vh] w-5 '></div>
      </div>
    </div>
  );
}
