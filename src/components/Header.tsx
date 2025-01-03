import Logo from "../assets/logo.svg";
import { PrimaryButton } from "./Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black px-6 py-4 flex items-center justify-between md:px-[122px] md:py-[20px]">
      <img src={Logo} alt="Logo" />

      <div className="hidden md:flex items-center text-white space-x-[30px]">
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Features</p>
        <p className="cursor-pointer">Docs</p>
      </div>

      <div className="hidden md:block">
        <a
          href="https://nicky-ai.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton text="AI Agent" onClick={() => null} />
        </a>
      </div>

      <div className="md:hidden">
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className="text-white" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 md:hidden">
          <p className="cursor-pointer text-white" onClick={toggleSidebar}>
            About
          </p>
          <p className="cursor-pointer text-white" onClick={toggleSidebar}>
            Features
          </p>
          <p className="cursor-pointer text-white" onClick={toggleSidebar}>
            Docs
          </p>
          <a
            href="https://nicky-ai.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PrimaryButton text="AI Agent" onClick={() => null} />
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
