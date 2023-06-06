import logo from './logo.svg';
import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  const toggleMode = () =>{
      if(mode==='dark'){
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode has been enabled !" , "success")
      }else{
        setMode('dark');
        document.body.style.backgroundColor = '#042743'
        showAlert("Dark mode has been enabled !" , "success")
      }
  }
  return (
    <>
    {/* <Router>
    <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path="/About" element = {<About />}></Route>
      <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>}></Route>
    </Routes>
    </div>
    </Router> */}
    <Navbar title="Textutils" aboutText="About us" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
    </div>
    </>
  );
}

export default App;

// Imporatnce of keyword "exact" in front on path
// /users ---> Components-1
// /users/home ---> Components-2



