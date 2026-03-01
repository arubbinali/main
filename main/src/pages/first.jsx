import React from 'react';
import { Link } from 'react-router-dom';
import GridScan from '../components/GridScan';

function First() {
  return (
    <div style={{ 
      position: "relative",
      overflow: "hidden",
      backgroundColor: "black",
      minHeight: "100vh" 
    }}>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        <GridScan
          sensitivity={0.15}
          lineThickness={0.1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={1}
          lineStyle="solid"
          lineJitter={1}
          scanDirection="pingpong"
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          scanGlow={0.4}
          scanSoftness={2}
          scanPhaseTaper={0.9}
          scanDuration={4.0}
          scanDelay={1.0}
        />
      </div>

      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        color: 'white',
        textAlign: 'center'
      }}>
        <h1>First Page</h1>
        <p>Welcome to the grid.</p>
        <nav>
          <Link to="/main" style={{ color: '#FF9FFC', marginRight: '1rem' }}>Main</Link>
          <Link to="/about" style={{ color: '#FF9FFC' }}>About</Link>
        </nav>
      </div>
    </div>
  );
}

export default First;