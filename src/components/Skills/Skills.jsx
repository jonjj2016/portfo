import React, { useState, useEffect } from 'react';
import { Line, Circle } from 'rc-progress';
import styled from 'styled-components';

let timer;

const Skills = ({ skill, end }) => {
  const [state, setState] = useState({
    start: 0,
    end: 90,
    clicked: false,
  });
  const porcentage = () => {
    setState({ ...state, start: state.start + 1 });
  };
  useEffect(() => {
    if (state.start < end) {
      timer = setTimeout(() => {
        porcentage();
      }, 30);
    } else {
      clearTimeout(timer);
    }
  }, [state.start]);

  //   const onClick = () => {
  //     if (state.start < end) {
  //       timer = setInterval(() => {
  //         porcentage();
  //       }, 30);
  //     } else {
  //       clearInterval(timer);
  //     }
  //     // setState({ ...state, clicked: true });
  //   };

  return (
    <Wrapper>
      <div className='content'>
        <p>{skill}</p>
        <span>{state.start}%</span>
      </div>

      <Circle percent={state.start} strokeWidth='4' strokeColor='#ff022c'></Circle>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  /* border: 2px solid red; */
  position: relative;
  .content {
    p {
      text-align: center;
    }
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    color: #eee;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 2rem;
  }
  @media only screen and (max-width: 600px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export default Skills;
