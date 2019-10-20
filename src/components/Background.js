import styled from 'styled-components';
import backgoundImage from 'assets/images/background.jpg';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: url(${backgoundImage}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  z-index: -2;
`;

export default Background;
