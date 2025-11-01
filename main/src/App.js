import './App.css';
import LightRays from './components/background';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Light Rays Background */}
      <LightRays
  raysOrigin="bottom-center"
  raysColor="#ffffff"
  raysSpeed={1.5}
  lightSpread={0.8}
  rayLength={1.2}
  followMouse={true}
  mouseInfluence={0.1}
  noiseAmount={0.1}
  distortion={0.0}
  className="custom-rays"
  style={{ zIndex: 1 }} // 👈 stays below
/>




    </div>
  );
}

export default App;
