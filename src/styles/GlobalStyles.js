
import { createGlobalStyle, keyframes } from 'styled-components';
import { device } from './breakpoint';

// Define the keyframes for slow-to-fast transition
const slowToFastTransition = keyframes`
  0% {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
  50% {
    background-color: ${({ theme }) => theme.transitionMidpoint};
    color: ${({ theme }) => theme.text};
  }
  100% {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

// Apply the animation in GlobalStyles
export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: 'Poppins', sans-serif;
    transition: background-color 1.5s ease-in-out, color 1.5s ease-in-out;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3 {
    margin: 0;
  }

  h1 {
    font-size: 2.5rem;
    @media ${device.tablet} {
      font-size: 2rem;
    }
    @media ${device.mobile} {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }
`;

// styles/theme.js
export const theme = {
  colors: {
    primary: '#4A90E2',
    background: '#1F1F1F',
    text: '#EAEAEA',
  },
};