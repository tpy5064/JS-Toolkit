import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

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
    <div className="flex bg-zinc-900 w-screen h-screen">
      <Navbar />
      <div className="z-0 w-screen pl-52 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-center text-5xl mb-5">
          Welcome <br /> To The JS Toolbox!
        </h1>
        <Link
          to="/gradient"
          className="w-40 h-10 mb-10 bg-blue-600 text-center flex justify-center items-center 
        rounded-lg text-white text-xl font-medium hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-zinc-900
        transition ease-in-out duration-300"
        >
          <span>Get Started</span>
        </Link>
        <p className="text-white font-semibold text-lg mb-5">
          Random Quote Of The Day
        </p>
        <div className="flex flex-col justify-start items-center w-2/3 h-1/6">
          <div className="font-serif italic text-white text-xl animate-pulse duration-1000 w-full text-center
          ">
            {quote ? `“${quote}”` : "Loading..."}
          </div>
          <div className="font-serif italic text-white text-xl mb-auto">- {author}</div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
