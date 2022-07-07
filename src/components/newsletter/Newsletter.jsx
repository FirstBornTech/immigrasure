import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { sliderData } from './data'
import './newsletter.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  

const Newsletter = () => {
  return (
    <div className='imm_newsletter-carousel'>
        <Carousel variant="dark">
            {sliderData.map((slide, index) => {
                return (
                    <Carousel.Item key={index}>
                        <div className='imm_newsletter-carousel_content'>
                            <div className='imm_newsletter-carousel_img scale-up-center'>
                                <img src={slide.image} alt='newsimg'></img>
                            </div>
                            <div className='imm_newsletter-carousel_description'>
                                <h3 className='text_gradient'>{slide.heading}</h3>
                                <p>{slide.desc}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}

export default Newsletter
