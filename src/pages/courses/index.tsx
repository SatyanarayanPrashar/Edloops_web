import CurriculumCard from "@/Components/CurriculumCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>
      <AuthLayout>
        <h1 className="mt-4 mb-3">Welcome to the Curriculum page!</h1>

        <h3>Trending</h3>
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

        <h3>Web Development</h3>
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
        </div>

        <h3>Artificial Intelegence</h3>
        <div className="Curriculum_Container">
          <CurriculumCard
            imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
            title="Frontend 0 to hero"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio"
            length="21 hours"
            By="Satyanarayan Prashar"
          />
        </div>
      </AuthLayout>
    </>
  );
};

export default index;
