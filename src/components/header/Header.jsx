import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assects/me.jpg'

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Yujia Gu</h1>
        <h5 className="text-light">
          a Junior Frontend Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
