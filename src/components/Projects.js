import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="section"
      style={{
        backgroundColor: '#002d3a',
        color: '#f8fafc',
        padding: '4rem 2rem',
        lineHeight: '1.8',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Projects</h2>

      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          <strong>Movie Review Site</strong>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
            <li>Developed a user-friendly interface with seamless navigation.</li>
            <li>Integrated trailer viewing functionality for better engagement.</li>
            <li>Implemented review and rating system using backend database.</li>
            <li>Utilized web development, connection handling, and database skills.</li>
          </ul>
        </li>

        <li style={{ marginBottom: '1rem' }}>
          <strong>Pathshala – A Virtual Classroom</strong>
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
            <li>Designed and developed a virtual learning platform.</li>
            <li>Features include class scheduling, assignment submission, and study material sharing.</li>
            <li>Enhanced student-faculty interaction and digital learning experience.</li>
          </ul>
        </li>
      </ul>

      <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
        <strong>Technologies used:</strong> HTML, CSS, JavaScript, MongoDB
      </p>
    </section>
  );
};

export default Projects;
