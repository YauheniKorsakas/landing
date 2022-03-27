import '../styles/Components/Intro.scss';
import React from 'react'
import mainAvatar from '../assets/mainAvatar.jpg';

const Intro = () => {
  return (
    <section className='Intro'>
      <div className="text-presentation-container">
        <section className="details">
          <span className="full-name">Yauheni Korsakas</span>
          <span className="job-title">Full Stack Web Developer</span>
        </section>
        <span className='quote'>Push yourself, whatever it means for you. (c)</span>
      </div>
      <img src={mainAvatar} alt="Yauheni Korsakas" />
    </section>
  )
}

export default Intro