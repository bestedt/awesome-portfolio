// impoting react and useState as well as the images for the footer
import React, { useState } from 'react';  
import githubIcon from '/src/images/github.svg';
import instagramIcon from '/src/images/instagram.svg';
import linkedinIcon from '/src/images/linkedin.svg';
// here i am setting the styling for the footerand the icons
const Footer = () => {
  const [hoveredGitHub, setHoveredGitHub] = useState(false);
  const [hoveredInstagram, setHoveredInstagram] = useState(false);
  const [hoveredLinkedIn, setHoveredLinkedIn] = useState(false);
// the icon style is the styling for the icons in the footer
  const iconStyle = {
    width: '2em',
    margin: '0.5em',
    cursor: 'pointer',
    transition: 'filter 0.3s',
  };

  // the hover effect for the icons
  const getFilterStyle = (hovered) => ({
    filter: `opacity(${hovered ? '0.5' : '1'})`, 
  });
// here i am setting the links for the icons to take them to my social media pages
  return (
    <footer style={{ background: '#f0f0f0', padding: '1rem', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <div>
        <a
          href="https://github.com/bestedt"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHoveredGitHub(true)}
          onMouseLeave={() => setHoveredGitHub(false)}
        >
          <img src={githubIcon} alt="GitHub" style={{ ...iconStyle, ...getFilterStyle(hoveredGitHub) }} />
        </a>
        <a
          href="https://www.instagram.com/tjay__b/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHoveredInstagram(true)}
          onMouseLeave={() => setHoveredInstagram(false)}
        >
          <img src={instagramIcon} alt="Instagram" style={{ ...iconStyle, ...getFilterStyle(hoveredInstagram) }} />
        </a>
        <a
          href="https://www.linkedin.com/in/tyler-bested-a7ab167a/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHoveredLinkedIn(true)}
          onMouseLeave={() => setHoveredLinkedIn(false)}
        >
          <img src={linkedinIcon} alt="LinkedIn" style={{ ...iconStyle, ...getFilterStyle(hoveredLinkedIn) }} />
        </a>
      </div>
    </footer>
  );
}
// exporting the footer
export default Footer;

