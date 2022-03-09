import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://instagram.com/' target='_blank' className='' rel='noreferrer'>
        <AiOutlineInstagram />
      </a>
      <a href='https://github.com/' target='_blank' className='' rel='noreferrer'>
        <AiOutlineGithub />
      </a>
      <a href='https://discord.com/' target='_blank' className='' rel='noreferrer'>
        <FaDiscord />
      </a>
    </div>
  )
}

export default HeaderSocials
