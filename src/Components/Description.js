import '../styles/Components/Description.scss';
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

const Description = () => {
  const listItems = [
    <>Monitor your health. No one will take care of you except yourself. I do it because I want <span>to...</span></>,
    <>Be able to get better every day <span>because...</span></>,
    <>I want to know how far I can go, striving for the ideal</>
  ];
  const postulates = listItems.map((item, i) => <li key={i}><AiOutlineCheck /> {item}</li>);

  return (
    <section className='Description'>
      <p className='greetings'>
        Greetings. My name is Zhenya and I am a full stack web developer from Belarus. Being born in 1996,
        I have already managed to know different aspects of life in general and development, but it is still not enough to say
        that I am wise and enlightened. Every day I try to become better and I believe that the meaning of life for each person
        is individual. And the life postulates that I adhere to are as <span>follows:</span>
      </p>
      <ul>
        {postulates}
      </ul>
      <p className='skills-intro'>
        I have been working as a programmer since 2017. During this time, mostly evolving myself as backend developer, I managed to acquire many skills. 
        Here are <span>the main ones:</span></p>
    </section>
  )
}

export default Description