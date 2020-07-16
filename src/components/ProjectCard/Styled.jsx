import styled from 'styled-components';
export const Wrapper = styled.div`
  height: 35vh;
  width: 100%;
  padding-top: 4%;
  border-radius: 1px;
  overflow: hidden;
  margin-bottom: 3rem;
  cursor: pointer;
  position: relative;
  .controllers {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 10rem;
    scale: 0;
  }
  .secondary_image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    transform: translateY(-260%);
    transition: 300ms;
    background-size: cover;
    position: relative;
    &:after {
      position: absolute;
      height: 100%;
      display: block;
      width: 100%;
      content: '';
      background-color: rgba(0, 0, 0, 0.8);
      top: 0;
      left: 0;
    }
  }
  &:hover {
    .secondary_image {
      transform: translateY(-101%);
      .controllers {
        transition: 500ms;
        scale: 1;
      }
    }
  }
  .main_image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    /* transform: translateX(1000px); */
  }
  .menu {
    height: 7%;
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
  }
`;
