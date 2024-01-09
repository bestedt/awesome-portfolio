// here is my contact page. pretty simple, just a form with a submit button, the form will be on the component page
import React from 'react';
import ContactComponent from '../components/Contact'; 
const ContactPage = () => {
  return (
    <div>
      {/* bringing in my contact component to give the page its content */}
      <ContactComponent />
    </div>
  );
};
// exporting the contact page
export default ContactPage;
