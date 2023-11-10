import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React, { useState } from "react";

const index = () => {
    const faqItems = [
        {
            question: 'Introduction to System Design',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Designing Spotify</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Understanding what System Design is</div>
                    <div className="svg-feature"><img src="/svg/article.svg" /> Components of System Design</div>
                </div>
            )
        },
        {
            question: 'Getting Started with System Design',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Verticle and Horizontal Scaling</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Capacity planning and Estimation</div>
                    <div className="svg-feature"><img src="/svg/article.svg" /> What is HTTP</div>
                    <div className="svg-feature"><img src="/svg/article.svg" /> What is Internet TCP/IP stack?</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> What are Distributed CACHES</div>
                </div>
            )
        },
        {
            question: 'Loadbalancers',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> What are Load Balancer</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Understanding Algorithms of Loadbalancing</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Consistent Hashing</div>
                </div>
            )
        },
        {
            question: 'Asynchronous Processing',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Message Queues | Producer and Consumer Model</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Pub Sub Messaging</div>
                </div>
            )
        },
        {
            question: 'Database Optimization',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> What are NoSQL databases</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Relational Database index vs NoSQL index</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Database Replication Explained </div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Database types</div>
                </div>
            )
        },
        {
            question: 'Database Shrading',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> What is database Shrading</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Key Based Shrading</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Range Based Shrading </div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Directory Based Shrading</div>
                </div>
            )
        },
        {
            question: 'CAP Theorem and Microservices',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> What is CAP Theorem</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Microservices</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Moving from Monoliths to Microservices</div>
                </div>
            )
        },
        {
            question: 'System Design Interviews and Case Studies',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Revisiting: Design Spotify</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Designing Instagram</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Design Reddit Homepage Feed</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Designing TikTok</div>
                </div>
            )
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
                <title>45 Days Upskill Challenge</title>
                <meta name="description" content="45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content="" />
                <meta name="description" content="45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
                <meta itemProp="image" content="https://i.ibb.co/Rbjn1K9/challenge.jpg" />

                {/* <!-- Facebook Meta Tags --> */}

                <meta property="og:type" content="website" />
                <meta property="og:title" content="45 Days Upskill Challenge" />
                <meta property="og:description" content="45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
                <meta property="og:image" content="https://i.ibb.co/Rbjn1K9/challenge.jpg" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="45 Days Upskill Challenge" />
                <meta name="twitter:description" content="45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
                <meta name="twitter:image" content="https://i.ibb.co/Rbjn1K9/challenge.jpg" />
            </Head>

            <AuthLayout>
                <div className="toptitle-container">
                    <div className="topleft-info">
                        {/* <h6>Courses > </h6> */}
                        <h1 className="h1title">System Design: from theory to practice</h1>
                    </div>
                    <div className="topright-sticky">
                        <img src="https://i.ibb.co/s21XCCj/system-design.png" alt="System Design course" />
                        <h2>Free!</h2>
                        <div className="wrapper">
                            <a href="#"><span>Enroll</span></a>
                        </div>
                        <h6>This course includes:</h6>
                        <div className="svg-feature"><img src="/svg/video.svg" /> 21 Lectures</div>
                        <div className="svg-feature"><img src="/svg/casestudy.svg" /> 4 Case Studies</div>
                        <div className="svg-feature"><img src="/svg/infinity.svg" /> Life Time Access</div>
                    </div>
                </div>
                <div className="topdescription">
                    <h2>Guide to building High Level Architecture and System Design.</h2>
                    <h3 className="cont">This is a beginner-friendly self-paced curated course on system design aimed at providing an exclusive and crisp introduction to building and scaling systems. It covers most of the topics under System Design from scratch assuming no prior knowledge.</h3>
                    <div className="svg">
                        <div className="stat"><img src="/svg/verified.svg" />Curated and Verified by Industry experts</div>
                    </div>
                </div>

                <div className="midLearn-container">
                    <h2> What you'll learn </h2>
                    <div className="points-wrap">
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>You will learn the essential system design basic concepts & related terminologies.</p></div>
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>You will learn about the most popular components used in designing efficient systems.</p></div>
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>You will be ready to design your own systems with a focus on scalability, maintainability and reliability.</p></div>
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>Case Studies: You will learn about various high & low level design approaches, architectural patterns on the latest software systems used.</p></div>
                    </div>
                </div>
                <div className="midContent-container">
                    <h2> Course Content </h2>
                    <section className="content-section">
                        <div className="contetnt-list">
                            {faqItems.map((item, index: number) => (
                                <div className={`content-item ${openItem === index ? 'open' : ''}`} key={index}>
                                    <div className="chapter" onClick={() => toggleItem(index)}>
                                        {item.question}
                                        <span className="toggle-icon">{openItem === index ? '-' : '+'}</span>
                                    </div>
                                    {openItem === index && (
                                        <div className="topic">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="midLearn-container">
                        <h2> Pre-Requisites </h2>
                        <div className="points-wrap">
                            <div className="points"> <img src="/svg/tick.svg" alt="tick" />Basic Computer Science fundamentals</div>
                        </div>
                    </div>
                    <div className="midDescription-container">
                        <h2> Description </h2>
                        <p className="descriptiontext">
                            Have you ever wondered what makes the website like Google, Facebook, Netflix are available to us 24 * 7? <br />
                            How are these products able to take so many requests and give responses in the blink of an eye? <br /> <br />
                            The answer is the way these systems are designed. <br />
                            Designing and building complex systems are the need of the hour nowadays for any software engineer. <br />
                            You need to be aware of the high and low-level architecture of the application/system on which these tech products are built. They all have a very solid foundation at their core. It is very important for software companies to be functional all the time in today’s world. It's hard to imagine even a single minute today without these tools. <br />
                            And that's becoming more of a skill, understanding how to keep your systems functional all the time. It is now considered a primary skill to have when you are preparing for a software interview or trying to build a system for your organization or for your own product. <br />
                            Learning how to design scalable systems will help you become a better engineer. <br /> <br />
                            The aim of this course is to help you learn to design large-scale systems and prepare you for system design interviews. You can use any language (Python/ Java/ C#) to develop the solution. <br /><br />
                            In the 1st part, you will be learning the system design basics and in the 2nd part, you will apply them in real-world software systems via comprehensive case studies keeping in mind all the low-level design principles used in the industry as well.
                        </p>
                    </div>
                    <div className="midcurated-container">
                        <h2> Curated and veriffied by experts </h2>
                        <img src="/img/curatedCourse.png" alt="curated course" />
                        <div className="points-wrap">
                            <div className="points"> <img src="/svg/tick.svg" alt="tick" />The best resources handpicked to provide best explaination</div>
                            <div className="points"> <img src="/svg/tick.svg" alt="tick" />Structured pathways, saving learners time by presenting essential topics without unnecessay information</div>
                            <div className="points"> <img src="/svg/tick.svg" alt="tick" />Expertly-Selected Resources, ensuring high-quality materials that align with industry standards.</div>
                            <div className="points"> <img src="/svg/tick.svg" alt="tick" />Streamlined Learning Experience, curated courses streamline the learning process for a more effective and enjoyable experience.</div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>
    );
};

export default index;