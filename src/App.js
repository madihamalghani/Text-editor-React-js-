import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import About from './components/About';
import Text from './components/Text';
// =======================================


function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('light');
  const [btnText1, setbtnText1] = useState("Enable Blue Mode");
  const [btnText2, setbtnText2] = useState("Enable Green Mode");

  const[mode2,setMode2] =useState('light');
  // mode=black,mode1=purple;
  const toggleMode1=()=>{
    if(mode1==='blue'){
      setMode1('light');
      setbtnText1('Enable Blue Mode');
      // showAlert('light mode has been enabled','success');3DC2EC
      document.body.style.backgroundColor='white';
    }
    else{
      setMode1('blue');
      setbtnText1('Enable Light Mode');
      document.body.style.backgroundColor='#2E236C';
      // showAlert('dark mode has been enabled','success');4C3BCF
  
    }}
    const toggleMode2=()=>{
      if(mode2==='green'){
        setMode2('light');
        setbtnText2('Enable Green Mode');
        document.body.style.backgroundColor='white';
      }
      else{
        setMode2('green');
        setbtnText2('Enable Light Mode');
        document.body.style.backgroundColor='#365E32';
    
      }}
  const [btnText, setbtnText] = useState("Enable Dark Mode");
  const showAlert=(message,type)=>{
    setAlert({
        mesg:message,
        type:type,
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
}

 const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light');
    setbtnText('Enable Dark Mode');
    // showAlert('light mode has been enabled','success');    // document.body.style.backgroundColor='white';
  }
  else{
    setMode('dark');
    setbtnText('Enable Light Mode');
    // document.body.style.backgroundColor='dark';
    // showAlert('dark mode has been enabled','success');

  }
  document.body.style.backgroundColor = mode === 'dark' ? 'white' : '#2F3645';//#131842
  
 }

  return (
    <>
    <Router>
    
    <Navbar  title="Text Editor"
        name="About"
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
        mode1={mode1}
        btnText1={btnText1}
        toggleMode1={toggleMode1}
        mode2={mode2}
        toggleMode2={toggleMode2}
        btnText2={btnText2}
          
        />
             {/* <Alert alert={alert} /> */}

        {/* <Text showAlert={showAlert} heading="Enter the text to analyze" buttonText="Convert to UpperCase" mode={mode} mode1={mode1} mode2={mode2} toggleMode2={toggleMode2} btnText2={btnText2}/> */}
      <Routes>
      <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Text showAlert={showAlert} heading="Enter the text to analyze" buttonText="Convert to UpperCase" mode={mode} mode1={mode1} mode2={mode2} toggleMode2={toggleMode2} btnText2={btnText2}/>} />
            {/* <Route element={<Alert showAlert={showAlert}/>}/> */}
      </Routes>
          
  
      
      </Router>

    </>
  );
}

export default App;
