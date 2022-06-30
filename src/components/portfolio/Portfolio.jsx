import React from 'react'
import data from './data'
import './portfolio.css'


const Portfolio = () => {
  return (
   <section id="portfolio">
     <h5>My recent work</h5>
     <h2>Portfolio</h2>

     <div className="container portfolio-container">
       {data.map((item) => {
         const {id,img,title,github,demo} = item;
         return(
          <article className='portfolio-item' key={id}>
            <div className="portfolio-image">
              <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio-cta">
              <a href={github} className='btn'>github link</a>
              <a href={demo} className='btn btn-primary' target='_blank'>demo</a>
            </div>
        </article>
         )
       })}
     </div>
   </section>
  )
}

export default Portfolio
