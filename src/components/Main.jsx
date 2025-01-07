import React from 'react'
import SideBar from './main/SideBar'
import TabContents from './main/TabContents'
import "../style/components/Main.css"

const Main = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : ''}`}>
      <SideBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <TabContents />
    </div>
  )
}

export default Main
