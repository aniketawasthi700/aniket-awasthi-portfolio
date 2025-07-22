import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="section"
      style={{
        backgroundColor: '#0ccac4',
        color: '#0c0c0c',
        padding: '4rem 2rem',
        lineHeight: '1.8',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Me</h2>

      <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
        <li style={{ marginBottom: '1rem' }}>
          Pursued <strong>Bachelor of Engineering (B.E.)</strong> specializing in <strong>Computer Science and Engineering</strong> with a CGPA of <strong>8.12</strong>.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          Strong foundation in core programming languages:
          <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem' }}>
            <li>Java</li>
            <li>HTML, CSS, JavaScript</li>
            <li>MySQL</li>
            <li>DSA</li>
          </ul>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          Project Highlight: <strong>'Pathshala' – A Virtual Classroom</strong>, built to enhance student-faculty academic interactions.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          Web Development Intern at <strong>Codsoft</strong>, where I worked on front-end development using Agile methodologies.
        </li>
        <li style={{ marginBottom: '1rem' }}>
          Actively engaged in continuous learning with multiple certifications and coding competition participation.
        </li>
        <li>
          Eager to join a dynamic team to apply my knowledge, grow collaboratively, and contribute to innovative software projects.
        </li>
      </ul>
    </section>
  );
};

export default About;
