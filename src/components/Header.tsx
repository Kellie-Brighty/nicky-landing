import Logo from "../assets/logo.svg";
import { PrimaryButton } from "./Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black px-6 py-4 flex items-center justify-between md:px-[122px] md:py-[20px]">
      <img src={Logo} alt="Logo" className={`w-[150px] lg:w-[180px]`} />

      <div className="hidden md:flex items-center text-white space-x-[30px]">
        <Link
          to="video"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Video
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="roadmap"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Roadmap
        </Link>
        {/* <div className={`text-white`}>
          <a href="https://" target="_blank" rel="noopener noreferrer">
            <p>Docs</p>
          </a>
        </div> */}
      </div>

      <div className="hidden md:block">
        <a
          href="https://dapp.nickyai.online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton text="Chat with me" onClick={() => null} />
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

      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-6 md:hidden transition-transform duration-700 ${
          isOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleSidebar}>
          <FaTimes className="text-white text-2xl" />
        </button>
        <Link
          to="video"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white"
          onClick={toggleSidebar}
        >
          Video
        </Link>
        <Link
          to="features"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white"
          onClick={toggleSidebar}
        >
          Features
        </Link>
        <Link
          to="roadmap"
          smooth={true}
          duration={500}
          className="cursor-pointer text-white"
          onClick={toggleSidebar}
        >
          Roadmap
        </Link>
        {/* <div className={`text-white`}>
          <a href="https://" target="_blank" rel="noopener noreferrer">
            <p>Docs</p>
          </a>
        </div> */}
        <a
          href="https://dapp.nickyai.online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton text="Chat with me" onClick={() => null} />
        </a>
      </div>
    </div>
  );
};

export default Header;
