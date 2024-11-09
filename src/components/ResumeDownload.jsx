import React from 'react';

function ResumeDownload() {
  return (
    <div className="flex justify-center mt-6"> 
      <a
        href="/Resume.pdf" 
        download="Ayushi Mahajan Resume.pdf" 
        className="text-neutral-500 text-sm hover:text-blue-600 transition"
        style={{ textDecoration: 'none' }} 
      >
        Resume Download (For Interviews)
        
      </a>
    </div>
  );
}

export default ResumeDownload;
