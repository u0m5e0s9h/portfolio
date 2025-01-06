import React from 'react';
import Navbar from './components/Navbar';
import Introd from './components/Introd';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div>
      <Navbar />
      <Introd />
      <Skills />
      <Resume />
      <Contact />
      <Chatbot />
    </div>
  );
}

export default App;
