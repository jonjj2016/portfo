import React, { useState } from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';

const Drawer = ({ current, toggle_drawer, isopen, onMenuItemClick }) => {
  console.log(current);

  const [count, setCount] = useState(0);

  return (
    <Wrapper isopen={isopen}>
      <div className='dimmer' onClick={toggle_drawer}></div>
      <div className='inner'>
        {/* <div className='drawerContent'>
            
        </div> */}
        <Zoom top cascade when={isopen}>
          <div className='menuContent'>
            <h2 onClick={() => onMenuItemClick('main')}>Main</h2>

            <h2 onClick={() => onMenuItemClick('about')}>About</h2>

            <h2 onClick={() => onMenuItemClick('projects')}>Projects</h2>
            <h2 onClick={() => onMenuItemClick('skills')}>Skills</h2>
          </div>
        </Zoom>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  color: #eee;
  height: 100vh;
  width: 100vw;
  transform: translateY(${(props) => (props.isopen ? '0' : '-100%')});
  .inner {
    position: relative;

    z-index: 20;
    height: 70%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 4px solid red; */
    .menuContent {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      h2 {
        height: 100%;
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2rem;
        align-items: center;
        font-size: 5rem;

        text-transform: uppercase;
        &:hover {
          cursor: pointer;
          transition: 500ms;
          background-color: #333;
        }
      }
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      .menuContent {
        h2 {
          font-size: 3rem;
        }
      }
    }
  }
  .dimmer {
    height: 100vh;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${(props) => (props.isopen ? 'rgba(0, 0, 0, 0.6)' : 'transparent')};
  }
  .drawerContent {
    width: 400px;
    height: 700px;
    background-color: #999;
  }
`;
export default Drawer;
