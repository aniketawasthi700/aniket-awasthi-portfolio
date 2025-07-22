import React from 'react';
import './Contact.css';
import { Phone, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        {/* Phone Contact */}
        <a href="tel:+918975875536" className="contact-item">
          <Phone size={24} />
          <span>Phone: +91 8975875536</span>
        </a>

        {/* Email Contact */}
        <a href="mailto:awasthianiket007@gmail.com" className="contact-item">
          <Mail size={24} />
          <span>Email: awasthianiket007@gmail.com</span>
        </a>

        {/* LinkedIn Contact - CORRECTED HREF */}
        <a
          href="https://www.linkedin.com/in/aniketawasthi700?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMOyqngV6SKuEG8AyDzLl%2FA%3D%3D" /* <<< Make sure THIS is your FULL LinkedIn URL */
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <Linkedin size={24} />
          <span>LinkedIn: Aniket Awasthi</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;