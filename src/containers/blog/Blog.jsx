import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { sliderData } from './blog_data'
import './blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';



const Blog = () => {
    
  return (
    <div className='imm_blog'>
        {/* <h1>Testimonials</h1> */}
        <div className='imm_blog-container'>
            <div className='imm_blog-view_box'>
                <div id='imm_blog_testimonials'>
                    <Carousel variant="dark">
                        {sliderData.map((data, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <div className='imm_blog-container_card'>
                                        <img src={data.image} alt='images'></img>
                                        <p>{data.comments}</p>
                                        <h2>{data.name}</h2>
                                    </div>
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
