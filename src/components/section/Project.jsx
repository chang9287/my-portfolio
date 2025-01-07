import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../common/Title'
import ProjectCard from '../ui/ProjectCard';

import projects from '../data/projects.json'

// import required modules
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "../../style/components/section/Project.css"


const Project = () => {
  return (
    <div className='project'>
      <Title title={'<Project />'}/>
      <Swiper
        loop={true}
        spaceBetween={80}
        slidesPerView="auto"
        cssMode={true}
        navigation={true}
        centeredSlides={true}
        
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
        breakpoints={{
          1024: {
            spaceBetween: 0,
          },
          // 화면 너비가 768px 이상일 때
          768: {
            spaceBetween: 50,
          },
          // 화면 너비가 480px 이상일 때
          480: {
            spaceBetween: 30,
          }
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Project