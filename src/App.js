import classNames from 'classnames';
import { FC, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';
import RevealContext from './contexts/RevealContext';
import './styles/App.scss';

const revealClassName = 'reveal';

const App = () => {
  const [shouldRevealIntro, setShouldRevealTntro] = useState(false);
  const [shouldRevealDescription, setShouldRevealDescription] = useState(false);
  const [shouldRevealSkills, setShouldRevealSkills] = useState(false);

  const onScroll = useCallback((e) => {
  }, []);

  const revealInfo = useMemo(() => {
    return {
      intro: shouldRevealIntro,
      description: shouldRevealDescription,
      skills: shouldRevealSkills
    };
  }, [shouldRevealIntro, shouldRevealDescription, shouldRevealSkills]);

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     window.removeEventListener(onScroll, );
  //   }
  // }, [onScroll]);
  useEffect(() => {
    setTimeout(() => {
      shouldRevealSkills(true);
    }, 300);
  }, [shouldRevealSkills]);

  return (
    <RevealContext.Provider value={revealInfo}>
      <div className="App">
        <button onClick={() => {setShouldRevealSkills(true)}}>set</button>
        {/* <Intro className={classNames({'reveal': shouldRevealIntro})}/> */}
        {/* <Description className={classNames({'reveal': shouldRevealDescription})}/> */}
        <Skills />
        <ContactMe /> {/* show when footer is in viewport */}
        <Footer />
      </div>
    </RevealContext.Provider>
  );
}

const isItInViewport = () => {
  // https://alvarotrigo.com/blog/css-animations-scroll/
  // https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
  const appElement = document.getElementsByClassName('Description')[0];
  if (!appElement) return false;

  const bounding = appElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  if (bounding.top >= 0
    && bounding.left >= 0
    && bounding.right <= viewportWidth
    && bounding.bottom <= viewportHeight) {
      return true;
    }

    return false;
}

export default App;
