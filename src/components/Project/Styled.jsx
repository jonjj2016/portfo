import styled from 'styled-components';

export const Wrapper = styled.div`
  /* height: 100vh; */
  width: 100vw;
  background-color: #2f2f2f;
  color: #8a8a8a;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Slider = styled.div`
  height: 55%;
  width: 100%;
  /* overflow: hidden; */
  /* background-color: #000; */
  border-radius: 5px;
  position: relative;
  padding-top: 1.3rem;
  .menu {
    height: 5%;
    min-height: 1.4rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    -webkit-box-shadow: -2px 21px 22px -10px rgba(0, 0, 0, 0.64);
    -moz-box-shadow: -2px 21px 22px -10px rgba(0, 0, 0, 0.64);
    box-shadow: -2px 21px 22px -10px rgba(0, 0, 0, 0.64);
    .title {
      font-weight: 700;
    }
    .circles {
      display: flex;

      .circle {
        height: 1rem;
        width: 1rem;
        border-radius: 100%;
        margin-right: 0.5rem;
      }
      .red {
        background-color: red;
      }
      .yellow {
        background-color: yellow;
      }
      .green {
        background-color: green;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    padding-top: 0;
    height: 50%;
    .slider {
      border: 3px solid red;
    }
  }
`;
export const Loader = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2f2f2f;
`;
export const Image = styled.img`
  object-fit: fit;

  height: 100%;
  width: 100%;
`;
export const Main = styled.div`
  width: 60%;
  padding: 4% 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  hr {
    margin: 2rem 0;
  }
  /* align-items: center; */
  h2 {
    font-size: 2rem;
    letter-spacing: 3px;
    word-spacing: 1rem;
  }
  p {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
  h1 {
    border-radius: 3px solid red;
    font-size: 5rem;
    font-weight: 300;
  }
  .about {
    align-self: flex-start;
    p {
      margin-bottom: 3rem;
    }
  }
  .buttons {
    width: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    /* border: 3qpx solid red; */
    justify-content: space-between;
  }
  .tech_sheet {
    align-self: flex-start;

    ul {
      list-style-type: circle;
      margin: 2rem 0;
      padding: 0 1rem;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 90%;

    margin-top: 6rem;
    hr {
      margin: 2rem 0;
    }
    h2 {
      font-size: 1.4rem;
      letter-spacing: 3px;
      word-spacing: 0.2rem;
    }
    p {
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
    h1 {
      font-size: 3rem;
      font-weight: 300;
    }
    .about {
      align-self: flex-start;
      p {
        margin-bottom: 2rem;
      }
    }
    .buttons {
      flex-direction: column;
      .button {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
`;
