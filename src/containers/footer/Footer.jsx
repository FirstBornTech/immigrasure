import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPhoneAlt, FaGlobeAsia, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <div className='imm_footer'>
      <div className='imm_footer-container'>
      <Container fluid>
        <Row>
          <Col md={4} sm={4}>
            <div className='imm_footer-logo'>
              <h2>IMMIGRASURE</h2>
            </div>
          </Col>
          <Col md={4} sm={3}>
            <div className='imm_footer-links'>
              <a href='#home'>HOME</a>
              <a href='#study'>STUDY</a>
              <a href='#work'>WORK</a>
              <a href='#contact'>CONTACT</a>
            </div>
          </Col>
          <Col md={4} sm={5}>
            <div className='imm_footer-contact'>
              <div  className='imm_footer-contact_phone'>
                {/* <span className='imm_footer-contact_icon'> */}
                  <FaPhoneAlt color='#fff'></FaPhoneAlt>
                  {/* </span> */}
                <p>0943787474</p>
              </div>
              <div className='imm_footer-contact_web'>
                {/* <span className='imm_footer-contact_icon'> */}
                  <FaGlobeAsia color='#fff'></FaGlobeAsia>
                  {/* </span> */}
                <p>www.immigrasure.com</p>
              </div>
              <div className='imm_footer-contact_mail'>
                {/* <span className='imm_footer-contact_icon'> */}
                  <FaEnvelope color='#fff'></FaEnvelope>
                  {/* </span> */}
                <p>contact@immigrasure.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div className='imm_footer-copyright'>
        <div className='imm_footer-copyright_social'>
          <span><FaFacebookF color='#fff'></FaFacebookF></span>
          <span><FaInstagram color='#fff'></FaInstagram></span>
          <span><FaLinkedinIn color='#fff'></FaLinkedinIn></span>
          <span><FaTwitter color='#fff'></FaTwitter></span>
        </div>
        <p>@copyright. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
