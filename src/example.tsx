import React from 'react';
import Particles from './Particles';

const Example: React.FC = () => {
  return (
    // Use full viewport so Particles can cover the entire screen
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Particles
        fullScreen={true}
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
};

export default Example;
