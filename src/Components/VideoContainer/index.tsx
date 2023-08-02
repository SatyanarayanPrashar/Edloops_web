import React from "react";

const index = (videoId: any, onClose: any) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="video-container">
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <div className="video-content">
        <iframe
          width="949"
          height="534"
          src="https://www.youtube.com/embed/6mbwJ2xhgzM?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
          title="Introduction to HTML, CSS, JavaScript &amp; How websites work? | Web Development Tutorials #1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default index;
