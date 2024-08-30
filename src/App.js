import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [yellow, setYellow] = useState('light')

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled","success");
      document.title = 'TextUtills - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success");
      document.title = 'TextUtills - Light Mode';
    }
  }
  const yellowMode = ()=>{
    if(yellow === 'light'){
      setYellow('yellow')
      document.body.style.backgroundColor = "yellow";
      showAlert("Yellow mode has been enabled","success");
    }
    else{
      setYellow('light')
      document.body.style.backgroundColor = "light";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtills" mode={mode} aboutText="About TextUtills" /> */}
      <Navbar title="textutills" aboutText="About" yellow={yellow} yellowMode={yellowMode}  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Routes>
          <Route  path="/about" element={<About />}>
          </Route>
          <Route  path="/textform"
           element= {<TextForm heading="Enter the text to analyze below" yellow={yellow} showAlert={showAlert} mode={mode}/>}
          >
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;