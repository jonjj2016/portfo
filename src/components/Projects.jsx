import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import styled from 'styled-components';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import NavMenu from './NavMenu';
import Card from './ProjectCard/ProjectCard';
import Zoom from 'react-reveal/Zoom';
import Links from './Links';

const Projects = ({ state, toggle_drawer }) => {
  return (
    <Wrapper>
      <span>
        <Links />
      </span>
      <NavMenu toggle_drawer={toggle_drawer} />
      <div className='content'>
        <h2>React developer portfolio</h2>
        <p>My recent projects...</p>
        <hr />
        <div className='skills'></div>
        <div className='projects'>
          <Zoom cascade>
            {state.projects.map((project, index) => (
              <Card project={project} index={index} key={index} />
            ))}
          </Zoom>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  position: relative;
  width: 100vw;
  color: #8a8a8a;
  .content {
    width: 80%;
    height: 100%;

    margin: 0 auto;
    padding: 10rem 0;
    h2 {
      word-spacing: 1.5rem;
      letter-spacing: 0.3rem;
      font-size: 4rem;
      text-transform: uppercase;
    }
    hr {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    .projects {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      grid-gap: 2rem;
    }
  }
  @media only screen and (max-width: 800px) {
    .content {
      width: 100%;
      height: 100%;

      margin: 0 auto;

      padding: 8rem 1rem;

      h2 {
        word-spacing: 2px;
        letter-spacing: 0.3rem;
        font-size: 1.8rem;

        text-transform: uppercase;
      }
      hr {
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.3rem;
        letter-spacing: 1px;
      }
      .projects {
        display: grid;
        align-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
        margin-bottom: 4rem;
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    span {
      display: none;
    }
    .projects {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      grid-gap: 1rem;
      margin-bottom: 4rem;
    }
  }
`;
export default Projects;
