import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  let [mode, setMode] = useState('light');

  const toggleMode=()=> {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121212';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TinkerText" mode={mode} toggleMode={toggleMode} />
      <div className='container my-4'>
          <TextForm heading = "Enter Text Here" mode={mode} />
      </div>
      
    </>
  );
}

export default App;
