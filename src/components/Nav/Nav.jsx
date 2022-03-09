import React, { useState } from 'react'
import './nav.scss'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'

const Nav = () => {
  const [activeLink, setActiveLink] = useState('#header')
  return (
    <nav>
      <a href='#header' className={activeLink === '#header' ? 'active' : ''} onClick={() => setActiveLink('#header')}>
        <AiOutlineHome />
      </a>
      <a href='#about' className={activeLink === '#about' ? 'active' : ''} onClick={() => setActiveLink('#about')}>
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeLink === '#experience' ? 'active' : ''}
        onClick={() => setActiveLink('#experience')}>
        <BsBook />
      </a>
      <a
        href='#services'
        className={activeLink === '#services' ? 'active' : ''}
        onClick={() => setActiveLink('#services')}>
        <RiServiceLine />
      </a>
      <a
        href='#contacts'
        className={activeLink === '#contacts' ? 'active' : ''}
        onClick={() => setActiveLink('#contacts')}>
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav
