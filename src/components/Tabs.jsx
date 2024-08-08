import React from 'react'

const Tabs = ({activeTab, setActiveTab}) => {


  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className={`nav-link ${activeTab==1?'active':''}`} aria-current="page" onClick={()=>setActiveTab(1)}>All</a>
        </li>
        <li className="nav-item">
            <a className={`nav-link ${activeTab==2?'active':''}`} onClick={()=>setActiveTab(2)}>Completed</a>
        </li>
        <li className="nav-item">
            <a className={`nav-link ${activeTab==3?'active':''}`} onClick={()=>setActiveTab(3)}>Incomplete</a>
        </li>
    </ul>
  )
}

export default Tabs