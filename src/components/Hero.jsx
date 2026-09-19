import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FurryTorus from "./FurryTorus";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero-bg" />

      {/* Left Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">DIGITAL EXPERIENCE STUDIO</p>

        <h1 className="hero-title">
          Digital
          <br />
          products
          <br />
          <span>that move.</span>
        </h1>

        <p className="hero-description">
          We create digital experiences, brands and products that connect people
          with ideas.
        </p>

        <div className="hero-actions">
          <button className="hero-button">
            Explore our work
            <span>↗</span>
          </button>
        </div>
      </div>

      {/* 3D Object */}
      <div className="hero-visual">
        <Canvas
          className="hero-canvas"
          camera={{
            position: [0, 0, 6],
            fov: 45,
          }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: true,
          }}
        >
          <Suspense fallback={null}>
            {/* Soft ambient light */}
            <ambientLight intensity={0.45} />

            {/* Main light */}
            <directionalLight position={[-3, 4, 5]} intensity={3} />

            {/* Purple light */}
            <pointLight
              position={[3, 0, 3]}
              intensity={4}
              color="#a855f7"
              distance={8}
            />

            <FurryTorus />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
