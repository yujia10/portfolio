import React, {useState} from 'react'
import './about.css'
import ME2 from '../../assets/me2.JPG'
import {FaAward} from 'react-icons/fa'

const aboutData = [
  {
    id:1,
    title:'Experience',
    description:'I have 8 years experience of website/software localization and also used to be a childcare teacher. I have been teaching myself front-end development for a while and recently finished a web development bootcamp. ',
  },
  {
    id:2,
    title:'Projects',
    description: 'My recent projects are built with Ruby on Rails and React.js, including a car rental website, a childcare search engine, a note-taking app and a plants manager.'
  },
  {
    id:3,
    title:'Hobbies',
    description: 'I enjoy cooking and baking with my family. In my spare time, I love playing piano and caring for my succulents.'
  }
]

function About() {
  const [value, setValue] = useState(0)

  const {description} = aboutData[value]

  return (
   <section id='about'>

     <div className="container about-container">
       <div className="about-me">
         <div className="about-me-image">
           <img src={ME2} alt="me2" />
         </div>
       </div>

       <div className="about-content">
        <div className='about-cards'>
        {aboutData.map((item,index)=>{
         return (
          <article className={`about-card ${index === value && 'card-active'}`}
          key={item.id}
          onClick = {()=>setValue(index)}>
            <FaAward className="about-icon"/>
            <h5>{item.title}</h5>
          </article>
          )
          })
        }
        </div>
        <p>{description}</p>

         <a href="#contact" className='btn btn-primary'>Let's talk</a>
       </div>
     </div>
   </section>
  )
}

export default About
