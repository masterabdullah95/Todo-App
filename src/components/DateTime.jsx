import React, { useEffect, useState } from 'react'

const DateTime = () => {

  const [dateTime, setdateTime] = useState("")

  const getDateTime = () =>{
    setInterval(()=>{
        const d = new Date();
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();
        setdateTime(date+' - '+time);
    },1000)
  }
  
  useEffect(() => {
    getDateTime();
  }, [dateTime])

  return (
    <div>
        <h2>{dateTime}</h2>
    </div>
  )
}

export default DateTime