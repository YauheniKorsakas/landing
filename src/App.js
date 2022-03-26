import classNames from 'classnames';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import './styles/App.scss';

const App = () => {
  const appElement = useRef(null);
  const descriptionElement = useRef(null);

  const onScroll = useCallback((e) => {
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener(onScroll);
    }
  }, [onScroll]);

  return (
    <div ref={appElement} className="App">
      <Intro />
      <Description ref={descriptionElement} />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

const isItInViewport = () => {
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
