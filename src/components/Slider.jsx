import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import About from './About';
import Projects from './Projects';
import Loader from './Loader/Loader';
import NavMenu from './NavMenu';
import Bio from './Bio';
import Skills from './Skills/Skills1';
import Drawer from './Drawer/Drawer';

const Slider = ({ state, changeDir, toggle_drawer, onMenuItemClick }) => {
  const [current, setCurrent] = useState('main');
  const onTransitionRequest = (e) => {
    const { currentIndex, currentMedia, eventName, nextIndex, nextMedia, nextSlide, slides } = e;
    changeDir(nextMedia);
  };
  return (
    <div style={{ backgroundColor: '#000', position: 'relative' }}>
      <Drawer current={current} onMenuItemClick={onMenuItemClick} isopen={state.drawer_isopen} toggle_drawer={toggle_drawer} />
      <div style={{ position: 'relative', zIndex: 1, top: 0, left: 0, height: '100vh' }}>
        <AwesomeSlider
          bullets={false}
          fillParent
          startupScreen={<Loader />}
          buttons
          startup
          fillParent={true}
          style={{ height: '100vh' }}
          animation='cubeAnimation'
          onTransitionRequest={onTransitionRequest}
          // buttonContentLeft={() => alert('ko')}
          // buttonContentRight='Next'
          selected={state.page}
          onTransitionEnd={(e) => {
            setCurrent(e.currentMedia.name);
          }}>
          <div name='main' style={{ height: '100%', width: '100%' }}>
            <About toggle_drawer={toggle_drawer} />
          </div>
          <div name='about' style={{ height: '100%', width: '100%', backgroundColor: '#222' }}>
            <Bio toggle_drawer={toggle_drawer} />
          </div>
          <div name='projects'>
            <Projects toggle_drawer={toggle_drawer} state={state}></Projects>
          </div>
          <div name='skills'>
            <Skills toggle_drawer={toggle_drawer} />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Slider;
