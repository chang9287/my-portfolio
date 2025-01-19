import React, { useState } from 'react'
import "../../style/components/main/SideBar.css"

const SideBar = ({ isDarkMode, toggleDarkMode }) => {
  const [isActive, setIsActive] = useState(false)

  const handleSidebarToggle = () => {
    setIsActive((move) => !move);
  };

  return (
    <div className={`sidebar ${isActive ? "move" : ""}`}>
      <ul className='sidebar-up-icons'>
        <li><img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-up-icon-01.png`} onClick={handleSidebarToggle} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-up-icon-02.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-up-icon-03.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-up-icon-04.png`} /></li>
        <li><img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-up-icon-05.png`} /></li>
      </ul>
      <ul className='sidebar-down-icons'>
        <li><img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-down-icon-01.png`} /></li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/assets/images/sidebar-down-icon-02.png`} onClick={toggleDarkMode} />
          <span>{isDarkMode ? "WhiteMode" : "DarkMode"}</span>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
