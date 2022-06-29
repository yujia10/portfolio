import React from 'react'
import './about.css'
import ME2 from '../../assects/me2.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {TbPlant} from 'react-icons/tb'

function About() {
  return (
   <section id='about'>
     <h5></h5>
     <h2></h2>

     <div className="container about-container">
       <div className="about-me">
         <div className="about-me-image">
           <img src={ME2} alt="me2" />
         </div>
       </div>

       <div className="about-content">
         <div className="about-cards">
           <article className="about-card">
             <FaAward className="about-icon"/>
             <h5>Experience</h5>
           </article>
           <article className="about-card">
             <VscFolderLibrary className="about-icon"/>
             <h5>Projects</h5>
           </article>
           <article className="about-card">
             <TbPlant className="about-icon"/>
             <h5>Hobbies</h5>
           </article>
         </div>

         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, repellat, distinctio earum sint iure eligendi a rem beatae consectetur accusantium aut dolor atque dolores autem minima adipisci, placeat suscipit possimus!
         </p>

         <a href="#contact" className='btn btn-primary'>Let's talk</a>
       </div>
     </div>
   </section>
  )
}

export default About
