// src/components/HeroSection.tsx
import React from 'react';
import './HeroSection.css'; // Import the CSS for the Hero Section

// Define the HeroSection functional component
function HeroSection() {
  return (
    // Main section element for the hero section
    <section className="hero-section">
      {/* This div will contain the dynamic background effect */}
      {/* We will position and style this using CSS */}
      <div className="hero-background-effect"></div>

      {/* Container for the main content (headline, subheadline, button) */}
      {/* This container will be positioned above the background effect */}
      <div className="container hero-content"> {/* Added hero-content class for specific styling */}
        {/* Headline */}
        <h1 className="hero-headline">
          Your Company's Catchy Headline Here {/* Replace with your actual headline */}
        </h1>

        {/* Subheadline or Description */}
        <p className="hero-subheadline">
          A brief description of what your company does or offers,
          highlighting the main benefit for your customers. {/* Replace with your actual description */}
        </p>

        {/* Call to Action Button */}
        {/* You can change the href to point to a contact page or form */}
        <a href="#contact" className="cta-button">
          Get Started Today {/* Replace with your desired button text */}
        </a>

        {/* Optional: Add an image or illustration here */}
        {/* This would also likely be positioned relative to the hero-section and above the background effect */}
        {/* <div className="hero-image">
          <img src="/path/to/your/image.png" alt="Hero Illustration" />
        </div> */}
      </div>
    </section>
  );
}

// Export the component so it can be used in other files (like App.tsx)
export default HeroSection;
