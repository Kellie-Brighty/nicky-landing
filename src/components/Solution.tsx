import { PrimaryButton } from "./Button";
import Coin from "../assets/coin.svg";
import Security from "../assets/security.svg";
import RealTime from "../assets/real-time.svg";

const Solution = () => {
  return (
    <div className="bg-gradient-to-r from-black via-pink-700 to-black h-auto px-6 py-10 md:px-[100px] md:py-[100px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-white text-[24px] md:text-[40px] w-full md:w-[800px] mb-6 md:mb-0">
          Solution for buying, trading, and investing in digital assets
        </p>

        <div className="space-y-4 w-full md:w-[400px]">
          <p className="text-white text-lg md:text-[20px] font-thin">
            Forchains helps you guide your saving activity with secured and
            easily
          </p>
          <div>
            <a
              href="https://nicky-ai.web.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PrimaryButton text="Get Started" onClick={() => null} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-10 md:mt-20 space-y-6 md:space-y-0 md:space-x-6">
        <div className="bg-[#191919] rounded-lg p-6 text-white h-auto md:h-[300px] w-full md:w-auto">
          <img src={Coin} className="mx-auto mb-4" />
          <p className="text-[20px] md:text-[30px] text-center">Meme Tokens</p>
          <p className="text-base md:text-[16px] font-thin text-center">
            Nicky AI trades a wide range of Meme tokens across a blockchain
          </p>
        </div>
        <div className="bg-[#191919] rounded-lg p-6 text-white h-auto md:h-[300px] w-full md:w-auto">
          <img src={Security} className="mx-auto mb-4" />
          <p className="text-[20px] md:text-[30px] text-center">
            Enterprise grade security
          </p>
          <p className="text-base md:text-[16px] font-thin text-center">
            With our enterprise-grade security infrastructure, Nicky prioritizes
            the protection
          </p>
        </div>
        <div className="bg-[#191919] rounded-lg p-6 text-white h-auto md:h-[300px] w-full md:w-auto">
          <img src={RealTime} className="mx-auto mb-4" />
          <p className="text-[20px] md:text-[30px] text-center">
            Real time trading and chat
          </p>
          <p className="text-base md:text-[16px] font-thin text-center">
            Nicky AI trades a wide range of Meme tokens across a blockchain
          </p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
