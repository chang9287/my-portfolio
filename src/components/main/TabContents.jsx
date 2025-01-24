import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Intro from '../section/Intro';
import About from '../section/About';
import Project from '../section/Project';
import Contact from '../section/Contact';
import { faEllipsis, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import "../../style/components/main/TabContents.css"
import "../../style/components/section/Contact.css"

const TabContents = () => {
  const [tabs, setTabs] = useState(['intro.html']); // 초기 탭은 intro만 열림
  const [activeTab, setActiveTab] = useState('intro.html'); // 현재 활성화된 탭
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); //사이드바 열림/닫힘 이벤트

  // 탭 내용
  const tabContents = {
    'intro.html' : <Intro />,
    'about.jsx' : <About />,
    'project.css' : <Project />,
    'contact.js' : <Contact />
  };

  // 탭 이미지
  const tabHeaderImg = {
    'intro.html': `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-01.png`,
    'about.jsx': `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-02.png`,
    'project.css': `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-03.png`,
    'contact.js': `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-04.png`,
  };

  // 탭 열기
  const openTab = (name) => {
    if (!tabs.includes(name)) {
      setTabs([...tabs, name]);
    }
    setActiveTab(name);
  };

  // 탭 닫기
  const closeTab = (name) => {
    setTabs(tabs.filter((tab) => tab !== name));
    if (activeTab === name) {
      setActiveTab(tabs.filter((tab) => tab !== name)[0] || '');
    }
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-container">
      {/* 왼쪽 사이드바 */}
      <div className="tab-sidebar">
        <div className="sidebar-title" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <h2>Explorer</h2>
          <FontAwesomeIcon icon={faEllipsis} style={{marginRight:"10px", fontSize:"20px"}} />
        </div>
        <div className="sidebar-wrap">
          <div 
            className="sidebar-subtitle" 
            style={{ 
              display: "flex" , 
              alignItems:"center", 
              marginBottom:"15px"
            }} 
            onClick={toggleSideBar}
          >
            <FontAwesomeIcon 
              icon={faAngleDown} 
              style={{
                marginRight:"10px", 
                fontSize:"20px", 
                transform: isSidebarOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s ease'
              }}
            />
            <h3 
              style={{
                textTransform:"capitalize", 
                fontSize:"22px", 
                cursor:"pointer"
              }}
            >
              portfolio
            </h3>
          </div>
          <div 
            className="sidebar-content" 
            style={{
              maxHeight: isSidebarOpen ? '500px' : '0', 
              overflow: 'hidden', 
              transition: 'max-height 0.2s ease'}}
          >
            {[
              {tab: 'intro.html', image: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-01.png`},
              {tab: 'about.jsx', image: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-02.png`},
              {tab: 'project.css', image: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-03.png`},
              {tab: 'contact.js', image: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-04.png`}].map((list) => (
              <button 
                style={{
                  display:"flex", 
                  justifyContent:"flex-start", 
                  alignItems:"center"
                }} 
                key={list.tab} 
                onClick={() => openTab(list.tab)}
              >
                <img src={list.image} alt={list.tab} style={{marginRight: "10px"}}/>
                <span style={{display:"block", fontSize:"18px", fontWeight:"400"}}>{list.tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* 오른쪽 탭 영역 */}
      <div className="tabs-container">
        <div className="tabs">
          {/* 탭 헤더 */}
          <div className="tab-header">
            {tabs.map((tab) => (
              <div key={tab} className={`tab-button ${activeTab ===   tab ? 'active' : ''}`}>
                <div className='tab-header-img'>
                  <img src={tabHeaderImg[tab]} alt="" />
                </div>
                <span onClick={() => setActiveTab(tab)}>{tab}</span>
                <button className='tab-button-close' onClick={() => closeTab(tab)}>
                  <img src={`${process.env.PUBLIC_URL}/assets/images/tab-button-close.png`} />
                </button>
              </div>
            ))}
          </div>

          {/* 탭 내용 */}
          <div className="tab-content">
            {activeTab && tabContents[activeTab]}
            <div className='all-close-bg' style={{display: activeTab &&   tabContents[activeTab] ? 'none' : 'block' }}>
              <div className="all-close-bg-content">
                <img src={`${process.env.PUBLIC_URL}/assets/images/vscode-logo.png`} />
                <ul className='close-bg-wrap'>
                  {[
                    {
                      closebgDescription : '인트로 보기',
                      closebgTitle : 'intro.html',
                      closebgImage: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-01.png`,
                    },
                    {
                      closebgDescription : '프로필 및 스킬 보기',
                      closebgTitle : 'about.jsx',
                      closebgImage: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-02.png`,
                    },
                    {
                      closebgDescription : '프로젝트 보기',
                      closebgTitle : 'project.css',
                      closebgImage: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-03.png`,
                    },
                    {
                      closebgDescription : '연락처 보기',
                      closebgTitle : 'contact.js',
                      closebgImage: `${process.env.PUBLIC_URL}/assets/images/tab-sidebar-icon-04.png`,
                    },
                  ].map((closebglist) => (
                    <li className='close-bg-wrap-list'>
                      <p>{closebglist.closebgDescription}</p>
                      <div>
                        <img src={closebglist.closebgImage} />
                        <span>{closebglist.closebgTitle}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabContents