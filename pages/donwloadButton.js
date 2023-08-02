import React from 'react';
import Slide from 'react-reveal';


const DownloadButton = () => {
  const downloadFile = () => {
    window.open('https://drive.google.com/file/d/1cIuU900DZjXOxCQ8TYq8u_ENAN9hv36M/view?usp=drive_link', '_blank');
  };

  return (
    <Slide top>
    <button
      className="bg bg-gradient-to-r from-blue-500 to-blue-400 bg-blue-500 text-white px-10 py-2 rounded-lg ml-8 font-bold duration-500 hover:scale-110"
      onClick={downloadFile}
    >
      Resume
    </button>
    </Slide>
  );
};

export default DownloadButton;
