import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { get, map } from "lodash";
import VideoContainer from "../VideoContainer";
import getVideoId from "get-video-id";

interface IProps {
  chapterResources?: any;
  chapterTitle: any;
  chapterLinks: any;
}

const index = (props: IProps) => {
  const { chapterResources, chapterTitle, chapterLinks } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [thumbnailUrls, setThumbnailUrls] = useState<string[]>([]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleWatchClick = (index: number) => {
    setIsVideoVisible(true);
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const chapterUrl = map(chapterResources, (item: any) => item.url);
  const start = map(chapterResources, (item: any) => item.start_time);
  const end = map(chapterResources, (item: any) => item.end_time);

  // Function to extract YouTube video ID from URL
  const videoIds = chapterUrl.map((url) => {
    let { id }: any = getVideoId(url);
    return id;
  });

  const getThumbnailUrl = (index: any) => {
    return `https://img.youtube.com/vi/${videoIds[index]}/0.jpg`;
  };

  return (
    <div className="chapter-dropdown">
      <div className="chapter-header" onClick={handleDropdownToggle}>
        <div className="chapterTitle">
          <h4 className="py-2">{chapterTitle}</h4>
          <span className="cursor-pointer">
            {isDropdownOpen ? <FaArrowUp /> : <FaPlus />}
          </span>
        </div>
        <span className={`arrow ${isDropdownOpen ? "open" : ""}`}></span>
      </div>
      {isDropdownOpen && (
        <ul className="chapter-links">
          {chapterResources?.map((resource: any, index: any) => (
            
            <>
              <li key={index} className="linkCard">
                <div className="linkImage">
                  <img
                    src={getThumbnailUrl(index)}
                    alt={get(resource, "title", "")}
                  />
                </div>
                <div>
                  <a
                    href={get(resource, "url", "")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {get(resource, "title", "")}
                  </a>
                  <div>{get(resource, "description", "")}</div>
                  <button
                    className="read-more"
                    onClick={() => handleWatchClick(index)}
                  >
                    Watch
                  </button>
                </div>
              </li>
              {isVideoVisible && (
                <VideoContainer
                  setIsVideoVisible={setIsVideoVisible}
                  url={chapterUrl}
                  startTime={start}
                  endTime={end}
                  isClick={activeIndex}
                />
              )}
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default index;
