import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './AuthLayout.scss';

const AuthLayout = ({ children }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="auth-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 50 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.1 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
          },
        }}
      />
      <div className="auth-glass">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
