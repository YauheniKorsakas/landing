import '../styles/Components/Footer.scss';
import ContactMe from './ContactMe';
import React from 'react';

const Footer = () => {
  return (
    <section className='Footer'>
      <a href="https://www.linkedin.com/in/yauheni-korsakas-94bb91197/" target='_blank' rel="noreferrer">Linked In</a>
      <a href="mailto:yauheni.korsakas@gmail.com">Gmail</a>
      <a href="skype:live:yauheni.korsakas?chat">Skype</a>
      <ContactMe />
    </section>
  )
}

export default Footer