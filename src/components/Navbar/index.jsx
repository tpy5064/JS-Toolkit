import React from "react";
import { FaTools } from "react-icons/fa";
import { MdGradient } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscJson } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-52 m-0 
    flex flex-col bg-blue-500 text-white shadow-lg justify-start 
    items-center z-50"
    >
      <Link
        to="/"
        className="flex flex-col justify-center items-center w-full h-20
       bg-blue-800 drop-shadow-xl mb-5"
      >
        <FaTools className="h-10 w-10" />
        <span className="font-bold">The JS Toolbox</span>
      </Link>
      <SideBarIcon
        icon={<MdGradient size="32" />}
        text={"Gradient Generator"}
        dir={"/gradient"}
      />
      <SideBarIcon
        icon={<VscJson size="32" />}
        text={"Fetch Boilerplate"}
        dir={"/xhrBoilerplate"}
      />
    </div>
  );
};

const SideBarIcon = ({ icon, text, dir }) => (
  <Link
    to={dir}
    className="flex justify-center items-center font-sans font-semibold w-full h-16 hover:bg-slate-50
     hover:text-neutral-950 transition-all 
     duration-300 ease-in-out"
  >
    {icon}
    {text ? <span className="ml-3">{text}</span> : []}
  </Link>
);

export default Navbar;
