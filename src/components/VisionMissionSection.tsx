// src/components/VisionMissionSection.tsx
// import React from 'react';
import './VisionMissionSection.css'; // Import the CSS for this section

// Define the VisionMissionSection functional component
function VisionMissionSection() {
  return (
    // Main section element for Vision and Mission
    <section className="vision-mission-section">
      {/* Container for content */}
      <div className="container">
        {/* Vision Sub-section */}
        <div className="vision">
          <h2 className="section-title">Our Vision</h2>
          <p>
            {/* Placeholder Vision Text */}
            To be a leading force in neurological assessment technology,
            transforming patient care through innovative AI and multimodal analysis.
            We envision a future where early and accurate diagnosis
            significantly improves outcomes for individuals with neurological conditions.
          </p>
        </div>

        {/* Mission Sub-section */}
        <div className="mission">
          <h2 className="section-title">Our Mission</h2>
          <p>
            {/* Placeholder Mission Text */}
            To develop and deploy cutting-edge AI solutions that provide
            quantitative, objective, and accessible assessments for neurological disorders.
            We are committed to empowering clinicians and researchers with tools
            that enhance understanding, accelerate research, and ultimately
            improve the lives of patients worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

// Export the component
export default VisionMissionSection;
