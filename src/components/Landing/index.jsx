import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Landing = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("https://api.quotable.io/random", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setQuote(data.content);
          setAuthor(data.author);
        });
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex bg-zinc-900 w-screen h-screen ">
      <Navbar />
      <div className="w-screen pl-52 flex flex-col justify-center items-center z-10">
        <h1 className="text-white font-bold text-center text-5xl mb-5 z-10">
          Welcome <br /> To The JS Toolbox!
        </h1>
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["0%", "20%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="bg-blue-500 w-96 h-96 fixed z-0 blur-sm"
        />
        <Link
          to="/gradient"
          className="w-40 h-10 mb-10 bg-blue-600 text-center flex justify-center items-center 
        rounded-lg text-white text-xl font-medium hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-zinc-900
        transition ease-in-out duration-300 z-10"
        >
          <span>Get Started</span>
        </Link>
        <p className="text-white font-semibold text-lg mb-5">
          Random Quote Of The Day
        </p>
        <div className="flex flex-col justify-start items-center w-2/3 h-1/6">
          <div
            className="font-serif italic text-white text-xl animate-pulse duration-1000 w-full text-center
          "
          >
            {quote ? `“${quote}”` : "Loading..."}
          </div>
          <div className="font-serif italic text-white text-xl mb-auto z-10">
            - {author}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
