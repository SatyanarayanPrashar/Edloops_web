import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { get, map } from "lodash";
import VideoContainer from "../VideoContainer";

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
  const getYouTubeVideoId = (url: string) => {
    const videoIdMatch = url.match(/(?:\/|v=)([A-Za-z0-9_-]{11})/);
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  useEffect(() => {
    // Fetch and set thumbnail URLs
    const videoIds = chapterUrl.map(getYouTubeVideoId);
    const thumbnailUrls = videoIds.map(
      (videoId) =>
        `https://img.youtube.com/vi/${videoId}/0.jpg`
    );
    setThumbnailUrls(thumbnailUrls);
  }, [chapterUrl]);

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
                  src={thumbnailUrls[index]}
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
