import React, { useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";
import Navbar from "../Navbar";

const GradientPage = () => {
  const canvasRef = useRef(null);
  const stop1Ref = useRef(null);
  const stop2Ref = useRef(null);
  const [color, setColor] = useState("#ff0000");
  const [stop1Hex, setStop1Hex] = useState("#ffffff");
  const [stop2Hex, setStop2Hex] = useState("#ff0000");
  const [stop1Percent, setStop1Percent] = useState(0);
  const [stop2Percent, setStop2Percent] = useState(100);
  const [focusedStop, setFocusedStop] = useState(stop1Ref);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "red");
    canvas.width = 600;
    canvas.height = 125;
    context.fillStyle = gradient;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(stop1Percent / 100, stop1Hex);
    gradient.addColorStop(stop2Percent / 100, stop2Hex);

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the updated gradient
    context.fillStyle = gradient;
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, [stop1Hex, stop2Hex, stop1Percent, stop2Percent]);

  function handleChangeComplete(color) {
    setColor(color.hex);
    if (focusedStop === stop1Ref) {
      setStop1Hex(color.hex);
    } else {
      setStop2Hex(color.hex);
    }
  }

  return (
    <div className="flex bg-zinc-900 w-screen h-screen">
      <Navbar />
      <div className="z-0 w-screen pl-52 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl">Gradient Generator</h1>
        <p className="text-white font-medium text-lg">
          A quick tool for front-end developers to generate a gradient in CSS.
        </p>
        <div className="w-2/3 h-1/3 mt-10 flex justify-center items-center">
          <SketchPicker
            color={color}
            onChange={(e) => {
              handleChangeComplete(e);
            }}
          />
          <div className="w-max h-full bg-white ml-5 flex flex-col">
            <canvas
              className="border-solid border-1 border=sky-500"
              ref={canvasRef}
            ></canvas>
            <div className="flex flex-col h-3/5 justify-center items-center">
              <div
                className="h-2/5 w-11/12 flex flex-row items-center
              hover:bg-gray-200 hover:border hover:border-solid hover:border-gray-300
              rounded-md"
              >
                <input
                  ref={stop1Ref}
                  type="text"
                  placeholder="Hex"
                  value={stop1Hex}
                  onFocus={() => setFocusedStop(stop1Ref)}
                  className="w-1/6 h-1/2 placeholder:text-center font-medium text-xl text-center justify-self-start
                mx-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Stop %"
                  value={stop1Percent}
                  className="w-1/6 h-1/2 placeholder:text-center font-medium text-xl text-center justify-self-start
                mr-5 border border-gray-300 rounded-lg"
                />
                <input
                  id="default-range"
                  type="range"
                  value={stop1Percent}
                  onChange={(e) => setStop1Percent(e.target.value)}
                  class="w-1/2 h-2 bg-gray-200 
                  rounded-lg appearance-none cursor-pointer dark:bg-zinc-900 ml-auto mr-5"
                />
              </div>
              <div
                className="h-2/5 w-11/12 flex flex-row items-center
              hover:bg-gray-200 hover:border hover:border-solid hover:border-gray-300
              rounded-md"
              >
                <input
                  ref={stop2Ref}
                  type="text"
                  placeholder="Hex"
                  value={stop2Hex}
                  onFocus={() => setFocusedStop(stop2Ref)}
                  className="w-1/6 h-1/2 placeholder:text-center font-medium text-xl text-center justify-self-start
                mx-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Stop %"
                  value={stop2Percent}
                  className="w-1/6 h-1/2 placeholder:text-center font-medium text-xl text-center justify-self-start
                mr-5 border border-gray-300 rounded-lg"
                />
                <input
                  id="default-range"
                  type="range"
                  value={stop2Percent}
                  onChange={(e) => setStop2Percent(e.target.value)}
                  class="w-1/2 h-2 bg-gray-200 
                  rounded-lg appearance-none cursor-pointer dark:bg-zinc-900 ml-auto mr-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-2/3 h-16 mt-5 flex justify-start items-center p-5 text-lg font-medium">
          <span>{`background: linear-gradient(90deg, ${stop1Hex} ${stop1Percent}%, ${stop2Hex} ${stop2Percent}%);`}</span>
        </div>
      </div>
    </div>
  );
};

export default GradientPage;
