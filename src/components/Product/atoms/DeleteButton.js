import styled from 'styled-components';
import Button from 'components/Button';

const DeleteButton = styled(Button)`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background-size: 55% 55%;
  border-width: 3px;
  transition: opacity 0.5s, visibility 0.5s;
`;

export default DeleteButton;
