import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {BiMessageSquareDetail} from 'react-icons/bi'


const Nav = () => {
  const [active, setActive] = useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>setActive('#experience')} className={active === '#experience'? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={()=>setActive('#portfolio')} className={active === '#portfolio'? 'active' : ''}><CgWebsite /></a>
      <a href="#contact" onClick={()=>setActive('#contact')} className={active === '#contact'? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
