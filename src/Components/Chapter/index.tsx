import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { map } from "lodash";
import VideoContainer from "../VideoContainer";

interface IProps {
  chapterResources?: any;
  chapterTitle: any;
  chapterLinks: any;
  subItems?: any;
}

const index = (props: IProps) => {
  const { chapterResources, chapterTitle, chapterLinks, subItems } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleWatchClick = () => {
    setIsVideoVisible(true);
  };

  const handleCloseClick = () => {
    setIsVideoVisible(false);
  };

  console.log(chapterResources, "chapterLinks");

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
          {chapterResources?.map((resource: any) => (
            <>
              <li key={resource.id} className="linkCard">
                {/* <div className="linkImage"></div> */}
                <div>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.title}
                  </a>
                  <div>{resource.description}</div>
                  <button className="read-more" onClick={handleWatchClick}>
                    Watch
                  </button>
                </div>
              </li>
            </>
          ))}
          {subItems &&
            subItems.map((item: any) => {
              if (item.type === "dropdown") {
                return (
                  <li key={item.id}>
                    {/* <Chapter
                      chapterTitle={item.title}
                      chapterLinks={item.links}
                      subItems={item.subItems}
                    /> */}
                  </li>
                );
              } else if (item.type === "link") {
                return (
                  <li key={item.id} className="linkCard">
                    {/* <div className="linkImage"></div> */}
                    {/* <img className="linkImage" src={imageSrc} alt={title} />   */}
                    <div>
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                      <div>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Impedit mollitia minima est illum, sequi ipsa non
                        accusamus assumenda hic. Quia!
                      </div>
                      <button className="read-more" onClick={handleWatchClick}>
                        Watch
                      </button>
                    </div>
                  </li>
                );
              } else {
                return null;
              }
            })}
        </ul>
      )}
      {isVideoVisible && <VideoContainer onClose={handleCloseClick} />}
    </div>
  );
};

export default index;
