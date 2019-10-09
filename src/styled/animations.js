import { keyframes } from 'styled-components';

const animations = {
  centerBarOnAnimation: keyframes`
        0% {transform: translate(-50%, -250px)}
        100% {transform: translate(-50%, 0)}
    `,
  centerBarOffAnimation: keyframes`
        0% {transform: translate(-50%, 0)}
        100% {transform: translate(-50%, -250px)}
    `,
  newItemBarOnAnimation: keyframes`
    0% {transform: translateX(100%)}
    100% {transform: translateX(0)}
`,
  newItemBarOffAnimation: keyframes`
    0% {transform: translateX(0)}
    100% {transform: translateX(100%)}
`,
};

export default animations;
