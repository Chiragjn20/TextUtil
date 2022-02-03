import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Textform from './Component/Textform';
import React, { useState } from 'react';
import Alert from './Component/Alert';
import {  BrowserRouter as Router,Switch,  Route,  Link, Routes } from "react-router-dom";

function App() {
  const [ mode , setMode] = useState('dark');
  const [alert , setAlert] = useState(null);

  const showAlert = (msg , type)=> {
    setAlert= ({
      msg : msg,
      type : type 
    })
    setTimeout(()=>{
      setAlert(null)
    },3000);

  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = ' #042743'
      document.body.style.color = ' white'
      showAlert('white enabled' , 'success')
    }else{
      setMode("light")
      document.body.style.backgroundColor = ' white'
      document.body.style.color = ' black'
      showAlert('dark enabled' , 'success')
    }
  }
  return (<>
<Router>
<Navbar title ="TextUtil" mode={mode} toggleMode ={toggleMode} ></Navbar>
   <Alert alert= {alert} />
   <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
        </div>
    </Router>   
    </>
  );
}

export default App;
