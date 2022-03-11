import React from 'react'
import './footer.scss'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer__logo'>
        IPugachev
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#header'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contacts'>Contacts</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://twitter.com' target='_blank' rel='noreferrer'>
          <AiFillTwitterCircle />
        </a>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <AiOutlineInstagram />
        </a>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <AiFillFacebook />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; IPugachev. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
