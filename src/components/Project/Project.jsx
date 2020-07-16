import React, { useState, useEffect } from 'react';
import NavMenu from '../NavMenu';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import { Wrapper, Slider, Image, Main } from './Styled';
import Loader from '../Loader/Loader';
import { projects } from '../../data/projects';
import { useParams } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Footer from '../Fotter/Footer';
import Drawer from '../Drawer/Drawer';

const Project = () => {
  const { projectId } = useParams();

  const [state, setState] = useState({ project: null });

  useEffect(() => {
    const project = projects.find((proj) => proj.code === projectId);
    // console.log(project);
    setState({ ...state, project });
  }, [projectId]);

  return (
    <Wrapper>
      <Drawer />
      <NavMenu />
      {state.project ? (
        <Main>
          <h1>{state.project.title}</h1>
          <hr />
          <Slider>
            <div className='menu'>
              <div className='circles'>
                <div className='circle red'></div>
                <div className='circle yellow'></div>
                <div className='circle green'></div>
              </div>
              <div className='title'>{state.project.title}</div>
            </div>
            <AwesomeSlider
              mobileTouch
              bullets={false}
              fillParent={false}
              animation='fallAnimation'
              startupScreen={<Loader></Loader>}
              buttons
              startup
              infinite={false}
              selected={0}
              style={{ height: '100%' }}
              onTransitionEnd={(e) => {
                console.log(e.currentMedia.name);
              }}>
              {state.project.images.map((image, index) => {
                return (
                  <div key={index}>
                    <Image src={image} alt='' />
                  </div>
                );
              })}
            </AwesomeSlider>
          </Slider>
          <div className='about'>
            <h2>About this project</h2>
            <hr />
            <p>{state.project.description}</p>
          </div>
          <div className='tech_sheet'>
            <h2>Technical Sheet</h2>
            <p>Code technologies I got involved with while working on this project.</p>
            <hr />
            <ul>
              {state.project.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className='buttons'>
            <Button as='a' href={state.project.githubUrl} color='black' secondary style={{ borderRadius: 0, fontSize: '1.5rem' }}>
              Source code <Icon style={{ marginLeft: '1rem' }} name='github' />
            </Button>
            {state.project.siteLink && (
              <Button as='a' href={state.project.siteLink} style={{ borderRadius: 0, fontSize: '1.5rem' }}>
                Visit website <Icon style={{ marginLeft: '1rem' }} name='world' />{' '}
              </Button>
            )}
          </div>
          <Footer />
        </Main>
      ) : (
        <div style={{ height: '100%' }}>Loading</div>
      )}
    </Wrapper>
  );
};

export default Project;
