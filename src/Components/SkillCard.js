import '../styles/Components/SkillCard.scss';
import React from 'react'

const SkillCard = ({ header = "", skills = [] }) => {
  return (
    <section className='SkillCard'>
      <h3>{header}</h3>
      <hr />
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}

export default SkillCard