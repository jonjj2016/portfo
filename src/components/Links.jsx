import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Links = () => {
  return (
    <LinkWrapper>
      <div className='icon facebook'>
        <a href='https://www.facebook.com/Jonyan88'>
          <Icon name='facebook square' />
        </a>
      </div>
      <div className='icon linkedin'>
        <a href='https://www.linkedin.com/in/jon-martirosyan-3b6a93142/'>
          <Icon name='linkedin square' />
        </a>
      </div>
      <div className='icon github'>
        <a href='https://github.com/jonjj2016'>
          <Icon name='github square' />
        </a>
      </div>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 5%;
  bottom: 0%;
  margin-bottom: 2rem;
  height: 25vh;

  width: 5vw;
  z-index: 2;

  .icon {
    height: 100%;
    display: flex;

    position: relative;
    z-index: 3;
    font-size: 5rem;
    justify-content: center;
    align-items: center;
    color: #eee;
    a {
      outline: none;
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1080px) {
  }
`;

export default Links;
