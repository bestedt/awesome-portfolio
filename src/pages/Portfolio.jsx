// import React from 'react';
import React from 'react';
// impo the portfolio item component and the images for the projects
import PortfolioItem from '../components/PortfolioItem'; 
import project1Image from '../images/project1.png'; 
import project2Image from '../images/project2.jpg'; 
// adding styling to the portfolio page
const Portfolio = () => {
  const portfolioStyle = {
    textAlign: 'center', // Center the container
  };
// adding the portfolio items to the page
  return (
    <div style={portfolioStyle}>
      <br />
      <br />
      <h1>Portfolio</h1>
      <br />
      <br />
      {/* using the portforlio component and setting links to my github and actuall project */}
      <PortfolioItem
        image={project1Image}
        projectName="Purple Turtle Entertainment"
        projectLink="https://jizhang80.github.io/project1-purpleTurtle/"
        githubLink="https://github.com/bestedt/project1-purpleTurtle"
      />
      <br />
      <br />
      <br />
      {/* using the portforlio component and setting links to my github and actuall project */}
      <PortfolioItem
        image={project2Image}
        projectName="Appartment Management System"
        projectLink="https://atms-8bf7a9e2d4f1.herokuapp.com/"
        githubLink="https://github.com/bestedt/purpleturtle-Appartment-Management?tab=readme-ov-file"
      />
      <br />
      <br />
      <br />
    </div>
  );
};
// exporting the portfolio page
export default Portfolio;
