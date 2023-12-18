import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get, includes } from "lodash";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import NextLink from "next/link";
import { publicRoutes } from "@/enums/route.enum";
const index = () => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [checkEnrolled, setCheckEnrolled] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [handleModal, setHandleModal] = useState(false);
  const loggedInUserId = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );
  const userInfo = useSelector((state: RootState) => state.uiState.userInfo);
  useEffect(() => {
    if (includes(get(userInfo, "courses_enrolled", 0), "4")) {
      setCheckEnrolled(true);
    } else {
      setCheckEnrolled(false);
    }
  }, [userInfo]);

  const enrollCourse = async (courseId: any) => {
    const enrolledCourse = {
      courseID: courseId,
    };
    setBtnLoading(true);
    await requests
      .put(
        blogRequestUrls.course.enrollCourseWithId(loggedInUserId),
        enrolledCourse
      )
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          // setUserInfo(get(response, "data", {}));
        }
        if (get(res, "data.message", "")) {
          setBtnLoading(false);
          toast.success(get(res, "data.message", ""));
          setCheckEnrolled(true);
          setConfetti(true);
          setTimeout(() => {
            setConfetti(false);
          }, 5000);
        } else {
          setBtnLoading(false);
          toast.error(get(res, "data.error", ""));
        }
      })
      .catch((e) => {
        setBtnLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "error", ""));
      });
  };
  const handleEnroll = () => {
    if (loggedInUserId) {
      enrollCourse("4");
    } else {
      setHandleModal(true);
    }
  };
  const faqItems = [
    {
      question: "Introduction to Dart Programming Language",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Getting Familiar with Dart
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Understanding Data types in Dart
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Mastering Conditional Statements
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Navigating Loops in Dart
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Exploring Functions
          </div>
        </div>
      ),
    },
    {
      question: "Object Oriented Programming, OOPs",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Classes and Objects
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Inheritance and Abstract Class
          </div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> More on OOPs for Flutter
          </div>
        </div>
      ),
    },
    {
      question: "Dart Advance Topics",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Lists and Sets
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Maps
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Enums
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Exception Handling
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Futures
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Fetch Data from External Source
          </div>
        </div>
      ),
    },
    {
      question: "Getting started with Flutter",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Installing Flutter and setting
            up first project
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Understanding basic structure of
            folder
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Functions, Classes, Routes, &
            Text
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Adding Images, Google Fonts, &
            Buttons
          </div>
        </div>
      ),
    },
    {
      question: "Widgets in Flutter",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> Flutter Architecture
          </div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> Stateful & Stateless Widgets
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Container Widget{" "}
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Exxpanded Widget
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Column & Row Widget
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Stack Widget
          </div>
        </div>
      ),
    },
    {
      question: "Database Shrading",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> What is database Shrading
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Key Based Shrading
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Range Based Shrading{" "}
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Directory Based Shrading
          </div>
        </div>
      ),
    },
    {
      question: "Flutter Frontend Practice",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Creating Plant App
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Chat App UI with light and dark
            mode
          </div>
        </div>
      ),
    },
    {
      question: "Flutter advanced Concepts",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> JSON serialization and
            deserialization
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> StreamController & StreamBuilder
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Single and Broadcast Streams
          </div>
        </div>
      ),
    },
    {
      question: "Firebase with Flutter",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Authentication
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Cloud Firestore: Basic CRUD and
            StreamBuilder
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Cloud Firestore: Data Filtering
            and Sorting
          </div>
        </div>
      ),
    },
    {
      question: "Projects",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Crypto Price Tracker
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Chat App with Firebase
          </div>
        </div>
      ),
    },
  ];

  const [openItem, setOpenItem] = useState(0); // Initialize with the index of the first item

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(-1); // Close the currently open item
    } else {
      setOpenItem(index); // Open the clicked item
    }
  };

  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Flutter Development: from scratch</title>
        <meta
          name="description"
          content="This is a beginner-friendly self-paced curated course for Flutter Development aimed at providing an exclusive and crisp introduction to building Cross-Platform iOS and Android Apps Using Flutter. It covers most of the topics necessary to start a carrier as flutter developer, from scratch assuming no prior knowledge."
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Flutter Development: from scratch" />
        <meta
          name="description"
          content="This is a beginner-friendly self-paced curated course for Flutter Development aimed at providing an exclusive and crisp introduction to building Cross-Platform iOS and Android Apps Using Flutter. It covers most of the topics necessary to start a carrier as flutter developer, from scratch assuming no prior knowledge."
        />
        <meta itemProp="image" content="https://i.ibb.co/gmn7SQg/images.png" />

        {/* <!-- Facebook Meta Tags --> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Flutter Development: from scratch" />
        <meta
          property="og:description"
          content="This is a beginner-friendly self-paced curated course for Flutter Development aimed at providing an exclusive and crisp introduction to building Cross-Platform iOS and Android Apps Using Flutter. It covers most of the topics necessary to start a carrier as flutter developer, from scratch assuming no prior knowledge."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/gmn7SQg/images.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Flutter Development: from scratch"
        />
        <meta
          name="twitter:description"
          content="This is a beginner-friendly self-paced curated course for Flutter Development aimed at providing an exclusive and crisp introduction to building Cross-Platform iOS and Android Apps Using Flutter. It covers most of the topics necessary to start a carrier as flutter developer, from scratch assuming no prior knowledge."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/gmn7SQg/images.png"
        />
      </Head>

      <AuthLayout>
        <div className="toptitle-container">
          <div className="topleft-info">
            {/* <h6>Courses > </h6> */}
            <h1 className="h1title">Flutter Development: from scratch</h1>
          </div>
          <div className="topright-sticky">
            <img
              src="https://i.ibb.co/gmn7SQg/images.png"
              alt="flutter development course"
            />
            <h2>Free!</h2>
            <div className="wrapper">
              {checkEnrolled ? (
                <NextLink href={publicRoutes.curriculum + "/4"}>
                  <span>Start Learning</span>
                </NextLink>
              ) : (
                <button
                  onClick={handleEnroll}
                  className={`${
                    checkEnrolled ? "pointer-none" : ""
                  } enroll-link d-flex text-white mt-0`}
                  type="button"
                  disabled={checkEnrolled}
                >
                  {btnLoading ? (
                    <ClipLoader
                      color={"#40a944"}
                      loading={btnLoading}
                      size={25}
                    />
                  ) : (
                    <>
                      {checkEnrolled ? "Enrolled" : "Enroll This Course"}
                      <span>
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>
            <h6>This course includes:</h6>
            <div className="svg-feature">
              <img src="/svg/video.svg" /> 33 Lectures
            </div>
            <div className="svg-feature">
              <img src="/svg/casestudy.svg" /> 2 Projects
            </div>
            <div className="svg-feature">
              <img src="/svg/infinity.svg" /> Life Time Access
            </div>
          </div>
        </div>
        <div className="topdescription">
          <h2>Build Cross-Platform iOS and Android Apps Using Flutter.</h2>
          <h3 className="cont">
            This is a beginner-friendly self-paced curated course for Flutter
            Development aimed at providing an exclusive and crisp introduction
            to building Cross-Platform iOS and Android Apps Using Flutter. It
            covers most of the topics necessary to start a carrier as flutter
            developer, from scratch assuming no prior knowledge.
          </h3>
          <div className="svg">
            <div className="stat">
              <img src="/svg/verified.svg" />
              Curated and Verified by Industry experts
            </div>
          </div>
        </div>

        <div className="px-3 px-lg-0">
          <div className="midLearn-container">
            <h2> What you'll learn</h2>
            <div className="points-wrap">
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>Learn Flutter and Dart from the ground up, step-by-step</p>
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>
                  Build engaging native mobile apps for both Android and iOS
                </p>
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>
                  Understand all the fundamental concepts of Flutter development
                </p>
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>
                  Become proficient in one of the fastest growing technologies
                </p>
              </div>
            </div>
          </div>

          <div className="midContent-container">
            <h2> Course Content </h2>
            <section className="content-section">
              <div className="contetnt-list">
                {faqItems.map((item, index: number) => (
                  <div
                    className={`content-item ${
                      openItem === index ? "open" : ""
                    }`}
                    key={index}
                  >
                    <div className="chapter" onClick={() => toggleItem(index)}>
                      {item.question}
                      <span className="toggle-icon">
                        {openItem === index ? "-" : "+"}
                      </span>
                    </div>
                    {openItem === index && (
                      <div className="topic">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* <div className="midLearn-container">
                    <h2> Pre-Requisites </h2>
                    <div className="points-wrap">
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" />Basic Computer Science fundamentals</div>
                    </div>
                </div> */}

          <div className="midDescription-container">
            <h2> Description </h2>
            <p className="descriptiontext">
              Flutter, recognized for its rapid ascension in the tech world, has
              become the go-to framework for crafting natively compiled
              applications across various platforms. The course is meticulously
              curated to demystify Flutter's efficiency, expressive UI, and its
              ability to streamline app development for a diverse audience.{" "}
              <br /> <br />
              Tailored for beginners and devoid of prerequisites, our course is
              a gateway for anyone eager to delve into the world of mobile app
              development. Whether you're a coding aficionado or a newcomer, our
              step-by-step approach ensures a seamless learning experience.
              <br />
              <br />
              Structured with precision, the curriculum unfolds systematically.
              Begin your journey by mastering Dart, the programming language
              integral to Flutter. Move on to grasp the essentials of UI
              development, with immersive hands-on practice to fortify your
              skills. As you progress, delve into advanced concepts, empowering
              you to tackle real-world app development challenges. The course
              culminates with an extensive exploration of Firebase integration,
              enabling you to infuse your Flutter applications with robust
              backend functionality. <br />
              <br />
            </p>
          </div>

          <div className="midcurated-container">
            <h2> Curated and verified by experts </h2>
            <img src="/img/curatedCourse.png" alt="curated course" />
            <div className="points-wrap">
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                The best resources handpicked to provide best explaination
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                Structured pathways, saving learners time by presenting
                essential topics without unnecessay information
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                Expertly-Selected Resources, ensuring high-quality materials
                that align with industry standards.
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                Streamlined Learning Experience, curated courses streamline the
                learning process for a more effective and enjoyable experience.
              </div>
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default index;
