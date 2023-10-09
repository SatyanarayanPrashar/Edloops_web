
import AuthLayout from "@/Components/Layout/AuthLayout";
import CommunityCard from "@/Components/communityCard";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Flutter Developer Roadmap 2023</title>
        {/* <meta name="description" content= {get(blogContent, "content", "")}/> */}
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="" />
        {/* <meta name="description" content= {get(blogContent, "content", "")}/> */}
        <meta itemProp="image" content="https://i.ibb.co/8mwvtw0/flutter.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        {/* <meta name="twitter:description" content={get(blogContent, "content", "")}/> */}
        <meta name="twitter:image" content="https://i.ibb.co/8mwvtw0/flutter.png"></meta>
      </Head>

      <AuthLayout>
        <div className="roadmap-structure">

          <div className="blog-Content">
            <div className="roadmap-header">
              <h1>Flutter Developer Roadmap 2023</h1>
              <img src="https://i.ibb.co/8mwvtw0/flutter.png" alt="" />
            </div>
            Becoming a proficient Flutter developer involves a blend of theoretical understanding and practical application. To help you on your journey to success in Flutter development, I've outlined a roadmap based on my personal experience:          <br />
            <ol>
              <li>
                <strong id="checkpoint1">1.Lerning Dart Programming Language :</strong>

                Before delving into Flutter, it's essential to establish a strong foundation in programming. This includes grasping concepts like data types like string, int, bool and null, mastering Conditional statements and Functions. Ignoring Dart was one of the worst mistakes I did while learning Flutter and handling null later gave me truma.

              </li>
              <li>
                <strong id="checkpoint2">2. Learn OOPs Concepts:</strong>

                The concepts of Object Oriented Programming like Classes & Inheritance are extensively used in Flutter Developments. Having these conceps with data types like Lists, Maps and topics like using Futures and asyncronous functions and exception handling are must to have to ease out your development journey later.

              </li>
              <li>
                <strong id="checkpoint3">3. Dive into Flutter:</strong>

                Once you have a solid grounding in programming and Dart, it's time to explore
                <a href="https://flutter.dev/docs" target="_blank" rel="noopener noreferrer"> Flutter Documentation</a>,
                , this documentation covers everything from setting up your development environment to creating your very first Flutter app. But this documentations can be overwhelming for beginners while getting acquainted with the framework. At this point you need not to go dive very deep, begin with learning Folder structure of Flutter, different widgets like Containers, Rows and colums, Positioned, Stack, adding images and then Routing of pages in Flutter.

              </li>
              <li>
                <strong id="checkpoint4">4. Start Practicing UI:</strong>
                Practical experience is invaluable in mastering any framework. <br /><i>"Donot fall in the trap of Tutorials"</i> <br />Start creating simple UIs you can even refer speed codes from YoutTube and simply code with them, Yes there's no shame doing that to learn stuff. Few of my favourite one are:
                <a href="https://youtu.be/LN668OAUrK4?si=YroHSPuF7HLEE2T6" target="_blank"> Plant UI </a>
                and
                <a href="https://www.youtube.com/watch?v=uiJF-ShOLyo" target="_blank"> Chat/Messaging App UI </a> by The Flutter way.
              </li>
              <li>
                <strong id="checkpoint5">5. Learn Advance concepts:</strong>
                Once you are comfortable with the UI creation with Flutter Frameworks, it's time to learn advance concepts like JSON Serializtion & Deserialization, StreamController and StreamBuilder, Single and Broadcast Streams. <br /> I prefer
                <a href="https://www.youtube.com/@RohitSemriwal" target="_blank"> Rohit Semriwal's playlist for this.</a>

              </li>
              <li>
                <strong id="checkpoint6">6. Explore State Management:</strong>
                State management is a crucial concept in Flutter development. Explore different state management options such as setState, Provider, Redux, and GetX to see which one works best for your project. Some suitable projects for this phase can be a news app, a social media app, or a grocery shopping app.
              </li>
              <li>
                <strong id="checkpoint7">7. Engage with the Flutter Community:</strong>
                The Flutter community is vibrant and active, offering a wealth of resources. Connect with this community by participating in online forums, attending local meetups, and engaging with fellow developers. These interactions provide opportunities to learn from experienced developers, receive feedback on your code, and stay updated on the latest trends and best practices.
              </li>
              <li>
                <strong id="checkpoint8">8. And Build Projects, and some cool projects, some more projects:</strong>
                Once you've gained a solid understanding of Dart, Flutter, and explored advanced concepts, the next step is to apply your knowledge by building real-world projects. Building projects is essential because it allows you to put your skills into practice, gain hands-on experience, and demonstrate your abilities to potential employers or clients. 
              </li>
            </ol>
            In summary, aspiring Flutter developers should follow this roadmap, which combines foundational programming knowledge, Dart proficiency, hands-on Flutter experience, community engagement, and state management exploration to achieve success in the field.
          </div>

          <div className="roadmap-path">
            <div className="checkpoint">
              <img src="/img/checkpoint.png" alt="checkpoint" />
              Checkpoint
            </div>
            <ul>
              <li><a href="#checkpoint1">1. Lerning Dart Programming Language </a></li>
              <li><a href="#checkpoint2">2. Learn OOPs Concepts</a></li>
              <li><a href="#checkpoint3">3. Dive into Flutter</a></li>
              <li><a href="#checkpoint4">4. Start Practicing UI</a></li>
              <li><a href="#checkpoint5">5. Learn Advance concepts</a></li>
              <li><a href="#checkpoint6">6. Explore State Management</a></li>
              <li><a href="#checkpoint7">7. Engage with the Flutter Community</a></li>
              <li><a href="#checkpoint8">8. Build Projects</a></li>
            </ul>
          </div>
        </div>
        <CommunityCard />
      </AuthLayout>
    </>
  );
};

export default index;

