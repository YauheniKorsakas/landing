import React, { useMemo } from 'react';
import '../styles/Components/Skills.scss';
import SkillCard from './SkillCard';
import ContactMe from './ContactMe';

const Skills = () => {
  const cardData = useMemo(() =>
    skillsSource()
    .map(item => <SkillCard key={item.header} header={item.header} skills={item.skills}/>
  ), []);

  return (
    <section className='Skills'>
      {cardData}
      <ContactMe />
    </section>
  )
}

const skillsSource = () => [
  {
    header: 'Backend Skills',
    skills: ['C#', '.NET Core', 'ASP.NET Core', 'ASP.NET Core Web Api', 'MSTest', 'NUnit', 'Microservices', 'SignalR', 'Rabbit MQ']
  },
  {
    header: 'Frontend Skills',
    skills: ['Angular', 'React', 'SCSS', 'HTML5', 'JavaScript/Typescript', 'ngxs', 'Recoil', 'Luigi', 'Jasmine Framework']
  },
  {
    header: 'Common Skills',
    skills: ['English B2', 'Jira', 'Work Plan Creating', 'Dev patterns', 'Git Flow', 'Soft Skills']
  }
];

export default Skills