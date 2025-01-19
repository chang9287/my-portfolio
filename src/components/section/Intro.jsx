import React, {useState, useEffect} from 'react'
import "../../style/components/section/Intro.css"

const Intro = () => {
  const [titleText, setTitleText] = useState('');
  const [upText, setUpText] = useState('');
  const [downText, setDownText] = useState('');

  const title = "Hello! Chang Gi's World!!";
  const up = "신입 프론트엔드 개발자 안창기입니다.";
  const down = "제 포트폴리오를 통해 저의 여정을 함께해 주세요.";

  const [titleIndex, setTitleIndex] = useState(0);
  const [upIndex, setUpIndex] = useState(0);
  const [downIndex, setDownIndex] = useState(0);

  const [isTitleComplete, setIsTitleComplete] = useState(false);
  const [isUpComplete, setIsUpComplete] = useState(false);
  const [isDownComplete, setIsDownComplete] = useState(false);

  const [showTitleCursor, setShowTitleCursor] = useState(false);
  const [showUpCursor, setShowUpCursor] = useState(false);
  const [showDownCursor, setShowDownCursor] = useState(false);

  /* title */
  useEffect(() => {
    if (titleIndex < title.length) {
      setShowTitleCursor(true);
      setTimeout(() => {
        setTitleText(titleText + title[titleIndex]);
        setTitleIndex(titleIndex + 1);
      }, 100); 
    } else if (titleIndex === title.length && upIndex === 0) {
      setIsTitleComplete(true);
      setShowTitleCursor(false);
      setTimeout(() => {
        setUpText(upText + up[upIndex]);
        setUpIndex(upIndex + 1);
      }, 100);
    }
  }, [titleIndex, titleText, title, upIndex, upText, up]);

  /* up-text */
  useEffect(() => {
    if (upIndex < up.length && titleIndex === title.length) {
      setShowUpCursor(true);
      setTimeout(() => {
        setUpText(upText + up[upIndex]);
        setUpIndex(upIndex + 1);
      }, 100); 
    } else if (upIndex === up.length && downIndex === 0) {
      setIsUpComplete(true);
      setShowUpCursor(false);
      setTimeout(() => {
        setDownText(downText + down[downIndex]);
        setDownIndex(downIndex + 1);
      }, 100);
    }
  }, [upIndex, upText, up, downIndex, downText, down, titleIndex, title.length]);

  /* down-text */
  useEffect(() => {
    if (downIndex < down.length && upIndex === up.length) {
      setShowDownCursor(true);
      setTimeout(() => {
        setDownText(downText + down[downIndex]);
        setDownIndex(downIndex + 1);
      }, 100);
    } else if (downIndex === down.length) {
      setIsDownComplete(true);
    }
  }, [downIndex, downText, down, upIndex, up.length]);

  return (
    <div className='intro'>
      <div className='intro-wrap'>
        <img src={`${process.env.PUBLIC_URL}/assets/images/vscode-logo.png`} alt="vscode-logo" />
        <div className="intro-content">
          <h1 className={showTitleCursor ? 'typing' : ''}>
            {titleText}
          </h1>
          <p className={`up-text ${showUpCursor ? 'typing' : ''}`}>
            {upText}
          </p>
          <p className={`down-text ${showDownCursor ? 'typing' : ''}  `}>
            {downText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
