import React from "react";
import Navbar from "../Navbar";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import Button from "../Button";

const XHRPage = () => {
  const [code, setCode] = useState("");
  const [boilerplate, setBoilerplate] = useState("");
  const [fetchRes, setFetchRes] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [method, setMethod] = useState("GET");

  function setBpCode() {
    const bp = `
      fetch("${apiUrl}", {
        method: '${method}',
        headers: {
          'Content-Type': 'application/json'
        }${
          code.length > 0
            ? `, 
        body: '${code}'`
            : ""
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    `;
    setBoilerplate(bp);
  }

  function makeCall() {
    console.log( typeof code)
    fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        
      },
      body: code.length > 0 ? JSON.stringify(JSON.parse(code)) : "",
    })
      .then((response) => response.json())
      .then((data) => setFetchRes(JSON.stringify(data)))
      .catch((err) => console.log(err));
  }

  return (
    <div className="flex bg-zinc-900 w-screen h-screen overflow-y-auto">
      <Navbar />
      <div className="z-0 w-screen pl-52 flex flex-col justify-center items-center">
        <h1 className="text-white font-bold text-3xl">
          Fetch Boilerplate Generator
        </h1>
        <p className="text-white font-medium text-lg">
          A quick tool for front-end developers to generate boilerplate code for
          fetch requests.
        </p>
        <div className="w-2/3 h-max mt-10 flex flex-col justify-center items-center">
          <div className="w-full h-max flex justify-center items-center">
            <select
              name="methods"
              id="methods"
              className="w-40 h-12 text-xl font-sans mr-5 pl-4"
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PATCH">PATCH</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input
              type="text"
              placeholder="Input API URL..."
              className="h-12 w-96 text-xl font-sans pl-4"
              onChange={(e) => setApiUrl(e.target.value)}
            />
          </div>
          <CodeEditor
            value={code}
            language="json"
            placeholder="//Please enter your JSON body here."
            onChange={(e) => setCode(e.target.value)}
            padding={15}
            data-color-mode="dark"
            style={{
              fontSize: 14,
              backgroundColor: "rgb(22, 27, 34)",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              width: "565px",
              margin: "1rem",
              border: "1px solid white",
            }}
          />
          <div className="flex justify-evenly items-center w-96">
            <Button text={"Done"} scale={true} onClick={setBpCode}></Button>
            <Button
              initialColor={"bg-emerald-500"}
              text={"Test"}
              scale={true}
              onClick={makeCall}
            ></Button>
          </div>
          <CodeEditor
            value={boilerplate}
            language="js"
            placeholder="//When done, your boilerplate will be generated here."
            padding={8}
            data-color-mode="dark"
            style={{
              fontSize: 14,
              backgroundColor: "rgb(22, 27, 34)",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              width: "565px",
              margin: "1rem",
              border: "1px solid white",
            }}
          />
          <CodeEditor
            value={fetchRes}
            language="json"
            placeholder="//Your test fetch will appear here."
            padding={15}
            data-color-mode="dark"
            style={{
              fontSize: 14,
              backgroundColor: "rgb(22, 27, 34)",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              width: "565px",
              margin: "1rem",
              border: "1px solid white",
              overflowY: "auto",
              maxHeight: "500px"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default XHRPage;
