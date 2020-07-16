import React from 'react';
import { personalInf } from '../data/info';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import Links from './Links';

const Bio = ({ toggle_drawer }) => {
  return (
    <Wrapper>
      <NavMenu toggle_drawer={toggle_drawer} />
      <span>
        <Links />
      </span>
      <h1>
        About
        {/* <hr /> */}
      </h1>
      <p>{personalInf.introduction}</p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  color: #eee;
  color: #8a8a8a;
  position: relative;
  h1 {
    color: #444;
    font-size: 10rem;
    letter-spacing: 20px;
    font-weight: 900;
    z-index: 0;
    position: absolute;
    transform: rotate(90deg);
    right: 0%;
    top: 30%;
    hr {
      color: inherit;
    }
  }
  p {
    position: relative;
    z-index: 5;
    width: 70%;
    padding: 6rem;
    line-height: 2;
    font-size: 1.7rem;
    letter-spacing: 3px;
    word-spacing: 0.7rem;
    margin: 0 auto;
    /* border: 2px solid red; */
    border-left: 2px solid #8a8a8a;
  }
  @media only screen and (max-width: 1200px) {
    height: 100vh;
    margin-top: 5rem;
    overflow-y: scroll;
    p {
    }
  }
  @media only screen and (max-width: 800px) {
    height: 100vh;
    margin-top: 10rem;
    overflow-y: scroll;
    span {
      display: none;
    }
    p {
      width: 90%;
      font-size: 1.2rem;
      padding: 0.1rem;
      border: none;
      line-height: 1.5;
      margin: 4rem auto;
    }
    h1 {
      color: #333;
    }
  }
`;

export default Bio;
