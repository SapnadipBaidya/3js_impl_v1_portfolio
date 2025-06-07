import React, { Suspense } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Navbar from './components/Navbar';
import Skeleton from './components/Skeleton'; // Skeleton loader
import ErrorBoundary from './components/ErrorBoundary'; // Error handling fallback

// Lazy load components
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const Projects = React.lazy(() => import('./components/Projects'));
const Contact = React.lazy(() => import('./components/Contact'));

const App = () => {
  const { theme } = useTheme(); // 'light' or 'dark'

  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<Skeleton />}>
            <Routes>
              <Route path="/" element={<HeroSection theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </StyledThemeProvider>
  );
};

export default App;