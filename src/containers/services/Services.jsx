import React from 'react'
import './services.css'

const Services = () => {
    const handleJobClick = () => {
        window.location.href = '#job'
      }
    const handleStudyClick = () => {
        window.location.href = '#study'
      }
  return (
    <div className='imm_services'>
        <div className='imm_services-work'>
            <h2>Work with Us</h2>
            <p>Explore various opportunities for healthcare professionals. Choose the job that fits you!</p>
            <button className='imm_service-button' onClick={handleJobClick}>Job</button>
        </div>
        <div className='imm_serivces-train'>
            <h2>Train with Us</h2>
            <p>OET/ CBT/ OSCE Training through our state of the art training suit acute study. Courses prepared by our expert team.</p>
            <button className='imm_service-button' onClick={handleStudyClick}>Train</button>
        </div>
        <div className='imm_serivces-study'>
            <h2>Study with Us</h2>
            <p>Select from UK’s Pioneer universities for your further education. Our agents will assist and guide for course selection.</p>
            <button className='imm_service-button' onClick={handleStudyClick}>Study</button>
        </div>
        
    </div>
  )
}

export default Services
