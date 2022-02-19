import React, { useState, useCallback } from 'react';
import './style.css';

export default function App() {
  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <div style={{ width: 1280 }}>
        <div
          style={{
            width: '100%',
            height: 1,
            background: '#CCC',
          }}
        />
        <p>
          On year of 2020, Kernel Robotics was created by Srinivasan Nagarasan.
          Kernel Robotics has vision to develop best nature environments (like
          the Heaven) and healthy people (like the God) in Earth on or before
          2100.
        </p>
        Within 80 years timeline, Kernel Robotics has 5 phase of research and
        development to help people and save earth.
        <ul>
          <li>2020 - 2050 (Base Kernel like Farmer)</li>
          <li>2040 - 2070 (Super Kernel like Doctor)</li>
          <li>2050 - 2080 (Port Kernel like Space Traveler)</li>
          <li>2060 - 2090 (Host Kernel like Time Traveler)</li>
          <li>2070 - 2100 (Airth Kernel like God)</li>
        </ul>
        <section
          style={{
            border: 'thin solid #e1e1e1',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#f1f1f1',
          }}
        >
          <h1>Base Kernel (2020-2050)</h1>
          <p>
            Base Kernel is farmer robot for farming all kind of environment and
            manage healthy food production and food supplise chain managements.
            Some Basic functionality and skills include in the below
          </p>
          <ul>
            <li>Learning and Updates</li>
            <li>Weather Rain Managements</li>
            <li>Season Food Managements</li>
            <li>Farming</li>
            <li>Cultivation</li>
            <li>Harvesting</li>
            <li>Transportation</li>
            <li>Marketing</li>
            <li>Productivity</li>
          </ul>
          <p style={{ marginTop: 25, color: '#050' }}>
            Kernel Robotics has plan to release 8 version farmer robots. First
            Production Ready Droid robots will be launch at 2030. Final version
            Humanoid Robot will launch at 2050.
          </p>
        </section>
      </div>
    </div>
  );
}
