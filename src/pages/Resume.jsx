// adding resume to the page
import React from 'react';
// creating a function for the resume page
const Resume = () => {
  const handleDownload = () => {
    // path to my resume file
    const resumeFilePath = './src/assets/Resume.pdf';
    // opens the file in a new tab
    window.location.href = resumeFilePath;
  };
// here is a list of my proficiencies
  return (
    <div>
      <br />
      <br />
      <h1 style={{ textAlign: 'center' }}>Resume</h1>
      <br />
      <br />
      <br />
    
      <h2>Front End Proficiencies</h2>
      <br />
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
     <li>Bootstrap</li>
     <li>React</li>
     <li>jQuery</li>
      <li>Responsive Design</li>
     <br />
     <br />
     <h2>Back End Proficiencies</h2>
     <br />
     <li>APIs</li>
     <li>Node</li>
     <li>Express</li>
     <li>MySQL, Sequelize</li>
     <li>MongoDB, Mongoose</li>
     <li>REST</li>
     <li>GraphQL</li>
     <br />

     <br />
 <div>
{/* here is the button styles, same as the submit on the contact  */}
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, opacity 0.3s',
          }}
          onClick={handleDownload}
        >
          Download Resume
        </button>
        <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
     <br />
      </div>
    </div>
     
  );
};
// exporting the resume page
export default Resume;
