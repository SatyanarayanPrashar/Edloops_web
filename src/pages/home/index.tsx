import React, { ReactNode, useEffect, useState } from "react";
import CurriculumCard from "@/Components/CurriculumCard";
import BlogCard from "@/Components/BlogCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { requests, blogRequestUrls } from "@/helper/apiAgent";
import { get } from "lodash";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import PageLoader from "@/Components/PageLoader";
import ChallengeCard from "@/Components/ChallengeCard";
import BlogCardHardcoded from "@/Components/BlogCard/blogcardhardcoded";

const Index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (router.isReady) {
      fetchBlogContent();
      fetchBlogs();
    }
  }, [router.isReady]);

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

  const fetchBlogContent = async () => {
    setLoading(true);
    await requests
      .get(blogRequestUrls.course.getAllCourses)
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setCourseData(get(response, "data", []));
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
        <title>Home | Edloops</title>
        <meta
          name="description"
          content="Learn to code with free tailored courses"
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Home | Edloops" />
        <meta
          name="description"
          content="Learn to code with free tailored courses"
        />
        <meta itemProp="image" content="https://i.ibb.co/YNc7SkF/edloops.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content=""
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home | Edloops" />
        <meta
          property="og:description"
          content="Learn to code with free tailored courses"
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Edloops" />
        <meta
          name="twitter:description"
          content="Learn to code with free tailored courses"
        />
        <meta name="twitter:image" content=""></meta>
      </Head>
      <AuthLayout>
        <div className="home">
    
          <div className="homeTop">
            <div>
              <div className="homeTop_Title">EdLoops</div>
              <div className="homeTop_MotoT">Learn Teach Repeat
                {/* <br />Learn from curriculums from experts with the POWER of AI. */}
              </div>
            </div>
          </div>
          <div className="trending_text">
            <h2 className="trending_text_first">New</h2>
            <h2 className="trending_text_color">Challenge💪</h2>
          </div>
          <ChallengeCard />

          <div className="trending_text">
            <h2 className="trending_text_first">Handpicked</h2>
            <h2 className="trending_text_color">Roadmap</h2>
          </div>
          <p className='trending_bio'>Explore our handpicked roadmaps🛣️ for various tech stacks. 🚀 Your journey to mastering the latest technologies starts here.</p> 

          <BlogCardHardcoded
            imageSrc={"https://i.ibb.co/8mwvtw0/flutter.png"}
            title="Flutter Developer Roadmap 2023"
            text="Discover the essential steps to becoming a skilled Flutter developer. From mastering programming fundamentals to exploring state management, this roadmap guides you through your journey to success."
            readTime="5 mis read"
          />

          {!loading ? (
            <>
              <div className="trending_text">
                <h2 className="trending_text_first">Trending</h2>
                <h2 className="trending_text_color">Curriculums</h2>
              </div>
              <div className="Curriculum_Container">
                {courseData.map((item: any) => (
                  <CurriculumCard
                    key={item.id}
                    id={get(item, "id", "")}
                    // imageSrc={get(item, "title", "")}
                    title={get(item, "title", "")}
                    text={get(item, "description")}
                    imageSrc={get(item, "image") !== ""
                      ? get(item, "image")
                      : "https://i.ibb.co/279v54n/code-1839406-640.jpg"}
                    length=""
                    By=""
                  />
                ))}
              </div>

              <div className="trending_text">
                <h2 className="trending_text_first">Trending</h2>
                <h2 className="trending_text_color">Blogs</h2>
              </div>
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
            </>
          ) : (
            <PageLoader />
          )}
        </div>
      </AuthLayout>
    </>
  );
};

// Index.getLayout = function getLayout(component: ReactNode) {
//   return <AuthLayout>{component}</AuthLayout>;
// };

export default Index;





{/* <p className='trending_bio'>Check out the most 🔥 courses in the market</p>  */ }