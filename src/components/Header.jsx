import React from 'react'
import "../style/components/Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-wrap">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/images/vscode-logo.png`} alt="vscode-logo" />
        </div>
        <ul className="nav">
          <li>파일(F)</li>
          <li>편집(E)</li>
          <li>선택 영역(S)</li>
          <li>보기(V)</li>
          <li>이동(G)</li>
          <li>실행(R)</li>
          <li>터미널(T)</li>
          <li>도움말(H)</li>
        </ul>
      </div>
      <p className="title-wrap">
        Ahn-Chang-Gi - Portfolio - Visual Studio Code
      </p>
      <div className="icon-wrap">
        <ul className="left-icon">
          <li>
            <a href="#none">
              <img src={`${process.env.PUBLIC_URL}/assets/images/left-icon-01.png`} />
            </a>
          </li>
          <li>
            <a href="#none">
              <img src={`${process.env.PUBLIC_URL}/assets/images/left-icon-02.png`} />
            </a>
          </li>
          <li>
            <a href="#none">
              <img src={`${process.env.PUBLIC_URL}/assets/images/left-icon-03.png`} />
            </a>
          </li>
          <li>
            <a href="#none">
              <img src={`${process.env.PUBLIC_URL}/assets/images/left-icon-04.png`} />
            </a>
          </li>
        </ul>
        <ul className="right-icon">
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/right-icon-line.png`}/>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/right-icon-square.png`}/>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/assets/images/right-icon-xmark.png`}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
