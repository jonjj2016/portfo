import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';

const NavMenu = ({ toggle_drawer, onRouteChange }) => {
  const { projectId } = useParams();
  const history = useHistory();
  const onchangeRoute = () => {
    onRouteChange();
    history.push('/');
  };
  console.log(projectId);
  if (projectId) {
    return (
      <NavWrapper>
        <div onClick={onchangeRoute} data-aos='fade-right'>
          <Icon size='big' name='th' />
        </div>
      </NavWrapper>
    );
  }
  return (
    <NavWrapper>
      <div data-aos='fade-right'>
        <Icon size='big' name='react' />
      </div>

      <div data-aos='fade-left' onClick={toggle_drawer}>
        <Icon size='big' name='bars' />
      </div>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  height: 9rem;
  margin: 0 auto;
  color: #fff;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2000;
  background-color: transparent;
  top: 0;
  left: 0;
  right: 0;

  div {
    cursor: pointer;
  }
`;
export default NavMenu;
