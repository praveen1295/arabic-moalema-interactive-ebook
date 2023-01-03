import React, { useState } from "react";
import Tools from "./Tools";
let set = new Set();

const Content = ({ contents }) => {
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState({ bg: "", id: "" });
  const [AssignmentContents, setAssignmentContent] = useState({
    id: "",
    text: "",
  });
  const getColor = (color) => {
    setColor(color);
  };

  const handleClick = (e, idx) => {
    set.add(idx);
    console.log(set);
    setBgColor({ ...bgColor, bg: color, id: idx });
    // console.log(e.target.attributes.color.value, "click");
    for (let i = 0; i < set.size; i++) {}
  };

  const handleColor = () => {
    if (true) {
    }
  };
  return (
    <>
      {console.log(set, "arr")}
      <Tools getColor={getColor} />
      <br />
      <div className="">
        {contents.map((content, index) => {
          return (
            <div key={index}>
              {content.content.split(" ").map((text, idx) => {
                return (
                  <span
                    className={set.has(idx) ? `${bgColor.bg}` : ""}
                    key={idx}
                    id={idx}
                    color=""
                    onClick={(e) => handleClick(e, idx)}
                  >
                    {text + " "}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
