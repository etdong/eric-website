import './App.css';
import { TypeAnimation } from 'react-type-animation';
import React, { useState, useEffect } from 'react';

function App() {

  const text = () => {
    return (
      <TypeAnimation
        sequence={[
          ' ',
          3000,
          "Hello, nice to meet you. wadsad"
        ]}
          wrapper="span"
          cursor={true}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
        />
    )
  }

  function DelayedComponent() { 
    const [rendered, setRendered] = useState(false); 
   
    useEffect(() => { 
      const timer = setTimeout(() => { 
        setRendered(true); 
      }, 5000); 
   
      return () => clearTimeout(timer); 
    }, []); 
   
    return ( 
      <div> 
        {rendered && <div className='down-arrow'></div>} 
      </div> 
    ); 
  } 
   
  return (
    <div className="App">
      <div className='landing-wrapper'>
        {text()}
      </div>
      <div className='down-arrow-wrapper'>
        {DelayedComponent()}
      </div>
    </div>
  );
}

export default App;
