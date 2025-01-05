import Nicky from "../assets/nicky-footer.png";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { PrimaryButton } from "./Button";

const Footer = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="bg-black py-10 px-6 md:py-[100px] md:px-[100px]">
      <div className="bg-[#191919] rounded-[20px] px-6 py-8 pb-0 md:px-[50px] md:pl-0 text-white ">
        <div className="text-center flex justify-center mb-[50px]">
          <div>
            <p className="text-[24px] md:text-[40px]">
              The Details That Matter
            </p>
            <p className="text-[16px] md:text-[20px] font-thin w-full md:w-[700px]">
              Transparency is key! Here's everything you need to know
              about our token
            </p>
          </div>
        </div>
        <div
          className={`md:px-[50px] md:pl-0 text-white flex flex-col md:flex-row justify-between items-center`}
        >
          <img
            src={Nicky}
            alt=""
            className="w-[200px] md:w-[300px] mt-[50px] md:mt-0 md:mb-0 order-1 md:order-0"
            style={{ transform: "scaleX(-1)" }}
          />

          <div className="mt-8 md:mt-0 order-0 md:order-1">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-[30px]">
              <div className="border border-white w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center text-center">
                <p className="text-[16px] md:text-[20px]">
                  100M <br />
                  Max Supply
                </p>
              </div>
              <div className="border border-white w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center text-center">
                <p className="text-[16px] md:text-[20px]">
                  5% <br />
                  Buy Tax
                </p>
              </div>
              <div className="border border-white w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full flex justify-center items-center text-center">
                <p className="text-[16px] md:text-[20px]">
                  5% <br />
                  Sell Tax
                </p>
              </div>
            </div>

            <div className="border border-white mt-8 p-4 md:p-[20px] rounded-full flex items-center justify-between">
              <p className="text-[12px] md:text-base">
                CA: 0x00000000000000000000000000000000000
              </p>
              <button
                onClick={() =>
                  copyToClipboard("0x00000000000000000000000000000000000")
                }
              >
                <FaCopy className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white text-center space-y-6 md:space-y-[50px] mt-20 md:mt-[100px]">
        <div className="mt-8 space-x-6 md:space-x-[30px] flex justify-center">
          <BsTelegram className="text-white text-[30px] md:text-[40px] cursor-pointer" />
          <BsTwitterX className="text-white text-[30px] md:text-[40px] cursor-pointer" />
          <a
            href="https://dapp.nickyai.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton text="AI Agent" onClick={() => null} />
          </a>
        </div>
        <p className="text-[12px] md:text-base">&copy; Nicky AI 2025 </p>
      </div>
    </div>
  );
};

export default Footer;
