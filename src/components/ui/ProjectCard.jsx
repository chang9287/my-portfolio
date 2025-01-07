import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../style/components/ui/ProjectCard.css"


const ProjectCard = ({project}) => {
  // 데이터 분리 및 가공 , json 파일에서 | 단위로 분리
  const functions = project.function ? project.function.split(" | ").map(func => func.trim()) : [];
  const problems = project.problem ? project.problem.split(" | ").map(problem => problem.trim()) : [];
  const solutions = project.solution ? project.solution.split(" | ").map(solution => solution.trim()) : [];
  const skills = project.skill ? project.skill.split(" | ").map(skill => skill.trim()) : [];
  const links = project.link ? project.link.split(" | ").map(link => link.trim()) : [];

  return (
    <div className="project-card">
      <div className="card-image"></div>
      <div className="card-content">
        <h2 className='content-title'>{project.title}</h2>
        {/* 작업기간 */}
        <div className="project-time">
          <h4 className='project-common-title'>#작업기간</h4>
          <span>{project.time}</span>
        </div>
        {/* 주요기능 */}
        <div className='project-func'>
          <h4 className='project-common-title'>#주요기능</h4>
          <ul>
            {functions.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
        </div>
        {/* 개발과정 - 마주친 문제, 해결방안 */}
        <div className='project-process'>
          <h4 className='project-common-title process-title'>#개발과정</h4>
          <div className='project-problem'>
            <h5>문제</h5>
            <ul>
              {problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </div>
          <div className='project-solution'>
            <h5>해결</h5>
            <ul>
              {solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* 기술스택 */}
        <div className="project-skill">
          <h4 className='project-common-title'>#기술스택</h4>
          <div className='project-skill-img'>
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="skill-badge"
              />
            ))}
          </div>
        </div>
        {/* 링크 */}
        <div className="project-link">
          {links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {index === 0 ? (<FontAwesomeIcon icon={faGithub} />) : (<FontAwesomeIcon icon=  {faGlobe} />)}
              {index === 0 ? <span>GitHub</span> : <span>Demo</span>}
            </a>
          ))}
        </div>
      </div>
    </div>  
  );
}

export default ProjectCard

  




