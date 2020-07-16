import React from 'react';
import { personalInf } from '../../data/info';
import Skill from './Skills';
import styled from 'styled-components';
import Links from '../Links';
import NavBar from '../NavMenu';
import Slide from 'react-reveal/Slide';
// import Particles from 'react-particles-js';

const Skills = ({ toggle_drawer }) => {
  return (
    <Wrapper>
      <span>
        <Links />
      </span>
      <NavBar toggle_drawer={toggle_drawer} />

      <h1>
        Skills
        <hr />
      </h1>
      <div className='grid'>
        {personalInf.skills.map((skill, index) => {
          return <Skill key={index} skill={skill.item} end={skill.lecel} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #8a8a8a;
  h1 {
    color: #444;
    font-size: 10rem;
    letter-spacing: 20px;
    font-weight: 900;
    z-index: 0;
    position: absolute;
    transform: rotate(90deg);
    right: 5%;
    top: 30%;

    hr {
      color: inherit;
    }
  }
  .contentt {
    margin-top: 5rem;
    width: 55%;
    p {
      font-size: 1.3rem;
    }
  }
  .grid {
    margin: 2rem auto;
    margin-top: 7rem;
    display: grid;
    padding: 3rem 5rem;
    width: 60%;
    height: 100%;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 4rem;
  }
  width: 100vw;
  height: 100vh;
  overflow: scroll;

  align-items: center;
  @media only screen and (max-width: 600px) {
    span {
      display: none;
    }
    h1 {
      hr {
        display: none;
      }
      /* top: 10%; */
      width: 100%;
      /* background-color: lightblue; */
    }
    .grid {
      margin: 2rem auto;
      margin-top: 7rem;
      display: grid;
      padding: 3rem 1rem;
      width: 90%;
      height: 100%;
      align-items: center;
      border: none;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      grid-gap: 2rem;
    }
  }
`;
export default Skills;
