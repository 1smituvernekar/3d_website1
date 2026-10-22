import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
} from "@react-three/drei";

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


      {/* TOP */}
      <header className="hero-top">

        <div className="brand-mark">
          <span></span>
          AIRFLOW
        </div>

        <div className="hero-number">
          01 / 04
        </div>

      </header>


      {/* LEFT CONTENT */}
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


        {/* BUTTONS */}
        <div className="hero-actions">

          <button
            className={`primary-btn ${active ? "active" : ""}`}
            onClick={() => setActive(!active)}
          >
            <span>
              {active ? "Fan Active" : "Start Fan"}
            </span>

            <span className="arrow">
              →
            </span>
          </button>


          <button className="watch-link">
            <span className="play-icon">
              ▶
            </span>

            See how it works
          </button>

        </div>


        {/* STATUS */}
        <div className="fan-status">

          <div
            className={`status-dot ${
              active ? "online" : ""
            }`}
          ></div>

          <div>
            <span>
              FAN STATUS
            </span>

            <strong>
              {active ? "RUNNING" : "STANDBY"}
            </strong>
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


      {/* 3D AREA */}
      <div className="hero-3d">

        {/* DECORATIVE RINGS */}
        <div className="fan-ring ring-one"></div>
        <div className="fan-ring ring-two"></div>
        <div className="fan-ring ring-three"></div>


        {/* BADGE */}
        <div className="air-badge">

          <div className="badge-circle">
            360°
          </div>

          <div>
            <small>PRECISION</small>
            <strong>AIRFLOW</strong>
          </div>

        </div>


        {/* MOTOR LABEL */}
        <div className="motor-label">

          <span className="label-number">
            01
          </span>

          <div>
            <small>ENGINEERED WITH</small>
            <strong>SMART MOTOR</strong>
          </div>

        </div>


        {/* LIVE LABEL */}
        <div className="live-label">

          <span
            className={`live-dot ${
              active ? "active" : ""
            }`}
          ></span>

          <div>
            <small>SYSTEM</small>

            <strong>
              {active ? "ACTIVE" : "READY"}
            </strong>
          </div>

        </div>


        {/* THREE.JS */}
        <Canvas
          camera={{
            position: [5, 5, 5],
            fov: 25,
          }}
        >

          {/* LIGHT */}
          <ambientLight intensity={2} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <directionalLight
            position={[-5, 2, 3]}
            intensity={1}
          />

          {/* ENVIRONMENT */}
          <Environment preset="studio" />

          {/* FAN */}
          <Fan3D />

          {/* CAMERA CONTROL */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />

        </Canvas>

      </div>


      {/* BOTTOM */}
      <div className="hero-bottom">

        <div className="scroll-indicator">

          <span className="scroll-line"></span>

          <span>
            SCROLL TO DISCOVER
          </span>

        </div>


        <div className="bottom-text">
          QUIET.
          <span>POWERFUL.</span>
          INTELLIGENT.
        </div>

      </div>

    </section>
  );
};

export default Hero;





