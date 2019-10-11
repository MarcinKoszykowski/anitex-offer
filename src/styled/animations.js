import { keyframes } from 'styled-components';

const centerBarOnAnimation = keyframes`
        0% {transform: translate(-50%, -250px)}
        100% {transform: translate(-50%, 0)}
    `;
const centerBarOffAnimation = keyframes`
        0% {transform: translate(-50%, 0)}
        100% {transform: translate(-50%, -250px)}
    `;
const newItemBarOnAnimation = keyframes`
    0% {transform: translateX(100%)}
    100% {transform: translateX(0)}
`;
const newItemBarOffAnimation = keyframes`
    0% {transform: translateX(0)}
    100% {transform: translateX(100%)}
`;

export {
  centerBarOnAnimation,
  centerBarOffAnimation,
  newItemBarOnAnimation,
  newItemBarOffAnimation,
};
