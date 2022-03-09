import React from 'react'
import './portfolio.scss'
import IMG1 from '../../assets/sample.jpg'
import IMG2 from '../../assets/sample.jpg'
import IMG3 from '../../assets/sample.jpg'
import IMG4 from '../../assets/sample.jpg'
import IMG5 from '../../assets/sample.jpg'
import IMG6 from '../../assets/sample.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mu recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button button-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button button-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button button-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button button-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button button-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
            <a
              href='https://github.com/IPugachev/study-project-toxin'
              className='button button-primary'
              target='_blank'
              rel='noreferrer'>
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
