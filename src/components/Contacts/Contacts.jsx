import React, { useRef } from 'react'
import './contacts.scss'
import { AiFillMail } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_ae4zzlm', 'template_vrmblzu', form.current, 'KN4J3UDr93upBUtWP').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }

  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contacts__container'>
        <div className='contacts__options'>
          <article className='contacts__option'>
            <AiFillMail className='contacts__option-icon' />
            <h4>Email</h4>
            <h5>pi1691a@mail.com</h5>
            <a href='mailto:pi1691a@gmail.com' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
          <article className='contacts__option'>
            <BsTelegram className='contacts__option-icon' />
            <h4>Telegram</h4>
            <h5>Ilya_Pugachev</h5>
            <a href='https://telegram.me/Ilya_Pugachev' target='_blank' rel='noreferrer'>
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='button button-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacts
