
// create a new file called Footer.jsx in the components folder this will contain the code for my footer
// imort react and useState from react as well as the images for the icons
import React, { useState } from 'react';  
import githubIcon from '/src/images/github.svg';
import instagramIcon from '/src/images/instagram.svg';
import linkedinIcon from '/src/images/linkedin.svg';
// create a function called Footer that will return the footer component
const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
// create a variable called iconStyle that will contain the styling for the icons still need to fix the hover as it is not working
  const iconStyle = {
    width: '2em',
    margin: '0.5em',
    cursor: 'pointer',
    filter: hoveredIcon === null ? 'grayscale(0)' : 'grayscale(100%)',
    transition: 'filter 0.3s',
  };
// return the footer component with the icons and the styling as well as links to my social media
  return (
    <footer style={{ background: '#f0f0f0', padding: '1rem', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
      <div>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHoveredIcon('github')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={githubIcon} alt="GitHub" style={iconStyle} />
        </a>
        <a
          href="https://instagram.com/your-instagram-username"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHoveredIcon('instagram')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={instagramIcon} alt="Instagram" style={iconStyle} />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHoveredIcon('linkedin')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <img src={linkedinIcon} alt="LinkedIn" style={iconStyle} />
        </a>
      </div>
    </footer>
  );
}
// export the footer component
export default Footer;
