import { keyframes } from 'styled-components';

// resize keyframes for loading animation
export const resize1 = () => keyframes`
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.5);
  }
  30% {
    transform: scale(1);
  }
`;

export const resize2 = () => keyframes`
  33% {
    transform: scale(1);
  }
  48% {
    transform: scale(1.5);
  }
  63% {
    transform: scale(1);
  }
`;
export const resize3 = () => keyframes`
  66% {
    transform: scale(1);
  }
  81% {
    transform: scale(1.5);
  }
  96% {
    transform: scale(1);
  }
`;
