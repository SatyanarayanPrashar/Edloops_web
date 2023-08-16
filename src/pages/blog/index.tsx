import BlogCard from "@/Components/BlogCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import NotesList from "@/Components/NotesList";
import PageLoader from "@/Components/PageLoader";
import TagTile from "@/Components/TagTile";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get, map } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [blogs, setBlogs] = useState([]);
  console.log(loading, "loading");

  useEffect(() => {
    if (router.isReady) {
      fetchNotes();
      fetchBlogs();
    }
  }, [router.isReady]);

  const fetchNotes = async () => {
    setLoading(true);
    await requests
      // .get(blogRequestUrls.notes.getNotes)
      .get(blogRequestUrls.notes.getNotes)
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          // Remove empty objects from array
          let filteredData = get(response, "data", []).filter(
            (value: any) => Object.keys(value).length !== 0
          );
          setNotes(filteredData);
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "message", ""));
      });
  };

  const fetchBlogs = async () => {
    setLoading(true);
    await requests
      .get(blogRequestUrls.blogs.getAllBlogs)
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setBlogs(get(response, "data", []));
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "message", ""));
      });
  };

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <AuthLayout>
        {!loading ? (
          <>
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
            <NotesList notesData={notes} />

            <div className="blogDivider mt-md-3 mt-4">
              <div className="blog_Container">
                {blogs.map((blog: any, index: any) => (
                  <BlogCard
                    key={index}
                    imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
                    title={get(blog, "title", "")}
                    text={get(blog, "content", "")}
                    readTime="21 mis read"
                    slug={get(blog, "slug", "")}
                  />
                ))}
                {/* <BlogCard
                  imageSrc="https://www.waterfieldtech.com/wp-content/uploads/2022/12/Chatgpt-customer-service-bot-scaled.jpeg"
                  title="How I made this Website using ChatGPT"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut magna ac nisl auctor ultrices. Aliquam sed velit odio."
                  readTime="21 mis read"
                /> */}
              </div>
              <div className="tagFilter_Container mb-4 mb-md-0">
                <div>Discover more of what matters to you</div>
                <div className="tags_flex">
                  <TagTile tagName="Web Development" />
                  <TagTile tagName="Data Science" />
                  <TagTile tagName="App Development" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
