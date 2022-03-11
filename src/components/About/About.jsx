import React from 'react'
import './about.scss'
import ME from '../../assets/about.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='AboutImage' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <AiOutlineProject className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit eos error nemo, quidem dicta quia
            nam, non dolore culpa nesciunt facere reprehenderit ducimus officia alias, qui veritatis eius. Id.
          </p>
          <a href='#contacts' className='button button-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
