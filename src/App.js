import './styles/App.scss';
import Description from './Components/Description';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Skills from './Components/Skills';
import revealElements from './helpers/revealElements';
import { useEffect} from 'react';

const App = () => {
  useEffect(() => {
    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);

    return () => {
      window.removeEventListener('scroll', revealElements);
      window.removeEventListener('load', revealElements);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const intro = document.getElementsByClassName('Intro')[0];
      
      if (intro) {
        intro.classList.add('reveal');
      }
    }, 100);
  }, []);

  return (
    <div className="App">
      <Intro />
      <Description />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
