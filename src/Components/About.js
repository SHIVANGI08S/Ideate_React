import React from 'react';
import "../asset/about.css";
import Backgrounds from '../asset/image/Background.jpg';

export default function About() {
  return (
    <div className="con-body" style={{ backgroundImage:`url(${Backgrounds})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
      <div className="centered-content">
        <div className="content-slide">
          <h1>About us</h1>
          <p>Welcome to <strong>Ideate</strong> - the ultimate platform for sharing, discovering, and investing in groundbreaking startup ideas. Our mission is to empower the visionary thinkers and aspiring entrepreneurs of the world by providing a dynamic and supportive space to nurture their concepts into reality.</p>
        </div>
        <div className="content-slide">
          <h1>Our Vision</h1>
          <p>At Ideate, we envision a world where innovation knows no boundaries. We believe that every brilliant idea, no matter where it originates, deserves a chance to flourish. Our platform is built on the foundation of collaboration, inclusivity, and progress. We aspire to be the bridge that connects imaginative minds with the resources they need to transform their dreams into successful startups that can reshape industries and impact lives.</p>
        </div>
      </div>
    </div>
  );
}
