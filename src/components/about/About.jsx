import React, {useState} from 'react'
import './about.css'
import ME2 from '../../assets/me2.JPG'
import {FaAward} from 'react-icons/fa'

const aboutData = {
  Experience: 'I have 8 years experience of website/software localization and also used to be a childcare teacher. I have been teaching myself front-end development for a while and recently just finished a web development bootcamp. ',
  Projects: 'My recent projects include a car rental website and a childcare search engine (with Ruby on Rails), a note-taking app (with React.js) and a plant manager (with React.js)',
  Hobbies: 'I enjoy cooking and baking with my family. In my spare time, I love playing piano and caring for my succulents'
}

function About() {
  const [cardActive, setCardActive] = useState('false')
  const handleClick = ()=>{
    setCardActive(!cardActive)
  }

  return (
   <section id='about'>


     <div className="container about-container">
       <div className="about-me">
         <div className="about-me-image">
           <img src={ME2} alt="me2" />
         </div>
       </div>

       <div className="about-content">
         <div className="about-cards">
           <article className={cardActive ? 'about-card card-active' : 'about-card'} onClick={handleClick}>
             <FaAward className="about-icon"/>
             <h5>Experience</h5>
           </article>
           <article className= 'about-card'>
           <FaAward className="about-icon"/>
             <h5>Projects</h5>
           </article>
           <article className= 'about-card'>
           <FaAward className="about-icon"/>
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
