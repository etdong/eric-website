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
    return (<div href="#page2" className='down-arrow'></div>)
  }
   
  const myRef = useRef()
  

  return (
    <div className='App'>
      <div className="page">
      <div class="custom-shape-divider-bottom-1725843514">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>
        <div className='text-wrapper'>
          {typingFunc("Hello, nice to meet you.", 2000)}
        </div>
        <div className='down-arrow-wrapper'>
          {DelayedComponent(downarrow(), 5000)}
        </div>
      </div>
      <div id="page2" className='page'>
        <div class="custom-shape-divider-top-1725843655">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
        <div ref={myRef} className='intro-wrapper'>
        </div>

        <div class="custom-shape-divider-bottom-1725844347">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
          </svg>
        </div>

      </div>

      <div id="page3" className='page'>
        <div class="custom-shape-divider-top-1725844454">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
    
  );
}

export default App;
