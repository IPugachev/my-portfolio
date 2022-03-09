import React from 'react'
import CV from '../../assets/test.txt'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='button'>
        Download CV
      </a>
      <a href='#contacts' className='button button-primary'>
        Let's talk
      </a>
    </div>
  )
}

export default CTA
