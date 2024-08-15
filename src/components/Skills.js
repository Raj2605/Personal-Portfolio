import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="row skills-heading justify-content-center" style={{marginBottom: '40px',fontWeight: 'bold',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>Skills</h2>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-3 skill-box">➣ Content Strategy</div>
          <div className="col-md-3 skill-box">➣ Technical Writing</div>
          <div className="col-md-3 skill-box">➣ SEO Optimization</div>
          <div className="col-md-3 skill-box">➣ Social Media Content</div>
        </div>
        <div className="row justify-content-center zigzag">
          <div className="col-md-3 skill-box">➣ Website Content</div>
          <div className="col-md-3 skill-box">➣ Analytics & Research</div>
          <div className="col-md-3 skill-box">➣ End-to-End Content Management</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
