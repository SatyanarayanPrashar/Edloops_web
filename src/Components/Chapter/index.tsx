import React, { useEffect, useState } from "react";
import { FaArrowUp, FaPlus } from "react-icons/fa";
import { get, map } from "lodash";
import VideoContainer from "../VideoContainer";
import getVideoId from "get-video-id";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import LoginModal from "../LoginModal";

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
  const [checkedValues, setCheckedValues] = useState([]);
  const [checkedItems, setCheckedItems] = useState<any>([]);
  const [handleModal, setHandleModal] = useState(false);
  const checkLoggedIn = useSelector(
    (state: RootState) => state.uiState.loggedInUser
  );

  useEffect(() => {
    setCheckedItems(JSON.parse(localStorage.getItem("checkedItems") || "[]"));
  }, []);

  console.log(checkLoggedIn, ",nlkn");

  const handleDropdownToggle = () => {
    if (checkLoggedIn) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      setHandleModal(true);
    }
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

  const isYouTube = (url: string) => {
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/watch\?v=([a-zA-Z0-9_-]+)/;
    return youtubeRegex.test(url);
  };

  const handleCheckboxChange = (value: any) => {
    // Check if the value is already present in the array
    const isChecked = checkedItems.includes(value);

    // Update state and localStorage based on the checkbox state
    if (isChecked) {
      // If the checkbox is checked, remove all occurrences of the value
      const updatedCheckedItems = checkedItems.filter(
        (item: any) => item !== value
      );
      setCheckedItems(updatedCheckedItems);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "checkedItems",
          JSON.stringify(updatedCheckedItems)
        );
      } else {
        // console.log("we are running on the server");
      }
    } else {
      // If the checkbox is unchecked, add the value to the array
      const updatedCheckedItems = [...checkedItems, value];
      setCheckedItems(updatedCheckedItems);
      localStorage.setItem("checkedItems", JSON.stringify(updatedCheckedItems));
    }
  };

  return (
    <div className="chapter-dropdown">
      <div className="chapterTitle" onClick={handleDropdownToggle}>
        <h4 className="py-2">{chapterTitle}</h4>
        <span className="cursor-pointer">
          {isDropdownOpen ? <FaArrowUp /> : <FaPlus />}
        </span>
        {/* <span className={`arrow ${isDropdownOpen ? "open" : ""}`}></span> */}
      </div>

      {isDropdownOpen && (
        <ul className="chapter-links">
          {chapterResources?.map((resource: any, index: any) => {
            // Check if the URL is a YouTube URL
            const isYouTubeURL = isYouTube(resource.url);

            return (
              <li key={index} className="linkCard">
                <div className="linkleftsection">
                  <div className="Ch-number">{index + 1}</div>
                  <div className="linkImage">
                    {isYouTubeURL ? (
                      <img
                        src={getThumbnailUrl(index)}
                        alt={get(resource, "title", "")}
                      />
                    ) : (
                      <img
                        src="/img/link.png" // Default image URL
                        alt={get(resource, "title", "")}
                      />
                    )}
                  </div>
                  <div className="link-mid">
                    <a href={resource.url} target="_blank" rel="noreferrer">
                      {get(resource, "title", "")}
                    </a>
                    <div>{get(resource, "description", "")}</div>
                  </div>
                </div>

                {/* <div className="link-mid">
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {get(resource, "title", "")}
                  </a>
                  <div>{get(resource, "description", "")}</div>
                </div> */}

                <div className="bttnsection">
                  {isYouTubeURL ? (
                    <button
                      className="watch-bttn mb-3"
                      onClick={() => handleWatchClick(index)}
                    >
                      Watch
                    </button>
                  ) : (
                    <button
                      className="watch-bttn mb-3"
                      onClick={() => window.open(resource.url, "_blank")}
                    >
                      Read
                    </button>
                  )}

                  {/* checkbox here */}
                  <div className="d-flex align-items-center flex-nowrap">
                    <input
                      id="read"
                      name="read"
                      type="checkbox"
                      value={get(resource, "id", 0)}
                      checked={checkedItems.includes(get(resource, "id", 0))}
                      onChange={() =>
                        handleCheckboxChange(get(resource, "id", 0))
                      }
                    />

                    <label htmlFor="read">Done</label>
                  </div>
                </div>

                {isVideoVisible && (
                  <VideoContainer
                    setIsVideoVisible={setIsVideoVisible}
                    url={chapterUrl}
                    startTime={start}
                    endTime={end}
                    isClick={activeIndex}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
      {handleModal && (
        <LoginModal setHandleModal={setHandleModal} handleModal={handleModal} />
      )}
    </div>
  );
};

export default index;
