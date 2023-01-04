import React, { useState, useContext, useEffect } from "react";
import Tools from "./Tools";
import userContext from "../features/contexts/userContext";

const Content = ({ contents }) => {
  const { state, dispatch } = useContext(userContext);
  const [contentArr, setContentArr] = useState("");
  const [page, setPage] = useState(0);
  const [color, setColor] = useState("");

  const getColor = (color) => {
    setColor(color);
  };

  const handleClick = (e, id) => {
    if (id.includes(e.target.id) && color) e.target.classList.add(color);

    console.log(e.target.id, `p${page}`);
  };
  const setData = () => {
    let arr = contents.map((content) => {
      return content.content.split(" ");
    });
    setContentArr(arr);
  };
  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    return () => {};
  });

  return (
    <div className="flex flex-col gap-3">
      <Tools getColor={getColor} />

      <div
        className=" flex flex-col gap-4 justify-between mx-10 my-5 p-7 bg-white rounded-md"
        style={{ minHeight: "82vh" }}
      >
        <div className="">
          {contentArr &&
            contentArr[page].map((text, idx) => {
              return (
                <span
                  key={`p${page}-w${idx}`}
                  id={`p${page}-w${idx}`}
                  onClick={(e) => {
                    handleClick(e, `p${page}-w${idx}`);
                  }}
                >
                  {text + " "}
                </span>
              );
            })}
        </div>
        <div className="flex justify-between p-4">
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              page > 0 && setPage((prev) => prev - 1);
              setColor("");
            }}
          >
            previous
          </button>

          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              page < contentArr.length - 1 && setPage((prev) => prev + 1);
              setColor("");
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
