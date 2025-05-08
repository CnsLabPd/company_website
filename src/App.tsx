// src/App.tsx
//import React from 'react';
import './App.css'; // Global app styles (for body, .App, etc.)

// Import the components for each section of the homepage
import Header from './components/Header'; // The website header
import HeroSection from './components/HeroSection'; // The main hero section
import VisionMissionSection from './components/VisionMissionSection'; // The new Vision and Mission section

// Define the main App component
// This component acts as the main container and defines the layout of the homepage
function App() {
  return (
    // This main div wraps all the content of the application.
    // You can apply global layout styles to this class if needed.
    <div className="App">

      {/* Render the Header component at the top of the page */}
      <Header />

      {/* Render the Hero section component just below the header */}
      <HeroSection />

      {/* Render the Vision and Mission section below the Hero section */}
      <VisionMissionSection />

      {/* Placeholder comments for sections we will add later: */}
      {/* You will create new component files for each of these sections (e.g., WhoWeAreSection.tsx) */}
      {/* Then, import them at the top of this file and add their tags here in the desired order. */}
      {/* <WhoWeAreSection /> */}
      {/* <ClientsSection /> */}
      {/* <TeamStatsSection /> */}
      {/* <DomainsSection /> */}
      {/* <FeaturesSection /> */}


      {/* Placeholder for the Footer component - will be added at the very bottom */}
      {/* <Footer /> */}

      {/*
        The following commented-out code is the original default content
        that came with the Vite + React template.
        You can safely delete this section once you are confident
        your own content is replacing it.
      */}
      {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </div>
  );
}

// Export the App component as the default export so it can be used in main.tsx
export default App;
