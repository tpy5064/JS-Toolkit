import React from "react";

const Button = ({
  initialColor = "bg-blue-600",
  hoverColor = "bg-white",
  text,
  scale,
  onClick,
}) => {
  return (
    <button
      className={`w-40 h-10 mb-1 ${initialColor} text-center flex justify-center items-center 
          rounded-lg text-white text-xl font-medium ${
            scale ? "hover:scale-110 hover:-translate-y-1" : ""
          } hover:${hoverColor} hover:text-zinc-900
          transition ease-in-out duration-300`}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
