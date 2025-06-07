import React, { createContext, useState, useContext } from 'react';

// Create the ThemeContext
const ThemeContext = createContext();

// ThemeProvider to wrap the app
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default theme

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};