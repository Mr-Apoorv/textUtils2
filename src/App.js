import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
    }
  };
  return (
    <>
      {/* <NavBar title="Text-Utils" aboutText="About-textUtils"/> */}
      {/* <NavBar/> */}
      <NavBar title="Text-Utils" mode={mode} toggleMode={handleToggleMode} />
      <div className="container">
        <TextForm heading="Enter your text below to analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
