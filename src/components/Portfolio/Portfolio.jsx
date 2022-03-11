import React from 'react'
import './portfolio.scss'
import { data } from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mu recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map((item) => (
          <article className='portfolio__item' key={item.id}>
            <div className='portfolio__item-img'>
              <img src={item.img} alt='' />
            </div>
            <h3>{item.name}</h3>
            <div className='portfolio__item-cta'>
              <a href={item.git} className='button' target='_blank' rel='noreferrer'>
                Github
              </a>
              <a href={item.live} className='button button-primary' target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
