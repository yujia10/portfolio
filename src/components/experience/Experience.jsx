import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container">
        <div className="experience-container">
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>HTML</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>CSS</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>Node.js</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>TypeSript</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>Bootstrap</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>React.js</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>Stimulus.js</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>RESTful API</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>SQL</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>Ruby on Rails</h4>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className="experience-icon"/>
              <h4>Git and Github</h4>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
