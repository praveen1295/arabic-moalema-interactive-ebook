import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTools } from "@fortawesome/free-solid-svg-icons";

const Tools = ({ getColor }) => {
  const [flag, setFlag] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const handleClick = () => {
    if (flag === false) setFlag(true);
    else setFlag(false);
  };
  useEffect(() => {
    getColor(bgColor);
    // eslint-disable-next-line
  }, [flag]);
  return (
    <div className="flex gap-5 items-center w-full h-10 py-7 px-4">
      <h2 className="font-medium text-2xl cursor-pointer" onClick={handleClick}>
        <FontAwesomeIcon icon={faTools} />
      </h2>
      <div>
        {flag && (
          <>
            <div className="flex gap-2 justify-center items-center">
              <div></div>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Tools;
