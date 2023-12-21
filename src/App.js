

import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React ,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

function App() {
  const [mode,stateMode]=useState('light');
  
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type) =>{
debugger;
    setAlert({
      msg:message,
      type:type

    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const nanannan=() =>{
    if(mode==='light'){
      stateMode('dark');
      showAlert("Mode Chnage","success")
  }else{
    stateMode('light')
  }
}
  return (
    <>
    <Router>
    <Navbar title="Hotels" homePage={'Home'}  mode={mode} anynay={nanannan}/>
    <div className="container my-3" >
    <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading="Enter Text" mode={mode} / >} />
        </Routes>
        
    </div>
   
    <Alert alert={alert}/>
    </Router>
    </>
    
  );
}

export default App;
