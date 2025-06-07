import React from 'react';
import styled, { keyframes } from 'styled-components';

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonBlock />
      <SkeletonBlock />
      <SkeletonBlock />
      <SkeletonBlock />
      <SkeletonBlock />
    </SkeletonContainer>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const SkeletonBlock = styled.div`
  height: 15vh;
  width: 100%;
  background: #ddd;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  animation: ${shimmer} 1.5s infinite;
  border-radius: 4px;
`;

export default Skeleton;