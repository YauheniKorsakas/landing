import '../styles/Components/SkillCard.scss';
import React, { useContext } from 'react'
import RevealContext from '../contexts/RevealContext';
import classNames from 'classnames';

const SkillCard = ({ header = "", skills = []}) => {
  const reveal = useContext(RevealContext);

  return (
    <section className={classNames('SkillCard', { 'reveal': reveal.skills })}>
      <h3>{header}</h3>
      <hr />
      <ul>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  )
}

export default SkillCard