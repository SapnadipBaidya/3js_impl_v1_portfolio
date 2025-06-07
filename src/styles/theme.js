
import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    background: '#DCDCDC',
    text: '#000000',
    primary: '#4A90E2',
    transitionMidpoint: '#f5f5f5', // Light gray for transition
  };
  
  export const darkTheme = {
    background: '#1F1F1F',
    text: '#EAEAEA',
    primary: '#4A90E2',
    transitionMidpoint: '#3c3c3c', // Mid-tone gray for transition
  };
  
  export const GlobalStyles = createGlobalStyle`
    body {
      background-color: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
      font-family: 'Poppins', sans-serif;
      transition: background-color 0.3s, color 0.3s;
    }
  `;