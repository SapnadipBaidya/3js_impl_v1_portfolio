// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { device } from '../styles/breakpoint';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Nav>
      <Brand>Sapnadip Baidya</Brand>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <ToggleButton onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </ToggleButton>
      </NavLinks>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media ${device.mobile} {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Brand = styled.h1`
  font-size: 1.5rem;

  @media ${device.mobile} {
    margin-bottom: 1rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  margin: 0 1rem;
  text-decoration: none;

  @media ${device.mobile} {
    margin: 0.5rem 0;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    transform: scale(1.1);
  }
`;

export default Navbar;