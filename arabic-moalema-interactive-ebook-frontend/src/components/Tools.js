import React, { useEffect, useState } from "react";

const Tools = ({ getColor }) => {
  const [flag, setFlag] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    if (flag === false) setFlag(true);
    else setFlag(false);
  };
  // const colorHandler = () => {};
  useEffect(() => {
    getColor(bgColor);
  }, [flag]);
  return (
    <>
      <h2 className="font-medium text-2xl cursor-pointer" onClick={handleClick}>
        Tools
      </h2>
      {flag && (
        <div className="flex gap-3 justify-center">
          <div>
            <div className="flex gap-3 justify-center">Choose Color</div>
            <div
              className="rounded-full w-10 h-10 bg-yellow-400 inline-block cursor-pointer"
              onClick={() => {
                setBgColor("bg-yellow-400");
                setFlag(false);
              }}
            ></div>
            <div
              className="rounded-full w-10 h-10 bg-pink-400 inline-block cursor-pointer"
              onClick={() => {
                setBgColor("bg-pink-400");
                setFlag(false);
              }}
            ></div>
            <div
              className="rounded-full w-10 h-10 bg-gray-400 inline-block cursor-pointer"
              onClick={() => {
                setBgColor("bg-gray-400");
                setFlag(false);
              }}
            ></div>
            <div
              className="rounded-full w-10 h-10 bg-green-400 inline-block cursor-pointer"
              onClick={() => {
                setBgColor("bg-green-400");
                setFlag(false);
              }}
            ></div>
            <div
              className="rounded-full w-10 h-10 bg-blue-400 inline-block cursor-pointer"
              onClick={() => {
                setBgColor("bg-blue-400");
                setFlag(false);
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tools;
