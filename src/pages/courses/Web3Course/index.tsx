import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get, includes } from "lodash";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { publicRoutes } from "@/enums/route.enum";
import NextLink from "next/link";
import { ClipLoader } from "react-spinners";

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
    if (includes(get(userInfo, "courses_enrolled", 0), "3")) {
      setCheckEnrolled(true);
    } else {
      setCheckEnrolled(false);
    }
  }, [userInfo]);

  const enrollCourse = async (courseId: any) => {
    const enrolledCourse = {
      courseID: "3",
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
      enrollCourse("1");
    } else {
      setHandleModal(true);
    }
  };
  const faqItems = [
    {
      question: "Introduction to Web3",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> What is Web3
          </div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> What is Blockchain
          </div>
        </div>
      ),
    },
    {
      question: "Basics of Web3",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Blockchain
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> How does bitcoin work?
          </div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> Smart comtract
          </div>
        </div>
      ),
    },
    {
      question: "Introduction to Solidity",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Setting up our first contract
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Types and functions
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Arrays & Structs
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Handling errors, memory and
            mapping
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Deploying our first contract
          </div>
        </div>
      ),
    },
    {
      question: "Solidty: Playing around contracts and imports",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Contracts
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Chainlink
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Interfaces & Price Feeds and
            importing from GitHub & NPM
          </div>
        </div>
      ),
    },
    {
      question: "Solidty Basics",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> Floating Point Math in Solidity
          </div>
          <div className="svg-feature">
            <img src="/svg/article.svg" /> More on Array and Stracts
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Libraries in Solidity
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> For Loop
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Sending eth from a contract
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Constructors and Modifiers
          </div>
        </div>
      ),
    },
    {
      question: "Advanced Solidity Concepts",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Advanced Concepts in Solidity
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Ether.js Simple Storage
          </div>
        </div>
      ),
    },
    {
      question: "Moving to local development",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Debugging
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Moving to local development:
            installation
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Local development: introduction
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Asynchronous programming JS
          </div>
        </div>
      ),
    },
    {
      question: "Ether.js",
      answer: (
        <div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Introduction to Ether.js
          </div>
          <div className="svg-feature">
            <img src="/svg/youtubeblack.svg" /> Deploying to a Testnet or a
            Mainnet
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
        <title>Web3: Zero to Hero</title>
        <meta
          name="description"
          content="This course will teach you the basics of Web3, including what it is, how it works, and the different technologies that make it up. You will also learn how to build and deploy decentralized applications (DApps) and use smart contracts. No prior knowledge of blockchain or programming is required."
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Web3: Zero to Hero" />
        <meta
          name="description"
          content="This course will teach you the basics of Web3, including what it is, how it works, and the different technologies that make it up. You will also learn how to build and deploy decentralized applications (DApps) and use smart contracts. No prior knowledge of blockchain or programming is required."
        />
        <meta itemProp="image" content="https://i.ibb.co/W24b4kY/web3.jpg" />

        {/* <!-- Facebook Meta Tags --> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web3: Zero to Hero" />
        <meta
          property="og:description"
          content="This course will teach you the basics of Web3, including what it is, how it works, and the different technologies that make it up. You will also learn how to build and deploy decentralized applications (DApps) and use smart contracts. No prior knowledge of blockchain or programming is required."
        />
        <meta property="og:image" content="https://i.ibb.co/W24b4kY/web3.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web3: Zero to Hero" />
        <meta
          name="twitter:description"
          content="This course will teach you the basics of Web3, including what it is, how it works, and the different technologies that make it up. You will also learn how to build and deploy decentralized applications (DApps) and use smart contracts. No prior knowledge of blockchain or programming is required."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/W24b4kY/web3.jpg"
        />
      </Head>

      <AuthLayout>
        <div className="toptitle-container">
          <div className="topleft-info">
            {/* <h6>Courses > </h6> */}
            <h1 className="h1title">Web3: Zero to Hero</h1>
          </div>
          <div className="topright-sticky">
            <img src="https://i.ibb.co/W24b4kY/web3.jpg" alt="web 3 course" />
            <h2>Free!</h2>
            <div className="wrapper">
              {checkEnrolled ? (
                <NextLink href={publicRoutes.curriculum + "/3"}>
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
              <img src="/svg/video.svg" /> 27 Lectures
            </div>
            <div className="svg-feature">
              <img src="/svg/infinity.svg" /> Life Time Access
            </div>
          </div>
        </div>
        <div className="topdescription">
          <h2>Web3: Zero to Hero</h2>
          <h3 className="cont">
            This is a beginner-friendly self-paced curated course for Web3
            development aimed at providing an exclusive and crisp introduction
            to web3. It covers most of the topics necessary to start a carrier
            as a blockchain developer, from scratch assuming no prior knowledge.
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
            <h2> What you'll learn </h2>
            <div className="points-wrap">
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>
                  The course provides knowledge all the necessary toolbox you
                  need to become a blockchain developer
                </p>
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>
                  Understand the basic philosophy behind the blockchain and
                  distributed/decentralized applications
                </p>
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>
                  The basics of how a blockchain generally works, just enough to
                  be able to use it as a development platform
                </p>
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                <p>The fundamentals of the Solidity smart contract language</p>
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

          <div className="midLearn-container">
            <h2> Pre-Requisites </h2>
            <div className="points-wrap">
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                Basic Computer Science fundamentals
              </div>
              <div className="points">
                {" "}
                <img src="/svg/tick.svg" alt="tick" />
                Pre existing knowledge of JavaScript will help
              </div>
            </div>
          </div>

          <div className="midDescription-container">
            <h2> Description </h2>
            <p className="descriptiontext">
              This course is a complete introduction to decentralized
              application (Dapp) development on the Ethereum blockchain using
              the Solidity language and the Truffle build framework.
              <br /> <br />
              No need to know anything about the blockchain, you should just
              have some basic software development experience. Whether you have
              already written some code for backend, web or mobile applications,
              it should be enough to become a blockchain developer thanks to
              this course.
              <br />
              <br />
              The blockchain is all the rage these days, and there is a lot of
              theoretical or anticipative talk around it, but this course will
              help you get your hands dirty with actual code in order to build
              your first decentralized application. This is the kind of skill
              that can get you an actual job as a blockchain developer,
              something that is in skyrocketing demand right now.
              <br />
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
