import React from 'react';
import '../styles/Components/Intro.scss';
import mainAvatar from '../assets/mainAvatar.jpg';
import classNames from 'classnames';

const Intro = ({ className = '' }) => {
  return (
    <section className={classNames('Intro', className)}>
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