import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-white text-black px-4 py-2 rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded-full"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
