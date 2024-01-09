// here is my about page, its a paragraph and a picture of me, so this was the easy one lol
import React from 'react';
// importing my profile pic
import myImage from '/src/images/Profile.jpg'; 
// creating a function for the about page and adding styling
export default function About() {
  const containerStyle = {
    paddingBottom: '120px', 
    boxSizing: 'border-box', 
    textAlign: 'center', 
  };
// adding styling to the image and header
  const imageStyle = {
    borderRadius: '50%', 
    maxWidth: '200px', 
    margin: '0 auto 20px', 
    display: 'block', 
  };

  const headerStyle = {
    display: 'inline-block', 
  
  };

  return (
    // adding the content to the page through the function
    <div style={containerStyle}>
      <br />
      <br />
      <h1 style={headerStyle}>About Me</h1>
      <br />
      <br />
      <img src={myImage} alt="My Photo" style={imageStyle} />
      <p>
        Thank you for visiting my temporary Portfolio! I'm a current serving member in the Royal Canadian Navy 
        as a NCIOP and a Ship's Team Diver. 11 years and running! Right now I'm working my way through Carleton University's
        Coding Bootcamp run by EdX. This course has had a relentless pace of learning but I've been able to hang in there! Please check back and see the journey of 
        this website as I learn more and more throughout the bootcamp.
      </p>
    </div>
  );
}