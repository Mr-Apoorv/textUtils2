import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    <>
      {/* <NavBar title="Text-Utils" aboutText="About-textUtils"/> */}
      {/* <NavBar/> */}
      <NavBar title="Text-Utils" mode={mode} toggleMode={handleToggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter your text below to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
