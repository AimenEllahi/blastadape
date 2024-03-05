import React from "react";
import Scene from "./Scene";

export default function Home() {
  return (
    <div className="home-wrapper w-screen h-full">
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
            <div className="home-top-desc-p1 text-white md:text-4xl text-5xl not-italic font-semibold leading-[normal]">
              The first Community driven
            </div>
            <span> </span>
            <div className="home-top-desc-p2 text-[#fed501] md:text-4xl text-5xl not-italic font-black leading-[normal]">
              BLAST coin.
            </div>
          </div>
        </div>
      </div>
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
            Welcome fellow apes… welcome to the future of Ethereum.Brought to
            you by the wild minds at BLAST and $BAPE.
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
      <div className="home-bottom w-full h-[2258px] relative -mt-20 pt-[140px]">
        <div className="home-bottom-header text-[#fed501] text-[64px] not-italic font-bold leading-[normal] flex items-center justify-center">
          Tokenomics
        </div>
        <div className="home-bottom-header-desc flex flex-col md:flex-row gap-1 justify-center items-center mt-[33px]">
          <div className="home-bottom-header-desc-text1 text-[#fcd13b] text-xl not-italic font-medium leading-[normal]">
            $BAPE
          </div>
          <div className="home-bottom-header-desc-text2 text-[#909090] px-4 md:p-0 text-xl not-italic font-medium leading-[normal]">
            is one big airdrop for Blast depositors, contributors and apes that
            can influence.
          </div>
        </div>
        <div>
          <div className="home-bottom-tbl flex flex-col md:flex-row gap-[70px] items-center justify-center mt-20">
            <div className="home-bottom-tbl-treasury flex items-center flex-col w-[322px] h-[197px] shrink-0 rounded-[10px] border-t-4 border-t-[#f3d126] border-solid">
              <div className="home-bottom-tbl-treasury-headerbox w-[228px] h-[50px] shrink-0 shadow-[0px_4px_26.7px_0px_rgba(243,165,2,0.25)] flex items-center justify-center text-[#3f3511] text-[32px] not-italic font-bold leading-[normal] -mt-6 rounded-[10px] border-t-[#fcd13b] border-t border-solid">
                TREASURY
              </div>
              <div className="home-bottom-tbl-treasury-desc-wrapper flex justify-center items-center flex-col mt-[18px]">
                <div className="home-bottom-tbl-treasury-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Contributors, partnerships
                </div>
                <div className="home-bottom-tbl-treasury-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  and marketing
                </div>
                <div className="home-bottom-tbl-treasury-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Centralized Exchange
                </div>
                <div className="home-bottom-tbl-treasury-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Deposit
                </div>
              </div>
            </div>
            <div className="home-bottom-tbl-bapers flex items-center flex-col w-[322px] h-[197px] shrink-0 rounded-[10px] border-t-4 border-t-[#f3d126] border-solid">
              <div className="home-bottom-tbl-bapers-headerbox w-[228px] h-[50px] shrink-0 shadow-[0px_4px_26.7px_0px_rgba(243,165,2,0.25)] flex items-center justify-center text-[#3f3511] text-[32px] not-italic font-bold leading-[normal] -mt-6 rounded-[10px] border-t-[#fcd13b] border-t border-solid">
                BAPERS
              </div>
              <div className="home-bottom-tbl-bapers-desc-wrapper flex justify-center items-center flex-col mt-[30px]">
                <div className="home-bottom-tbl-bapers-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Banana Reward program
                </div>
                <div className="home-bottom-tbl-bapers-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Referral boosts for the
                </div>
                <div className="home-bottom-tbl-bapers-desc">
                  $BAPE community
                </div>
              </div>
            </div>
            <div className="home-bottom-tbl-liquidity flex items-center flex-col w-[322px] h-[197px] shrink-0 rounded-[10px] border-t-4 border-t-[#f3d126] border-solid">
              <div className="home-bottom-tbl-liquidity-headerbox w-[228px] h-[50px] shrink-0 shadow-[0px_4px_26.7px_0px_rgba(243,165,2,0.25)] flex items-center justify-center text-[#3f3511] text-[32px] not-italic font-bold leading-[normal] -mt-6 rounded-[10px] border-t-[#fcd13b] border-t border-solid">
                LIQUIDITY
              </div>
              <div className="home-bottom-tbl-liquidity-desc-wrapper flex justify-center items-center flex-col mt-10">
                <div className="home-bottom-tbl-liquidity-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Initial Liquidity Pool
                </div>
                <div className="home-bottom-tbl-liquidity-desc text-[#fed501] text-center text-2xl not-italic font-medium leading-[normal]">
                  Reserved for CEX
                </div>
              </div>
            </div>
          </div>
          <div className="home-bottom-desc-wrapper  flex flex-col mt-44 md:mt-20">
            <div className="home-bottom-desc text-[#b5b5b5] text-center text-2xl not-italic font-normal leading-[normal]">
              From the get-go, we’re tossing rewards to all members of the
              $BAPErs
            </div>
            <div className="home-bottom-desc text-[#b5b5b5] text-center text-2xl not-italic font-normal leading-[normal]">
              Big shoutout to our heavy hitters and masterminds. We’ve got ways
              for everyone to snag some $BAPE.
            </div>
            <div className="home-bottom-desc text-[#b5b5b5] text-center text-2xl not-italic font-normal leading-[normal]">
              This setup helps us keep the spotlight on $BAPE and reserve
              bananas and $BAPE for Blasted Ape’s future endeavours.
            </div>
          </div>
        </div>
        <div className="home-bottom-header2-wrapper flex justify-center items-center mt-[195px]">
          <div className="home-bottom-header2-t1 text-[#e4ff3c] md:text-8xl text-5xl not-italic font-extrabold leading-[normal]">
            EARN
          </div>
          <div className="home-bottom-header2-t2 text-[#f3ce25] md:text-8xl text-5xl not-italic font-extrabold leading-[normal] ml-[15px]">
            $
          </div>
          <div className="home-bottom-header2-t3 text-white md:text-8xl text-5xl not-italic font-extrabold leading-[normal]">
            BAPE
          </div>
        </div>
        <div className="home-bottom-header2-desc flex justify-center items-center text-white md:text-2xl text-[13px] not-italic font-medium leading-[normal]">
          Every fellow ape deserves to be rewarded with $BAPE, here’s how:
        </div>
        <div className="home-bottom-content gap-[58px] items-center justify-center flex flex-col mt-[57px]">
          <div className="home-bottom-content-box md:w-[600px] w-[350px]  h-[71px] shrink-0 justify-center items-center flex text-white text-2xl not-italic font-medium leading-[normal] relative rounded-[20px] border-t-2 border-t-[#f3d026] border-solid">
            <div className="home-bottom-content-box-polygon w-[60px] h-[66px] absolute top-[-23px] justify-center items-center flex text-white text-2xl not-italic font-medium leading-[normal] -left-5">
              1
            </div>
            <div className="home-bottom-content-box-text text-white text-2xl not-italic font-medium leading-[normal]">
              Create content on Blasted Apes
            </div>
          </div>
          <div className="home-bottom-content-box md:w-[600px] w-[350px] h-[71px] shrink-0 justify-center items-center flex text-white text-2xl not-italic font-medium leading-[normal] relative rounded-[20px] border-t-2 border-t-[#f3d026] border-solid">
            <div className="home-bottom-content-box-polygon w-[60px] h-[66px] absolute top-[-23px] justify-center items-center flex text-white text-2xl not-italic font-medium leading-[normal] -left-5">
              2
            </div>
            <div className="home-bottom-content-box-text text-white text-2xl not-italic font-medium leading-[normal]">
              Invite friends through the referral system
            </div>
          </div>
          <div className="home-bottom-content-box md:w-[600px] w-[350px] h-[71px] shrink-0 justify-center items-center flex text-white text-2xl not-italic font-medium leading-[normal] relative rounded-[20px] border-t-2 border-t-[#f3d026] border-solid">
            <div className="home-bottom-content-box-polygon w-[60px] h-[66px] absolute top-[-23px] justify-center items-center flex text-white text-2xl not-italic font-medium leading-[normal] -left-5">
              3
            </div>
            <div className="home-bottom-content-box-text text-white text-2xl not-italic font-medium leading-[normal]">
              Claim Airdrop for blast depositors.
            </div>
          </div>
        </div>
        <div className="home-bottom-treasure flex justify-center items-center">
          <img src="/img/home-bottom-treasure.svg" />
        </div>
      </div>
    </div>
  );
}
