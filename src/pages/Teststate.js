import React, { useState } from 'react'
import ToggleText from '../components/State/ToggleText'
import RandomQuote from '../components/State/RandomQuote'
import ThemeSwitcher from '../components/State/ThemeSwitcher'
import UserProfileEditor from './UserProfileEditor '

function Teststate() {
    const [increment,setIncrement] = useState(0)
    
    


  return (
    <div>
        <button onClick={()=>setIncrement(increment+1)}>Increment </button>
        <button onClick={()=>setIncrement(increment-1)}>Decrement  </button>
        {increment}
        <ToggleText/>
        <RandomQuote/>
        <ThemeSwitcher/>
       
    </div>
  )
}

export default Teststate