import React from 'react'
import Title from '../common/Title'
import "../../style/components/section/About.css"

const About = () => {
  const skills = [
    { skillType : 'Language',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-html.png`,
      skillName : 'Html',
      skillDiscription : '기본적인 HTML 태그를 사용할 수 있습니다.',
    },
    { skillType : 'Language',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-css.png`,
      skillName : 'Css',
      skillDiscription : '순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.',
    },
    { skillType : 'Language',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-js.png`,
      skillName : 'JavaScript',
      skillDiscription : 'ES6+ 문법을 활용하여 코드를 작성 할 수 있습니다.',
    },
    { skillType : 'Library',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-react.png`,
      skillName : 'React',
      skillDiscription : '리액트로 여러 프로젝트를 해봤으며, useState를 활용 할 수 있습니다.',
    },
    { skillType : 'Preprocessor',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-sass.png`,
      skillName : 'Sass',
      skillDiscription : 'Sass를 활용하여 팀 프로젝트에서 효율적인 스타일 관리를 경험하였습니다.',
    },
    { skillType : 'ETC',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-git.png`,
      skillName : 'Git',
      skillDiscription : '코드 저장과 버전 기록을 위해 사용했습니다.',
    },
    { skillType : 'ETC',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-github.png`,
      skillName : 'GitHub',
      skillDiscription : '외부 저장과 협업을 위해 사용하였으며, 자동화된 빌드 및 배포 프로세스를 설정한 경험이 있습니다.',
    },
    { skillType : 'ETC',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-netlify.png`,
      skillName : 'Netlify',
      skillDiscription : 'React 프로젝트와 sass를 활용한 프로젝트를 배포해 본 경험이 있습니다.',
    },
    { skillType : 'Design',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-figma.png`,
      skillName : 'Figma',
      skillDiscription : '프로젝트 기획, 와이어프레임, 스타일가이드를 만든 경험이 있습니다.',
    },
    /* { skillType : 'Design',
      skillImg : `${process.env.PUBLIC_URL}/assets/images/skills-photoshop.png`,
      skillName : 'Photoshop',
      skillDiscription : '기초적인 부분을 다룬 경험이 있습니다.',
    }, */
  ]

  const profile = {
    Name : '안창기',
    Birth : '94.03.31',
    Phone : '010-8880-9287',
    Email : 'ckdrl9287@gmail.com',
    Education : '한국해양대학교 데이터정보학과 졸업' / '그린컴퓨터아카데미 프론트엔드 과정 수료',
    MBTI : 'ENFJ',
    text : ''
  }

  // skillType으로 그룹화
  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.skillType] = [...(acc[skill.skillType] || []), skill];
    return acc;
  }, {});

  return (
    <div className='about'>
      <Title title={'<About />'} />
      <div className="about-container">
        <div className="profile">
          <h2 className="subtitle">{'<profile />'}</h2>
          <div className="my-profile">
            <div className="profile-image-wrap">
              <div className="profile-image">
                <img src={`${process.env.PUBLIC_URL}/assets/images/myface.png`} alt="" />
              </div>
              <ul className="profile-text">
                <li>
                  <h4>Name</h4>
                  <span>{profile.Name}</span>
                </li>
                <li>
                  <h4>Birth</h4>
                  <span>{profile.Birth}</span>
                </li>
                <li>
                  <h4>Phone</h4>
                  <span>{profile.Phone}</span>
                </li>
                <li>
                  <h4>Email</h4>
                  <span>{profile.Email}</span>
                </li>
                <li>
                  <h4>MBTI</h4>
                  <span>{profile.MBTI}</span>
                </li>
              </ul>
            </div>
            <div className="profile-text-wrap">
              <p className="profile-uni">
                <h4>Education</h4>
                <ul>
                  <li>한국해양대학교 데이터정보학과 졸업</li>
                  <li>그린컴퓨터아카데미 프론트엔드 과정 수료</li>
                </ul>
              </p>
              <p className="profile-text"></p>
            </div>
          </div>
        </div>
        <div className="skills">
          <h2 className="subtitle">{'<skills />'}</h2>
          <div className="skills-wrap">
            {Object.entries(groupedSkills).map(([type, items]) => (
              <div key={type} className="skill-category">
                <h3 className="skill-category-title">{type}</h3>
                <div className="skill-items">
                  {items.map(({ skillImg, skillName, skillDiscription },  idx) => (
                    <div key={idx} className="skill-item">
                      <img src={skillImg} alt={skillName}   className="skill-icon" />
                      <span>{skillName}</span>
                      <p>{skillDiscription}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
