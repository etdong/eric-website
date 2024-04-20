import './App.css';
import { TypeAnimation } from 'react-type-animation';
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {

  /* intersection observer */
  const obs = new IntersectionObserver((items) => {
    items.forEach((entry) => {
        if (entry.rendered === false) {
            entry.setRendered(true);
        }
    })
  })

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => obs.observe(el))
  

  const typingFunc = (text, delay) => {
    return (
      <TypeAnimation
        sequence={[
          ' ',
          delay,
          text
        ]}
          wrapper="span"
          cursor={true}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
        />
    )
  }

  function DelayedComponent(component, delay) { 
    const [rendered, setRendered] = useState(false); 
   
    useEffect(() => { 
      const timer = setTimeout(() => { 
        setRendered(true); 
      }, delay); 
   
      return () => clearTimeout(timer); 
    }, [delay]); 
   
    return ( 
      <div> 
        {rendered && component} 
      </div> 
    ); 
  } 

  const downarrow = () => {
    return (<div className='down-arrow'></div>)
  }
   
  const myRef = useRef()
  

  return (
    <div className='App'>
      <div className="page">
        <div className='text-wrapper'>
          {typingFunc("Hello, nice to meet you.", 2500)}
        </div>
        <div className='down-arrow-wrapper'>
          {DelayedComponent(downarrow(), 5000)}
        </div>
      </div>
      <div className='page'>
        <div ref={myRef} className='intro-wrapper'>
        </div>
      </div>
    </div>
    
  );
}

export default App;
