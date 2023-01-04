import "./App.css";
import React, { useState, useEffect, useReducer, useContext } from "react";
import userContext from "./features/contexts/userContext";
import userReducer from "./features/reducers/reducer";
import Content from "./components/Content";

function App() {
  const initialState = useContext(userContext);
  const [state, dispatch] = useReducer(userReducer, initialState);

  const [data, setData] = useState("");

  const url = "api/data.json";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return;
  }

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div className="bg-gray-100">
        {console.log(data)}
        <Content contents={data.contents} />
      </div>
    </userContext.Provider>
  );
}

export default App;
