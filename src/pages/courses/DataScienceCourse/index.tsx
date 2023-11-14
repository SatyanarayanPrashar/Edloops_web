import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React, { useState } from "react";
import NextLink from "next/link";
import { publicRoutes } from "@/enums/route.enum";

const index = () => {
    const faqItems = [
        {
            question: 'Introduction to Data Science',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> What is Data Science</div>
                </div>
            )
        },
        {
            question: 'Object Oriented Programming, OOPs',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Classes and Objects</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Inheritance and Abstract Class</div>
                    <div className="svg-feature"><img src="/svg/article.svg" /> More on OOPs for Flutter</div>
                </div>
            )
        },
        {
            question: 'Learning Python Programming Language',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Variables and Inputs</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Type Conversion</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Strings</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Condional Statements</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Lists and Tuples</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Dictionaries</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Functions & Modules</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Read & Write Files</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Classes and Objects</div>
                </div>
            )
        },
        {
            question: 'Numpy',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Introduction to Numpy</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Basic Array Operations</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Slicing/Stacking Arrays with Boolean Arrays</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Iterate array using nditer</div>
                </div>
            )
        },
        {
            question: 'Pandas',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/article.svg" /> DataFrames and Series Basics</div>
                    <div className="svg-feature"><img src="/svg/article.svg" /> Indexes</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Filtering</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" />  Updating Rows and Columns</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Add/Remove Rows and Columns from DataFrames</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Sorting Data</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Grouping and Aggregating</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Reading/Writing Data to Different Sources</div>
                </div>
            )
        },
        {
            question: 'Business Case Studies',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> How Amul Beat its Competition</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> How Asian Painrs Built Monopoly</div>
                </div>
            )
        },
        {
            question: 'Statistics and Maths for Data Science',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Median, Mean, Mode, Percentile</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Standard Deviation and Mean Absolute Deviation</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Normal Distribution and Z score</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Log and Log Normal Distribution</div>
                </div>
            )
        },
        {
            question: 'Machine Learning',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Machine Learning for data science in one shot </div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> A real Machine Learning Problem</div>
                </div>
            )
        },
        {
            question: 'SQL',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> SQL for Data Science in one video</div>
                </div>
            )
        },
        {
            question: 'PowerBi with Projects',
            answer: (
                <div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Microsoft PowerBi Tutorial</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Project: Personal Finance Dasboard</div>
                    <div className="svg-feature"><img src="/svg/youtubeblack.svg" /> Project: HR Data Analytics Dasboard</div>
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
                <title>Data Science for Beginners</title>
                <meta name="description" content="The Course is structured for a total beginner, having no coding or computer science background. Following so will build a very strong foundation for a strong Data Science carrier." />
                {/* <!-- Google / Search Engine Tags --> */}
                <meta itemProp="name" content="Data Science for Beginners" />
                <meta name="description" content="The Course is structured for a total beginner, having no coding or computer science background. Following so will build a very strong foundation for a strong Data Science carrier." />
                <meta itemProp="image" content="https://i.ibb.co/mcTQyvF/Group-37.png" />

                {/* <!-- Facebook Meta Tags --> */}

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Data Science for Beginners" />
                <meta property="og:description" content="The Course is structured for a total beginner, having no coding or computer science background. Following so will build a very strong foundation for a strong Data Science carrier." />
                <meta property="og:image" content="https://i.ibb.co/mcTQyvF/Group-37.png" />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Data Science for Beginners" />
                <meta name="twitter:description" content="The Course is structured for a total beginner, having no coding or computer science background. Following so will build a very strong foundation for a strong Data Science carrier." />
                <meta name="twitter:image" content="https://i.ibb.co/mcTQyvF/Group-37.png" />
            </Head>

            <AuthLayout>
                <div className="toptitle-container">
                    <div className="topleft-info">
                        {/* <h6>Courses > </h6> */}
                        <h1 className="h1title">Data Science for Beginners</h1>
                    </div>
                    <div className="topright-sticky">
                        <img src="https://i.ibb.co/mcTQyvF/Group-37.png" alt="data science course" />
                        <h2>Free!</h2>
                        <div className="wrapper">
                            <a href="https://edloops.com/curriculum/13"><span>Start Learning</span></a>
                        </div>
                        <h6>This course includes:</h6>
                        <div className="svg-feature"><img src="/svg/video.svg" /> 36 Lectures</div>
                        <div className="svg-feature"><img src="/svg/casestudy.svg" /> 2 Projects</div>
                        <div className="svg-feature"><img src="/svg/infinity.svg" /> Life Time Access</div>
                    </div>
                </div>
                <div className="topdescription">
                    <h2>An introduction to Data Science</h2>
                    <h3 className="cont">This is a beginner-friendly self-paced curated course for Data Science aimed at providing an exclusive and crisp introduction to Data Science. It covers most of the topics necessary to start a carrier as a data science analyst, from scratch assuming no prior knowledge.</h3>
                    <div className="svg">
                        <div className="stat"><img src="/svg/verified.svg" />Curated and Verified by Industry experts</div>
                    </div>
                </div>

                <div className="midLearn-container">
                    <h2> What you'll learn </h2>
                    <div className="points-wrap">
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>The course provides knowledge all the necessary toolbox you need to become a data scientist</p></div>
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>Start coding in Python and learn how to use it for statistical analysis</p></div>
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>Apply your skills to real-life business cases</p></div>
                        <div className="points"> <img src="/svg/tick.svg" alt="tick" /><p>Build two projects alongside for your resume</p></div>
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
                        In the digital age, the role of a data scientist is pivotal and in high demand. However, acquiring the necessary skills has been a challenge due to limited specialized programs and fragmented online courses. <br /> <br />
                        This curated course covers a comprehensive array of topics in a logical sequence, from understanding the field and mathematics to Python programming, advanced statistical techniques, data visualization, and machine learning.<br /><br />
                        Designed to overcome the hurdles of traditional programs, our course offers a cost-effective and time-efficient pathway to becoming a proficient data scientist. We've consolidated all the necessary resources in one place, providing a structured and seamless learning experience. Join us on this transformative journey, where each element is thoughtfully curated to empower you in the dynamic realm of data science.<br /><br />
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
            </AuthLayout>
        </>
    );
};

export default index;