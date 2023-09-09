import Chapter from "@/Components/Chapter";
import ChatBox from "@/Components/ChatBox";
import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React from "react";

const index = () => {
  const chapters = [
    {
      id: 1,
      title: "Basics",
      subItems: [
        {
          id: 3,
          type: "link",
          title: "Introduction to Cource",
          url: "https://www.example.com/subitem1",
        },
        {
          id: 3,
          type: "link",
          title: "Setting up VS Code",
          url: "https://www.example.com/VSCode",
        },
      ],
    },
    {
      id: 2,
      title: "HTML and CSS",
      subItems: [
        {
          id: 3,
          type: "link",
          title: "HTML in one shot",
          url: "https://www.example.com/subitem1",
        },
        {
          id: 4,
          type: "dropdown",
          title: "CSS",
          links: [
            {
              id: 5,
              title: "Selectors and Properties",
              url: "https://www.example.com/subitem2/link1",
            },
            {
              id: 6,
              title: "Display Property",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Flex Box",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Media Query",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Variables and custom properties",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Tranform and animations",
              url: "https://www.example.com/subitem2/link2",
            },
          ],
        },
        {
          id: 41,
          type: "dropdown",
          title: "Tailwind CSS",
          links: [
            {
              id: 5,
              title: "Selectors and Properties",
              url: "https://www.example.com/subitem2/link1",
            },
            {
              id: 6,
              title: "Display Property",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Flex Box",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Media Query",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Variables and custom properties",
              url: "https://www.example.com/subitem2/link2",
            },
            {
              id: 6,
              title: "Tranform and animations",
              url: "https://www.example.com/subitem2/link2",
            },
          ],
        },
      ],
    },
    {
      id: 23,
      title: "Project 1",
      subItems: [
        {
          id: 3,
          type: "link",
          title: "Introduction to Cource",
          url: "https://www.example.com/subitem1",
        },
        {
          id: 3,
          type: "link",
          title: "Setting up VS Code",
          url: "https://www.example.com/VSCode",
        },
      ],
    },
    {
      id: 23,
      title: "Javascript basics",
      subItems: [
        {
          id: 3,
          type: "link",
          title: "Introduction to Cource",
          url: "https://www.example.com/subitem1",
        },
        {
          id: 3,
          type: "link",
          title: "Setting up VS Code",
          url: "https://www.example.com/VSCode",
        },
      ],
    },
    // {
    //   id: 23,
    //   title: "Project 2",
    //   subItems: [
    //     {
    //       id: 3,
    //       type: "link",
    //       title: "Introduction to Cource",
    //       url: "https://www.example.com/subitem1"
    //     },
    //     {
    //       id: 3,
    //       type: "link",
    //       title: "Setting up VS Code",
    //       url: "https://www.example.com/VSCode"
    //     },
    //   ]
    // },
    // {
    //   id: 23,
    //   title: "React JS",
    //   subItems: [
    //     {
    //       id: 3,
    //       type: "link",
    //       title: "Introduction to Cource",
    //       url: "https://www.example.com/subitem1"
    //     },
    //     {
    //       id: 3,
    //       type: "link",
    //       title: "Setting up VS Code",
    //       url: "https://www.example.com/VSCode"
    //     },
    //   ]
    // },
    // {
    //   id: 23,
    //   title: "Project 3",
    //   subItems: [
    //     {
    //       id: 3,
    //       type: "link",
    //       title: "Introduction to Cource",
    //       url: "https://www.example.com/subitem1"
    //     },
    //     {
    //       id: 3,
    //       type: "link",
    //       title: "Setting up VS Code",
    //       url: "https://www.example.com/VSCode"
    //     },
    //   ]
    // },
  ];
  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>
      <AuthLayout>
        <div className="curicullums">
          <div>
            <h1>Frontend Crash Course</h1>
            <div className="belowTitle">
              {chapters.map((chapter) => (
                <>
                  {console.log(chapter.subItems, "chapter.subItems")}
                  <Chapter
                    key={chapter.id}
                    chapterTitle={chapter.title}
                    chapterLinks={[]}
                    subItems={chapter.subItems}
                  />
                </>
              ))}
            </div>
          </div>
         
          <ChatBox />
        </div>
      </AuthLayout>
    </>
  );
};

export default index;
