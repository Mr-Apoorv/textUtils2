import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  // const [theme, setTheme] = useState(null);

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
      document.title = "Text Utils - Dark Mode";
      // setInterval(() => {
      //   document.title = "Text Utils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Text Utils";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
      document.title = "Text Utils - Light Mode";
    }
  };

  const handleRadioToggleMode = (theme) => {
    if (theme === "red") {
      setMode("light");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "white";
      showAlert("Red theme enabled", "success");
    } else if (theme === "yellow") {
      setMode("light");
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
      showAlert("Yellow theme enabled", "success");
    } else if (theme === "green") {
      setMode("light");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      showAlert("Green theme enabled", "success");
    }
  };

  return (
    <>
      <Router>
        {/* <NavBar title="Text-Utils" aboutText="About-textUtils"/> */}
        {/* <NavBar/> */}
        <NavBar
          title="Text-Utils"
          mode={mode}
          toggleMode={handleToggleMode}
          radioToggleMode={handleRadioToggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter your text below to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
