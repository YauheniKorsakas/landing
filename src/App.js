import classNames from 'classnames';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import './styles/App.scss';

const revealClassName = 'reveal';

const App = () => {
  const [shouldRevealIntro, setShouldRevealTntro] = useState(false);
  const [shouldRevealDescription, setShouldRevealDescription] = useState(false);

  const onScroll = useCallback((e) => {
  }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);

  //   return () => {
  //     window.removeEventListener(onScroll, );
  //   }
  // }, [onScroll]);
  useEffect(() => {
    setTimeout(() => {
      setShouldRevealTntro(true);
    }, 300);
  }, []);

  return (
    <div className="App">
      <button onClick={() => {setShouldRevealDescription(true)}}>set</button>
      {/* <Intro className={classNames({'reveal': shouldRevealIntro})}/> */}
      <Description className={classNames({'reveal': shouldRevealDescription})}/>
      {/* <Skills /> */}
      {/* <Footer /> */}
    </div>
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
