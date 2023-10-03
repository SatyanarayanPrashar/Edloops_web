import React from "react";
import getVideoId from "get-video-id";

interface IProps {
  url?: any;
  startTime?: any;
  endTime?: any;
  setIsVideoVisible?: any;
  isClick: any;
}

const index = (props: IProps) => {
  const { setIsVideoVisible, url, startTime, endTime, isClick } = props;

  const { id } = getVideoId(url[isClick]);

  return (
    <div className="video-container">
      <button className="close-button" onClick={() => setIsVideoVisible(false)}>
        X
      </button>
      <div className="video-content">
        <iframe
          width="949"
          height="534"
          src={`https://www.youtube.com/embed/${id}?start=${startTime[isClick]}&end=${endTime[isClick]}`}
          // src="https://www.youtube.com/embed/s7YXz7FwMBs?si=2R43BEZOXSSPoUxb&amp;start=200&amp;end=210"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default index;
