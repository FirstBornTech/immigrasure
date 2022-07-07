import React, {useEffect, useState} from 'react'
import './header.css'
import nurse from '../../assets/nurse.png'
import { sliderData } from './data'

const Header = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 10000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  };
  // const prevSlide = () => {
  //     setCurrentSlide(currentSlide === 0  ? slideLength - 1 : currentSlide - 1)
  // };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
      setCurrentSlide(0)
  }, [])

  useEffect(() => {
      if(autoScroll) {
          auto()
      }
      return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <div className='imm_header' id='home'>
      <div className='imm_header-image'>
          <img src={nurse} alt="Nurse" />
      </div>
      <div className='imm_header-contents'>
        {sliderData.map((slide, index) => {
          return (
            <div className={index === currentSlide ? "imm_header-carousel_contents current" : "imm_header-carousel_contents"} key={index}>
              {index === currentSlide && (
                <div className='imm_header-content_text'>
                  <h1 className='text_gradient'>{slide.heading}</h1>
                  <p>{slide.desc}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Header
