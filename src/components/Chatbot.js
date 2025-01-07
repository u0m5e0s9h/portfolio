import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  // Hardcoded skills and responses
  const skills = {
    "technical skills": "My key technical skills include JavaScript, ReactJS, NodeJS, Express, MongoDB, Python, and basic DevOps tools like Docker, Kubernetes, and CI/CD pipelines.",
    "experience with DevOps": "I have experience using Docker for containerization, Kubernetes for orchestration, and setting up CI/CD pipelines to streamline deployment processes.",
    "projects": "I have worked on a full-stack MERN project for managing car-related products with user authentication, CRUD operations, and search functionality.",
    "backend development": "Yes, I have experience in backend development using Node.js, Express, and MongoDB for creating RESTful APIs and integrating them with frontends.",
    "certifications": "I have completed certifications in Full-Stack Web Development and DevOps practices.",
    "experience with ReactJs": "I have built multiple ReactJS applications using state management tools like Redux and Context API and integrated them with backend APIs.",
    "educationa": "I am in the final year of my B.Tech program.",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResponse(''); // Clear previous response

    // Simulate backend logic with a delay
    setTimeout(() => {
      const answer = skills[query] || "I'm sorry, I don't have an answer for that question.";
      setResponse(answer);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <h2>Ask Me Anything About My Resume</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your question here (e.g., What are your technical skills?)"
          rows="4"
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Ask'}
        </button>
      </form>
      {response && <div className="response">{response}</div>}
    </div>
  );
};

export default Chatbot;
