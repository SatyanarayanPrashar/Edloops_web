import BlogCard from "@/Components/BlogCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import NotesList from "@/Components/NotesList";
import TagTile from "@/Components/TagTile";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <AuthLayout>
        <div className="blogTop">
          <div>
            <div className="blogTop_Title mt-0">Stay curious.</div>
            <div className="blogTop_MotoT">
              Discover stories, thinking, and expertise
            </div>
            <div className="blogTop_MotoB">from writers on any topic.</div>
          </div>

          {/* <img src="../../assets\blogTop.png" alt="blog top"/> */}
        </div>
        <NotesList />

        <div className="blogDivider">
          <div className="blog_Container">
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
            <BlogCard
              imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
              title="How I made this Website using ChatGPT"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
              readTime="21 mis read"
            />
          </div>
          <div className="tagFilter_Container">
            <div>Discover more of what matters to you</div>
            <div className="tags_flex">
              <TagTile tagName="Web Development" />
              <TagTile tagName="Data Science" />
              <TagTile tagName="App Development" />
            </div>
          </div>
        </div>
      </AuthLayout>
    </>
  );
};

export default index;
