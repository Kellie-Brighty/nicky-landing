import { BsTelegram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { PrimaryButton } from "./Button";
import NickyHero from "../assets/nicky-hero.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-black via-pink-700 to-purple-900 h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-[100px]">
      <div className="text-center md:text-left mt-[20px] md:mt-0">
        <p className="text-white text-[30px] md:text-[34px] lg:text-[64px]">
          Hi! I'm <i>Nicky</i>
          <br />
          Your AI Agent and Trading Partner
        </p>
        <p className="text-white text-lg lg:text-[20px] font-thin w-full mx-auto mt-4">
          Let's navigate the world of Meme tokens together, safely and smartly.
        </p>

        <div className="flex justify-center md:justify-start mt-8 space-x-4">
          <BsTelegram className="text-white text-3xl lg:text-[40px] cursor-pointer" />
          <BsTwitterX className="text-white text-3xl lg:text-[40px] cursor-pointer" />
          <a
            href="https://nicky-ai.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton text="Chat with me" onClick={() => null} />
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <img
          src={NickyHero}
          alt=""
          className="rounded-full w-[300px] md:w-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
