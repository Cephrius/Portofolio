import React from 'react';
import { Slide,Bounce,Flip } from "react-awesome-reveal";


const ContactButton = () => {
  const ContactMe = () => {
    const email = 'chiedozie.ehileme@gmail.com';
    const emailToLink  = `mailto:${email}`;

    window.open(emailToLink);
    
  };

  return (
    <Slide direction="down" triggerOnce onVisibilityChange={false}>
      <button
        className="bg bg-gradient-to-r from-blue-500 to-blue-400 bg-blue-500 text-white px-10 py-2 rounded-lg ml-8 font-bold duration-500 hover:scale-110 text-xs"
        onClick={ContactMe}
      >
        Contact
      </button>
    </Slide>
  );
};

export default ContactButton;
