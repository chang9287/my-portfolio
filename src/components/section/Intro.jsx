import React from 'react'
import "../../style/components/section/Intro.css"

const Intro = () => {

  return (
    <div className='intro'>
      <div className='intro-wrap'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/vscode-logo.png`} alt="vscode-logo" />
        <div className="intro-content">
          <h1>Hello!</h1>
          <p className='up-text'>신입 프론트엔드 개발자 <em>안창기</em>입니다.</p>
          <p className='down-text'>제 포트폴리오를 통해 저의 여정을 함께해 주세요.</p>
        </div>
      </div>
    </div>
  )
}

export default Intro
