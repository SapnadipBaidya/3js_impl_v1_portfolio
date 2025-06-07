import React from "react";
import styled from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, useTexture } from "@react-three/drei";

const ContactPage = () => {

  return (
      <PageContainer>
        <CanvasContainer>
          <Canvas>
            {/* Night Sky */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} fade />

            {/* Sun with Contact Details */}
            <SunWithContact position={[-10, 6, -10]} texture="/legacy-app/sun.jpg" />

            {/* Planets */}
            <Planet
              position={[-2, 0, 0]}
              texture="/legacy-app/mars.jpg"
              text="GitHub"
              url="https://github.com/SapnadipBaidya"
            />
            <Planet
              position={[2, 0, 0]}
              texture="/legacy-app/earth.jpg"
              text="LinkedIn"
              url="https://www.linkedin.com/in/sapnadipbaidya/"
            />

            <OrbitControls enableZoom={true} />
          </Canvas>
        </CanvasContainer>
      </PageContainer>
  );
};

// Sun with Contact Details
const SunWithContact = ({ position, texture }) => {
  const textureMap = useTexture(texture);
  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff" // Base white color
          emissive="#FFF8DC" // Warm white glow
          emissiveIntensity={0.025}
          map={textureMap}
        />
      </mesh>
      <Html>
        <p>sapnadip.baidya.official@gmail.com</p>
        <p>📱 +91 8013687055</p>
      </Html>
    </group>
  );
};

// Planet Component
const Planet = ({ position, texture, text, url }) => {
  const textureMap = useTexture(texture);
  const meshRef = React.useRef();

  const handleClick = () => window.open(url, "_blank");

  // Floating Animation
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(elapsedTime) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        map={textureMap}
        color="#ffffff" // Base white color
        emissive="#FFF8DC" // Warm white glow
        emissiveIntensity={0.025}
      />

      <Html>
        <p>{text}</p>
      </Html>
    </mesh>
  );
};

// Styled Components
const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background:  ${({ theme }) => theme.background};
  transition: background 0.5s ease;
  color: ${({ theme }) => theme.color};
`;

const CanvasContainer = styled.div`
  flex: 1;
  position: relative;
`;




export default ContactPage;
