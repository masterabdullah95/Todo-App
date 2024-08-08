import React from 'react'
import { WiDaySunny } from "react-icons/wi";
import { IoMoon } from "react-icons/io5";

const ThemeToggle = ({mode, setMode}) => {

    const handleToggle = (currMode)=>{
        setMode(currMode);
        document.querySelector('body').setAttribute('data-theme', currMode);
    }

  return (
    <div className='theme-toggle-div'>
        <h6>Theme Mode</h6>
        {mode == 'light' 
            ? <IoMoon onClick={()=>handleToggle('dark')} /> :
             <WiDaySunny onClick={()=>handleToggle('light')}/>}

    </div>
  )
}

export default ThemeToggle