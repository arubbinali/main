# Particles Component

A highly customizable 3D particles component built with React and OGL (OpenGL wrapper library).

## Installation

```bash
npm install ogl
```

## Important Note

This component requires React and TypeScript to be installed in your project:

```bash
npm install react react-dom
npm install --save-dev @types/react @types/react-dom typescript
```

## Usage

```tsx
import Particles from './Particles';

<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
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
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `particleCount` | number | 200 | Number of particles to render |
| `particleSpread` | number | 10 | How spread out the particles are |
| `speed` | number | 0.1 | Animation speed multiplier |
| `particleColors` | string[] | ['#ffffff', '#ffffff', '#ffffff'] | Array of hex color strings for particles |
| `moveParticlesOnHover` | boolean | false | Whether particles move based on mouse position |
| `particleHoverFactor` | number | 1 | Multiplier for mouse movement effect |
| `alphaParticles` | boolean | false | Use alpha transparency for particles |
| `particleBaseSize` | number | 100 | Base size of particles |
| `sizeRandomness` | number | 1 | Amount of random size variation |
| `cameraDistance` | number | 20 | Distance of camera from particles |
| `disableRotation` | boolean | false | Disable automatic rotation |
| `className` | string | - | Additional CSS classes to apply |

## Features

- **WebGL Rendering**: Efficient GPU-accelerated particle rendering using OGL
- **Customizable Colors**: Support for multiple particle colors with smooth blending
- **Interactive**: Optional mouse-based movement interaction
- **Performance**: Optimized with requestAnimationFrame and efficient cleanup
- **Responsive**: Automatically adapts to container size changes
- **TypeScript**: Full TypeScript support with detailed prop types

## Examples

### Basic White Particles
```tsx
<Particles particleCount={100} particleColors={['#ffffff']} />
```

### Colorful Moving Particles
```tsx
<Particles
  particleCount={300}
  particleColors={['#ff0000', '#00ff00', '#0000ff']}
  moveParticlesOnHover={true}
  speed={0.2}
/>
```

### Large Static Particles with Alpha
```tsx
<Particles
  particleCount={50}
  particleBaseSize={200}
  alphaParticles={true}
  disableRotation={true}
  speed={0.05}
/>
```

## Files

- **src/Particles.tsx**: Main component file
- **src/example.tsx**: Example usage demonstrating the component

## Technical Details

The component uses:
- **OGL**: Lightweight WebGL library for rendering
- **GLSL Shaders**: Custom vertex and fragment shaders for particle effects
- **React Hooks**: useEffect and useRef for lifecycle management
- **TypeScript**: Full type safety

### Shader Features
- Dynamic particle positioning in 3D space
- Animated movement with sine wave patterns
- Size variation based on distance (depth)
- Color interpolation with time-based effects
- Circle masking for particle shape

## Browser Compatibility

Requires WebGL support. Compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

ISC
