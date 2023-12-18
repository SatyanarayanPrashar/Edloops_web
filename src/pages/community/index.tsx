import AuthLayout from "@/Components/Layout/AuthLayout";
import CommunityCard from "@/Components/communityCard";
import Head from "next/head";
import React, { useState } from "react";

const index = () => {
  const faqItems = [
    {
      question: "What will be the benefits of EdLoops premium membership?",
      answer: (
        <div>
          Edloops premiium membership will include following benifits:
          <ul>
            <li>Access to AI Sensei, an advance AI tutor</li>
            <li>Access to Learning Dashboard</li>
            <li>Access to mentors</li>
            <li>Access to gigs and internship oppertunities</li>
            <li>Access to paid Community</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is AI Sensei?",
      answer: (
        <div>
          AI Sensei is an advance AI tutor personalized to each student.
          <br />
          Ask as many doubts as you want anytime, anywhere and get your concepts
          crystal clear in realtime while watching the leactures or practicing
          the problems.
          <br />
          AI sensei will be aware of the lecture postion to order to clear your
          doubts in much relevent ways unlike the other existing AI platforms.
        </div>
      ),
    },
    {
      question: "What is Learning Dashboard?",
      answer: (
        <div>
          Learning dashboard is a interface or system that provides students a
          visual overview of various aspects of learning and educational
          progress. It typically offers data-driven insights, metrics, and
          graphical representations to help students monitor, assess, and
          optimize their learning experiences.
        </div>
      ),
    },
    {
      question: "Why the current courses free to use?",
      answer: (
        <div>
          Our current focus is to provide the best pre-existing resources on the
          internet to students for free. We give the full credit to the tutorial
          makers. <br />
          <br />
          We welcome course makers on Edloops to create & curate Couurses which
          they can monetize.
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
        <title>Community | Edloops</title>
      </Head>
      <AuthLayout>
        <div style={{ margin: "35px" }}></div>
        {/* <div>
          <div className="blogTop_Title mt-0">Stay Ahead</div>
          <div className="blogTop_MotoT">
            Our Journey Has Just Begun
          </div>
          <div className="blogTop_MotoB">A Lot Awaits!</div>
        </div> */}

        <div className="px-lg-0 px-3">
          <CommunityCard />

          {/* FAQ Section */}
          <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqItems.map((item, index: number) => (
                <div
                  className={`faq-item ${openItem === index ? "open" : ""}`}
                  key={index}
                >
                  <div className="question" onClick={() => toggleItem(index)}>
                    {item.question}
                    <span className="toggle-icon">
                      {openItem === index ? "-" : "+"}
                    </span>
                  </div>
                  {openItem === index && (
                    <div className="answer">{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </AuthLayout>
    </>
  );
};

export default index;
