import React from 'react'
import './testimonials.scss'
import { data } from './data'
import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from cliens</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {data.map((article, index) => (
          <SwiperSlide className='testimonial' key={index}>
            <div className='client__avatar'>
              <img src={article.avatar} alt='avatar one' />
            </div>
            <h5 className='client__name'>{article.name}</h5>
            <small className='client__review'>{article.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
