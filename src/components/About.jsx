import React from 'react';
import styled from 'styled-components';

import Links from './Links';
import Img from '../assets/svg/7.svg';
import NavMenu from './NavMenu';

const About = ({ toggle_drawer }) => {
  return (
    <Wrapper image={Img}>
      <NavMenu toggle_drawer={toggle_drawer} />
      <Links />

      <DestroyWrapper>
        <h2>
          <span>J</span>on Mart
          <span>i</span>
          <span>r</span>
          <span>o</span>
          syan
        </h2>
      </DestroyWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
  color: #eee;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 2rem;
    h2 {
      font-size: 3rem;
    }
  }
`;
const DestroyWrapper = styled.div`
  h2 {
    position: relative;
    margin: 0;
    font-size: 4rem;
    z-index: 1;
    font-weight: 900;
    color: #eee;
    overflow: hidden;

    span {
      color: #ff022c;
    }
    &:before {
      content: '';
      position: absolute;
      left: 110%;
      width: 80%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, #2f2f2f 5%, #2f2f2f 100%);
      animation: animate 6.5s linear forwards;
    }
  }
  @keyframes animate {
    0% {
      left: 110%;
    }

    100% {
      left: -320%;
    }
  }
  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export default About;
