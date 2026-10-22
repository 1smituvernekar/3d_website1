import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import Fan3D from "./fan3d";
import "./hero.css";

const Hero = () => {
  const [active, setActive] = useState(false);

  return (
    <section className="hero">

      {/* BACKGROUND */}
      <div className="hero-grid"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      {/* =========================
          NAV / TOP LABEL
      ========================= */}

      <div className="hero-top">

        <div className="brand-mark">
          <span></span>
          AIRFLOW
        </div>

        <div className="hero-number">
          01 / 04
        </div>

      </div>


      {/* =========================
          LEFT CONTENT
      ========================= */}

      <div className="hero-content">

        <div className="eyebrow">
          <span className="eyebrow-line"></span>
          SMART AIR TECHNOLOGY
        </div>


        <h1>
          POWERFUL
          <br />
          <span>AIR.</span>
        </h1>


        <p className="description">
          Engineered for powerful airflow.
          Designed for effortless living.
          Experience intelligent cooling
          with our next-generation fan.
        </p>


        <div className="hero-actions">

          <button
            className="primary-btn"
            onClick={() => setActive(!active)}
          >
            <span>
              {active ? "Fan Active" : "Explore Fan"}
            </span>

            <span className="arrow">
              →
            </span>
          </button>


          <div className="watch-link">
            <span className="play-icon">
              ▶
            </span>

            <span>
              See how it works
            </span>
          </div>

        </div>


        {/* STATS */}

        <div className="hero-stats">

          <div className="stat">
            <strong>360°</strong>
            <span>Airflow</span>
          </div>

          <div className="stat">
            <strong>12</strong>
            <span>Speed Levels</span>
          </div>

          <div className="stat">
            <strong>24h</strong>
            <span>Smart Control</span>
          </div>

        </div>

      </div>


      {/* =========================
          3D FAN
      ========================= */}

      <div className="hero-3d">

        {/* Decorative circle */}

        <div className="fan-orbit orbit-one"></div>
        <div className="fan-orbit orbit-two"></div>


        {/* 360 BADGE */}

        <div className="air-badge">

          <div className="badge-circle">
            360°
          </div>

          <div>
            <small>PRECISION</small>
            <strong>AIRFLOW</strong>
          </div>

        </div>


        {/* SMART MOTOR LABEL */}

        <div className="motor-label">

          <span className="label-number">
            01
          </span>

          <div>
            <small>ENGINEERED WITH</small>
            <strong>SMART MOTOR</strong>
          </div>

        </div>


        {/* CANVAS */}

        <Canvas
          camera={{
            position: [5, 5, 5],
            fov: 25
          }}
        >

          <ambientLight intensity={2.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <directionalLight
            position={[-5, 2, 3]}
            intensity={1}
          />

          <Fan3D />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            
          />

        </Canvas>

      </div>


      {/* =========================
          BOTTOM INFO
      ========================= */}

      <div className="hero-bottom">

        <div className="scroll-indicator">

          <span className="scroll-line"></span>

          <span>
            SCROLL TO DISCOVER
          </span>

        </div>


        <div className="bottom-text">
          QUIET.
          <span> POWERFUL.</span>
          INTELLIGENT.
        </div>

      </div>

    </section>
  );
};

export default Hero;