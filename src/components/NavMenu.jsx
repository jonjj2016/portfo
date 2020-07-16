import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
const NavMenu = ({ toggle_drawer }) => {
  const onClick = () => alert('oppopo');
  return (
    <NavWrapper>
      <div data-aos='fade-right'>
        <Icon size='big' name='react' />
      </div>

      <div onClick={toggle_drawer}>
        <Icon size='big' name='bars' />
      </div>
    </NavWrapper>
  );
};
const NavWrapper = styled.div`
  height: 9rem;
  margin: 0 auto;
  color: #fff;
  width: 85%;
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
