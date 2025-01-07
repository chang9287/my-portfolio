import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

//CSS
import "./style/reset/reset.css"
import "./style/global.css"
import "./style/darkmode.css"
import "./style/responsive/tablet.css"
import "./style/responsive/mobile.css"

function App() {
  // 다크모드 상태
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 다크모드 토글 함수
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  
  return (
    <div className={`MyPortfolio ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header />
      <Main isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
