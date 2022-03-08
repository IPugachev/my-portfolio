import React from 'react'
import About from './components/About'
import Contacts from './components/Contacts'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  )
}
