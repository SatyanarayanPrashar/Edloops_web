
import AuthLayout from "@/Components/Layout/AuthLayout";
import CommunityCard from "@/Components/communityCard";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>45 Days Upskill Challenge</title>
        <meta name="description" content="Accept 45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="" />
        <meta name="description" content="Accept 45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
        <meta itemProp="image" content="https://i.ibb.co/Rbjn1K9/challenge.jpg" />

        {/* <!-- Facebook Meta Tags --> */}

        <meta property="og:type" content="website" />
        <meta property="og:title" content="45 Days Upskill Challenge" />
        <meta property="og:description" content="Accept 45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
        <meta property="og:image" content="https://i.ibb.co/Rbjn1K9/challenge.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="45 Days Upskill Challenge" />
        <meta name="twitter:description" content="Accept 45 Days Upskill Challenge. Win exciting prizes by staying dedicated and learning with peers. It's your path to skill mastery!" />
        <meta name="twitter:image" content="https://i.ibb.co/Rbjn1K9/challenge.jpg" />
      </Head>

      <AuthLayout>
        <div>

            <div className="challenge-structure">

            <div className="challenge-Content">
                <div className="challenge-header">
                <img src="./img/difficult.gif" alt="45 Days Upskill Challenge"/>
                <h1>45 days Upskill Challenge💪</h1>
                </div>
                <p id="checkpoint1">
                    Do you find it challenging to maintain consistency while upskilling or face the hurdle of procrastination when starting your learning journey?
                </p>
                <p>
                    You're not alone. Many aspiring learners encounter these obstacles on their path to acquiring new skills.
                </p>
                <p>
                    That's where our "45 Days Upskill Challenge" comes in to make the journey smoother, more rewarding, and highly motivating.
                </p>
                <ol>
                <div className="points">
                        <div>
                            <h2 id="checkpoint2">Let's GO!!</h2>
                            <p>
                                To Accept the Challenge <a href="https://discord.gg/NWRBKwpSsD" target="_blank" rel="noopener noreferrer">Join our Discord Community</a>, and fill this<a href="https://5m8ntpxkuyy.typeform.com/to/LbIE4k0t" target="_blank" rel="noopener noreferrer"> Form</a>.
                            </p>
                            <p>
                                And the game is on💪
                            </p>
                            <p>
                            Once the challenge begins, each participant will gather in our dedicated Discord channel at the specified time every day. For the next 45 days, you'll have 2 uninterrupted hours of focused skill-building and self-improvement. No distractions, just pure progress.
                            </p>
                            <h4>Start Date: October 17th, 2023</h4>
                            <h4>Timing: 10:00pm to 12:00am</h4>
                            <h4>Everyday for next 45 Days!!!</h4>
                        </div>
                    </div>

                    <div className="points">
                        <div>
                            <h2 id="checkpoint3">Why to start Now?</h2>
                            <ol>
                                <li>🌟Achieve consistency</li>
                                <li>🤝Stay motivated and inspired by a community of dedicated learners</li>
                                <li>🏆Win exciting prizes and rewards for your dedication </li>
                                <li>🚀Get a chance for a personalized 1-on-1 session with a mentor</li>
                            </ol>
                        </div>
                        <img src="./img/time.gif" alt="its about time" />
                    </div>

                    <div className="points">
                        <img src="./img/accepted.gif" alt="its about time" />
                        <div>
                            <h2 id="checkpoint4">Challenge Accepted</h2>
                            <ol>
                                <li><a href="https://discord.gg/NWRBKwpSsD" target="_blank" rel="noopener noreferrer">Join Discord</a></li>
                                <li><a href="https://5m8ntpxkuyy.typeform.com/to/LbIE4k0t" target="_blank" rel="noopener noreferrer">Fill the Form, it takes only 45 seconds</a> </li>
                                <li>Be consistent for 45 Days</li>
                                <li>Win Edloops Merchandises</li>
                            </ol>
                        </div>
                    </div>
                

                </ol>
                In a nutshell, our "45 Days Upskill Challenge" is your chance to surmount common learning obstacles. It's a unique, engaging, and rewarding experience that can help you gain new skills, meet dedicated individuals, and, who knows, win some fantastic prizes along the way! Don't miss this opportunity to take your learning to the next level.
            </div>
            <CommunityCard />
            </div>

        </div>
      </AuthLayout>
    </>
  );
};

export default index;

