// so here is the component for each portfolio item. first im importing react and the useState hookaswell as the images for the projects
import React, { useState } from 'react';
import project1Image from '../images/project1.png'; 
import githubIcon from '../images/github.svg'; 

// here i am setting the styling for the portfolio items
const PortfolioItem = ({ image, projectName, projectLink, githubLink }) => {
  const [isHovered, setIsHovered] = useState(false);
// the item style is the styling for the portfolio items
  const itemStyle = {
    textAlign: 'center',
    marginBottom: '2em',
    cursor: 'pointer',
    position: 'relative',
  };
// the image style is the styling for the images in the portfolio items
  const imageStyle = {
    width: '50%',
    height: 'auto',
    opacity: isHovered ? 0.5 : 1, 
    transition: 'opacity 0.3s',
  };
// the overlay style is the styling for the overlay on the portfolio items as well as some hover effects
  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white', 
    color: 'black', 
    fontSize: '1.5em',
    fontWeight: 'bold',
    padding: '0.5em', 
    visibility: 'visible', 
    opacity: isHovered ? 0.5 : 0, 
    transition: 'opacity 0.3s', 
  };
// the github icon style is the styling for the github icon on the portfolio items
  const githubIconStyle = {
    width: '1.5em',
    height: 'auto',
    margin: '0.2em',
    cursor: 'pointer',
    filter: 'grayscale(0)', 
    transition: 'filter 0.3s', 
  };
// here i am setting the filter for the github icon so when you hover over it it will change to grayscale
  return (
    <div
      style={itemStyle}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* adding the parameters to my pictures with their associated links */}
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={projectName} style={imageStyle} />
      </a>
      <div style={overlayStyle}>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {projectName}
        </a>
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" style={githubIconStyle} />
        </a>
      </div>
    </div>
  );
};
// exporting the portfolio item component
export default PortfolioItem;
