import { BsTelegram, BsTwitterX } from "react-icons/bs";
import { PrimaryButton } from "./Button";
import SexyNicky from "../assets/sexy-nicky.png";

const GetStarted = () => {
  return (
    <div className="px-6 py-10 md:px-[100px] md:py-[100px] bg-black flex justify-center">
      <div className="bg-gradient-to-r from-pink-800 via-pink-700 to-purple-900 w-full rounded-[20px] px-6 py-10 pb-0 md:px-[86px] text-white flex flex-col md:flex-row justify-between items-center">
        <div className="space-y-4 md:space-y-[20px] text-center md:text-left">
          <p className="text-2xl md:text-[30px]">Ready to Trade Together?</p>
          <p className="text-base md:text-[20px] font-thin w-full md:w-[700px]">
            Getting started is easy and free! Just click any Call To Action
            button on this page, and I'll be right there to guide you through
            every trade
          </p>
          <div className="flex justify-center md:justify-start mt-8 space-x-4 md:space-x-[30px]">
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
              <PrimaryButton
                text="Start Trading With Me"
                onClick={() => null}
              />
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src={SexyNicky}
            alt="Sexy Nicky"
            className="w-full md:w-auto"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
