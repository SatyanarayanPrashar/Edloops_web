import React, { ReactNode } from "react";
import CurriculumCard from "@/Components/CurriculumCard";
import BlogCard from "@/Components/BlogCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import { publicRoutes } from "@/enums/route.enum";

const Index = () => {
  return (
    <AuthLayout>
      <div className="homeTop">
        <div>
          <div className="homeTop_Title">EdLoops</div>
          <div className="homeTop_MotoT">Learn Teach Repeat</div>
          <div className="homeTop_MotoB">
            Learn from curriculums from experts with the POWER of AI.
          </div>
        </div>

        {/* <img src="https://ibb.co/nRx0ywr" alt="blog top"/> */}
      </div>

      <div className="trending_text">
        <h2 className="trending_text_first">Trending</h2>
        <h2 className="trending_text_color">Curriculums</h2>
      </div>
      {/* <p className='trending_bio'>Check out the most 🔥 courses in the market</p> */}

      <div className="Curriculum_Container">
        <CurriculumCard
          imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
          title="Frontend 0 to hero"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio"
          length="21 hours"
          By="Satyanarayan Prashar"
        />
        <CurriculumCard
          imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
          title="Frontend 0 to hero"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio"
          length="21 hours"
          By="Satyanarayan Prashar"
        />
        <CurriculumCard
          imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
          title="Frontend 0 to hero"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio"
          length="21 hours"
          By="Satyanarayan Prashar"
        />
      </div>

      <div className="trending_text">
        <h2 className="trending_text_first">Trending</h2>
        <h2 className="trending_text_color">Articles</h2>
      </div>
      {/* <p className='trending_bio'>Check out the most 🔥 courses in the market</p> */}

      <div className="blogContainer">
        <BlogCard
          imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
          title="How I made this Website using ChatGPT"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
          readTime="21 mis read"
        />
        <BlogCard
          imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
          title="How I made this Website using ChatGPT"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
          readTime="21 mis read"
        />
        <BlogCard
          imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
          title="How I made this Website using ChatGPT"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
          readTime="21 mis read"
        />
      </div>
    </AuthLayout>
  );
};

Index.getLayout = function getLayout(component: ReactNode) {
  return <AuthLayout>{component}</AuthLayout>;
};

export default Index;
