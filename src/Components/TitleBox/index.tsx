import React from "react";

const index = (title: string, text: string, imageSrc: string) => {
  return (
    <div className="title">
      <div className="title-content">
        <h1>{title}</h1>
        <p className="title-text">{text}</p>
        <button className="read-more">Read More</button>
      </div>
      {/* <div className="title-image"> */}
      <img className="title-image" src={imageSrc} alt={title} />
      {/* </div> */}
    </div>
  );
};

export default index;
