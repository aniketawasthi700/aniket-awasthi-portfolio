import React, { useEffect, useRef, useState } from 'react';

// Import PDFs
import TcsCert from '../assets/Aniket Awasthi TCS Certificate.pdf';
import InternCert from '../assets/Aniket software_engineer_intern certificate.pdf';
import Cert3 from '../assets/Certificate_3.pdf';
import Cert4 from '../assets/Certificate_4.pdf';
import InfosysReact from '../assets/INFOSYS Reactjs course.pdf';
import JavaCert from '../assets/java_basic certificate.pdf';

const Certifications = () => {
  const certs = [
    { title: 'TCS Certificate', file: TcsCert },
    { title: 'Intern Certificate', file: InternCert },
    { title: 'NPTEL Certification', file: Cert3 },
    { title: 'CODSOFT Certification', file: Cert4 },
    { title: 'Infosys ReactJS', file: InfosysReact },
    { title: 'HackerRank Java Certificate', file: JavaCert },
  ];

  // Ref to the scrolling container
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const handleCertClick = () => {
    setPaused(true);
    setTimeout(() => {
      setPaused(false);
    }, 3000);
  };

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!paused && container) {
        container.scrollLeft += 1;
        // Reset scroll to beginning when it reaches half (because we doubled the items)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, [paused]);

  return (
    <section
      id="certifications"
      style={{
        backgroundColor: 'skyblue',
        color: 'black',
        padding: '4rem 2rem',
        overflow: 'hidden',
      }}
    >
      <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
        Certifications
      </h2>

      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          overflow: 'hidden',
          width: '100%',
          cursor: 'pointer',
        }}
        onClick={handleCertClick}
      >
        {[...certs, ...certs].map((cert, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              width: '320px',
              marginRight: '1.5rem',
              backgroundColor: '#002d3a',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3
              style={{
                fontSize: '1rem',
                textAlign: 'center',
                color: 'cyan', // Change this to your desired color
              }}
            >
              {cert.title}
            </h3>
            <iframe
              src={cert.file}
              title={cert.title}
              width="100%"
              height="400px"
              style={{
                border: 'none',
                marginTop: '1rem',
                borderRadius: '8px',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
