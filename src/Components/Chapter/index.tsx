import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { map } from "lodash";
import VideoContainer from "../VideoContainer";

interface IProps {
  chapterTitle: any;
  chapterLinks: any;
  subItems: any;
}

const index = (props: IProps) => {
  const { chapterTitle, chapterLinks, subItems } = props;
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

  return (
    <div className="chapter-dropdown">
      <div className="chapter-header" onClick={handleDropdownToggle}>
        <div className="chapterTitle">
          <h4>{chapterTitle}</h4>
          {isDropdownOpen ? <FaArrowUp /> : <FaPlus />}
        </div>
        <span className={`arrow ${isDropdownOpen ? "open" : ""}`}></span>
      </div>
      {isDropdownOpen && (
        <ul className="chapter-links">
          {chapterLinks?.map((link: any) => (
            <li key={link.id} className="linkCard">
              <div className="linkImage"></div>
              <div>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.title}
                </a>
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit mollitia minima est illum, sequi ipsa non accusamus
                  assumenda hic. Quia!
                </div>
                <button className="read-more" onClick={handleWatchClick}>
                  Watch
                </button>
              </div>
            </li>
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
