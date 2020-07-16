import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <div className='content'>
        <h2>Let's talk</h2>
        <p>
          Wanna get in touch or talk about a job? <br /> Feel free to contact me via email at <a href='mailto: jonmartirosyan1988@gmail.com'>jonmartirosyan1988@gmail.com</a> or call me <a href='tel:+86-15928661440'>159-286-614-40</a>
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    text-align: center;

    width: 100%;
  }
  @media only screen and (min-width: 1100px) {
    .content {
      text-align: center;

      width: 40%;
    }
  }
`;

export default Footer;
