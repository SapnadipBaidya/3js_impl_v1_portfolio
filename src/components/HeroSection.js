import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from 'styled-components';
import { device } from '../styles/breakpoint';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.text};
  margin: 0 1rem;
  text-decoration: none;

  @media ${device.mobile} {
    margin: 0.5rem 0;
  }
`;
const HeroSection = () => {
  const { theme } = useTheme(); // 'light' or 'dark'
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default light background
  const [textColor, setTextColor] = useState('#000000'); // Default light text color

  // Generate colors based on the theme
  const generateColors = () => {
    const lightColors = ['#4a90e2', '#f39c12', '#2ecc71', '#e74c3c', '#9b59b6']; // Bright colors for light theme
    const darkColors = ['#34495e', '#7f8c8d', '#c0392b', '#27ae60', '#8e44ad']; // Darker colors for dark theme
    return theme === 'light' ? lightColors : darkColors;
  };

  const updateDynamicStyles = () => {
    const colors = generateColors();
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    setBackgroundColor(selectedColor);
    setTextColor(theme === 'light' ? '#000' : '#fff'); // Text color based on theme
  };

  useEffect(() => {
    updateDynamicStyles();
  }, [theme]);

  return (
    <Hero backgroundColor={backgroundColor} textColor={textColor}>
      <CanvasContainer>
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <DynamicShapes colors={generateColors()} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </CanvasContainer>
      <HeroContent>
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer | Automotive Enthusiast | Problem Solver</p>
        <StyledLink to="/contact">Contact Me</StyledLink>
      </HeroContent>
    </Hero>
  );
};

// Dynamic Shapes Component
const DynamicShapes = ({ colors }) => {
  const shapes = generateShapes(15, colors);

  return (
    <>
      {shapes.map((shape, index) => (
        <DynamicShape
          key={index}
          position={shape.position}
          size={shape.size}
          color={shape.color}
          type={shape.type}
        />
      ))}
    </>
  );
};

// Generate Random Shapes
const generateShapes = (count, colors) => {
  const shapes = [];
  for (let i = 0; i < count; i++) {
    const position = [
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
      Math.random() * 10 - 5,
    ];
    const size = Math.random() * 1.5 + 0.5;
    const type = Math.random() > 0.5 ? 'box' : 'sphere';
    const color = colors[Math.floor(Math.random() * colors.length)]; // Only use theme-specific colors

    shapes.push({ position, size, type, color });
  }
  return shapes;
};

// Dynamic Shape Component
const DynamicShape = ({ position, size, color, type }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      {type === 'box' ? (
        <boxGeometry args={[size, size, size]} />
      ) : (
        <sphereGeometry args={[size / 2, 32, 32]} />
      )}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Hero = styled.section`
  position: relative;
   user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  transition: background-color 0.5s ease, color 0.5s ease;

  @media ${device.mobile} {
    padding: 1rem;
  }
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HeroContent = styled.div`
  z-index: 1;
  position: relative;

  h1 {
    font-size: 2.5rem;

    @media ${device.mobile} {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;

    @media ${device.mobile} {
      font-size: 0.9rem;
    }
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: white;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #eee;
  }

  @media ${device.mobile} {
    padding: 0.4rem 0.8rem;
  }
`;

export default HeroSection;