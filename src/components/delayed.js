import React, { useState, useEffect } from 'react';

export default function DelayedComponent(component, delay) { 
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