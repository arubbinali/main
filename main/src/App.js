import './App.css';
import Particles from './components/background';

function App() {
  return (
    <div className="App">
      <Particles
        particleColors={['#ffffff', '#00aaff', '#66ccff']}
        particleCount={300}
        particleSpread={10}
        speed={0.15}
        particleBaseSize={120}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
  );
}

export default App;
