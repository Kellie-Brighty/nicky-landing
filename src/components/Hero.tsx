import { BsTelegram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { PrimaryButton } from "./Button";
import NickyHero from "../assets/nicky-hero.gif";
import NickyHeroMobile from "../assets/nicky-hero-mobile.gif";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-black via-pink-700 to-purple-900 h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-[100px]">
      <div className="text-center md:text-left mt-[200px] md:mt-0">
        <p className="text-white text-[30px] md:text-[34px] lg:text-[45px]">
          Hi! I'm <i>Nicky</i>
          <br />
          Your AI Agent and Trading Partner
        </p>
        <p className="text-white text-lg lg:text-[20px] font-thin w-full mx-auto mt-4">
          Let's navigate the world of Meme tokens together, safely and smartly.
        </p>

        <div className="flex justify-center md:justify-start mt-8 space-x-4">
          <a
            href="https://t.me/nickyaioneth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram className="text-white text-3xl lg:text-[40px] cursor-pointer" />
          </a>
          <a
            href="http://x.com/nickyaionerc20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="text-white text-3xl lg:text-[40px] cursor-pointer" />
          </a>
          <a
            href="https://dapp.nickyai.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton text="Chat with me" onClick={() => null} />
          </a>
        </div>
      </div>

      <div className="hidden md:flex mt-8 md:mt-0">
        <img
          src={NickyHero}
          alt=""
          className="rounded-full lg:w-[1200px] md:w-auto"
        />
      </div>
      <div className="flex md:hidden mt-8 md:mt-0">
        <img
          src={NickyHeroMobile}
          alt=""
          className="rounded-full lg:w-[1200px] md:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
