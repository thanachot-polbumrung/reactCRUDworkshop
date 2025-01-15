import React, { useState } from 'react'



function RandomQuote() {
    let i = 0
    const [currentQuoteIndex ,setCurrentQuoteIndex ] = useState([0])
        const quotes = [
            "Learning React is fun!",
            "Props are read-only.",
            "State is mutable data.",
            "Hooks simplify code."
          ];
          const randomIndex = Math.floor(Math.random() * quotes.length);
    
  return (
    <div>
        <button onClick={()=>setCurrentQuoteIndex(randomIndex)}>random</button>
        <button onClick={()=> setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)}>next</button>
        {quotes[currentQuoteIndex]}
       
    </div>
  )
}

export default RandomQuote