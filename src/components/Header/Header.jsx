import React from 'react'
import './header.scss'
import CTA from './CTA'
import HeaderImg from '../../assets/header-img.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Ilya Puagchev</h1>
        <h5 className='text-light'>Frontend developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='header__image'>
          <img src={HeaderImg} alt='me' />
        </div>
        <a href='#contacts' className='scroll-down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
