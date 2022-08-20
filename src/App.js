import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      {/* <NavBar title="Text-Utils" aboutText="About-textUtils"/> */}
      {/* <NavBar/> */}
      <NavBar title="Text-Utils" />
      <div className="container">
        {/* <TextForm heading="Enter your text below to analyze" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
