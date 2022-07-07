import React, {useState, useEffect} from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import $ from 'jquery'
import './navbar.css'

const Menu = () => (
  <>
  <span className='active'><a href='#home'>Home</a></span>
  <span><a href='#jobs'>Jobs</a></span>
  <span><a href='#study'>Study</a></span>
  <span><a href='#contact'>Contact Us</a></span>
  </>
)

const Navbar = () => {
  const[toggleMenu, setToggleMenu] = useState(false)

  function activeNavbar() {
    var navbarContiner = $(".imm_navbar-links_container")
    navbarContiner.on('click', 'span', function(e){
      navbarContiner.find('span').removeClass('active')
      $(this).addClass('active')
    });
  }
  useEffect( () => {

    activeNavbar();
    $(window).on('resize', function() {setTimeout(() => {
      activeNavbar();  
      }, 500);
    });
  }, []);

  return (
    <div className='imm_navbar'>
      <div className='imm_navbar-links'>
        <div className='imm_navbar-links_logo'>
          <h2>IMMIGRASURE</h2>
        </div>
        <div className='imm_navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='imm_navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='imm_navbar-menu_container scale-up-center'>
            <div className='imm_navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
