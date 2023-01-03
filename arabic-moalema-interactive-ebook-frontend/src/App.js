import "./App.css";
import { useState, useEffect } from "react";
import Content from "./components/Content";

function App() {
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
    <div className="App">
      {console.log(data)}
      <Content contents={data.contents} />
    </div>
  );
}

export default App;
