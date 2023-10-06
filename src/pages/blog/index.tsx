import BlogCard from "@/Components/BlogCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageLoader from "@/Components/PageLoader";
// import TagTile from "@/Components/TagTile";
// import CommunityCard from "@/Components/communityCard/communityCard";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetchNotes();
      fetchBlogs();
    }
  }, [router.isReady]);

  const fetchNotes = async () => {
    setLoading(true);
    await requests
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
        {/* <!-- HTML Meta Tags --> */}
        <title>Edloops | Blogs</title>
        <meta
          name="description"
          content="Learn to code with free tailored courses"
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Edloops | Blogs" />
        <meta
          name="description"
          content="Learn to code with free tailored courses"
        />
        <meta itemProp="image" content="" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://edloops.com/blogs/react-native-vs-flutter-KhrPrM"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edloops | Blogs" />
        <meta
          property="og:description"
          content="Learn to code with free tailored courses"
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edloops | Blogs" />
        <meta
          name="twitter:description"
          content="Learn to code with free tailored courses"
        />
        <meta name="twitter:image" content=""></meta>
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

              {/* f <img src="../../assets\blogTop.png" alt="blog top"/> */}
            </div>

            {/* commented out the form */}
            {/* <NotesList notesData={notes} /> */}

            <div className="blogDivider mt-md-3 mt-4">
              <div className="blog_Container">
                {blogs.map((blog: any, index: any) => (
                  <BlogCard
                    key={index}
                    imageSrc={
                      get(blog, "image") !== ""
                        ? get(blog, "image")
                        : "https://i.ibb.co/279v54n/code-1839406-640.jpg"
                    }
                    title={get(blog, "title", "")}
                    text={get(blog, "content", "")}
                    readTime="21 mis read"
                    slug={get(blog, "slug", "")}
                  />
                ))}
              </div>
              {/* <div className="tagFilter_Container mb-4 mb-md-0">
                <div>Discover more of what matters to you</div>
                <div className="tags_flex">
                  <TagTile tagName="Web Development" />
                  <TagTile tagName="Data Science" />
                  <TagTile tagName="App Development" />
                </div>
              </div> */}
            </div>
            {/* <CommunityCard/> */}
          </>

        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
