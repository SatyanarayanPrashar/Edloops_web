import React, { useEffect, useState } from "react";
import CurriculumCard from "@/Components/CurriculumCard";
import NextLink from "next/link";
import { publicRoutes } from "@/enums/route.enum";
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
import UserCard from "@/Components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux";
import AddReferalModal from "@/Components/AddReferalModal";
import { checkLoggedInUser } from "@/redux/ui/ui.action";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const handleReferralModal = useSelector(
    (state: RootState) => state.uiState.showReferralModal
  );

  useEffect(() => {
    if (router.isReady) {
      fetchCourses();
      // fetchBlogs();
    }
  }, [router.isReady]);

  // const fetchBlogs = async () => {
  //   setLoading(true);
  //   await requests
  //     .get(blogRequestUrls.blogs.getAllBlogs)
  //     .then((res) => {
  //       const response = ResponseHandler(res);
  //       if (get(response, "status", false)) {
  //         setBlogs(get(response, "data", []));
  //       }
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       const error = ErrorHandler(e);
  //       toast.error(get(error, "message", ""));
  //     });
  // };

  const fetchCourses = async () => {
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
        <meta property="og:url" content="" />
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
          <div>
            {/* <div className="homeTop">
              <div>
                <div className="homeTop_Title">EdLoops</div>
                <div className="homeTop_MotoT">Learn Teach Repeat
                </div>
              </div>
            </div> */}

            <div className="trending_text">
              <h2 className="trending_text_first">Trending</h2>
              <h2 className="trending_text_color">Curriculums</h2>
            </div>
            <p className="trending_bio">
              Discover our carefully curated course offerings 📚 to embark on
              your journey to mastering a wide range of subjects and skills.{" "}
              <br />
              🚀 Your path to gaining expertise in diverse fields begins right
              here.
            </p>
            <div className="Curriculum_Container">
              <NextLink
                className="customCurriculum"
                href={publicRoutes.systemdesignCourse}
              >
                <div className="curriculum-preview-card mb-3 me-3">
                  <img
                    src="https://i.ibb.co/s21XCCj/system-design.png"
                    alt="System Design Course image"
                  />
                  <div className="curriculum-preview-card-content px-2 w-100 mt-2">
                    <h3 className="curriculum-preview-card-title">
                      System Design: From Theory to Practice
                    </h3>
                    <p className="curriculum-preview-card-text">
                      Course is curated with the best tutorials and articles
                      covering all the essential topics from fundamental to
                      advanced concepts of system design. Analyze case studies
                      of designs of Spotify, Amaazona and more. By the end of
                      this course, you'll be well-prepared to excel in SDE
                      interviews and design systems that can handle massive user
                      loads
                    </p>
                    <div className="feature">
                      <div className="svg-feature">
                        <img src="/svg/youtubeblack.svg" /> 25 Lectures
                      </div>
                    </div>
                  </div>
                </div>
              </NextLink>
              <NextLink
                className="customCurriculum"
                href={publicRoutes.flutterdevCourse}
              >
                <div className="curriculum-preview-card mb-3 me-3">
                  <img
                    src="https://i.ibb.co/gmn7SQg/images.png"
                    alt="Flutter Development course image"
                  />
                  <div className="curriculum-preview-card-content px-2 w-100 mt-2">
                    <h3 className="curriculum-preview-card-title">
                      Flutter Development from scratch
                    </h3>
                    <p className="curriculum-preview-card-text">
                      This comprehensive course is designed for beginners to
                      start their journey in Flutter development from scratch.
                      You'll learn the basics of Flutter, understand its
                      architecture, and build your first Flutter applications
                      step by step. Whether you're new to programming or looking
                      to transition to mobile app development, this course will
                      provide you with a solid foundation in Flutter.
                    </p>
                    <div className="feature">
                      <div className="svg-feature">
                        <img src="/svg/youtubeblack.svg" /> 33 Lectures
                      </div>
                    </div>
                  </div>
                </div>
              </NextLink>
              <NextLink
                className="customCurriculum"
                href={publicRoutes.web3Course}
              >
                <div className="curriculum-preview-card mb-3 me-3">
                  <img
                    src="https://i.ibb.co/mcTQyvF/Group-37.png"
                    alt="data science course image"
                  />
                  <div className="curriculum-preview-card-content px-2 w-100 mt-2">
                    <h3 className="curriculum-preview-card-title">
                      Data Science for beginners
                    </h3>
                    <p className="curriculum-preview-card-text">
                      The Course is structured for a total beginner, having no
                      coding or computer science background. Following so will
                      build a very strong foundation for a strong Data Science
                      carrier.
                    </p>
                    <div className="feature">
                      <div className="svg-feature">
                        <img src="/svg/youtubeblack.svg" /> 36 Lectures
                      </div>
                    </div>
                  </div>
                </div>
              </NextLink>

              {/* {courseData.map((item: any) => (
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
                ))} */}
            </div>

            <div className="trending_text">
              <h2 className="trending_text_first">Handpicked</h2>
              <h2 className="trending_text_color">Roadmap</h2>
            </div>
            <p className="trending_bio">
              Explore our handpicked roadmaps🛣️ for various tech stacks.🚀 Your
              journey to mastering the latest technologies starts here.
            </p>

            <NextLink href={publicRoutes.systemdesignroadmap}>
              <BlogCardHardcoded
                imageSrc={"https://i.ibb.co/s21XCCj/system-design.png"}
                title="Roadmap to excel System Design interviews 2024"
                text="Learning System Design in the currect order is important to understand it properly. This Roadmap covers the all essential steps to excel your System Design Interviews."
                readTime=""
              />
            </NextLink>
            <NextLink href={publicRoutes.flutterroadmap}>
              <BlogCardHardcoded
                imageSrc={"https://i.ibb.co/8mwvtw0/flutter.png"}
                title="Flutter Developer Roadmap 2023"
                text="Discover the essential steps to becoming a skilled Flutter developer. From mastering programming fundamentals to exploring state management, this roadmap guides you through your journey to success."
                readTime=""
              />
            </NextLink>
            <NextLink href={publicRoutes.datascienceroadmap}>
              <BlogCardHardcoded
                imageSrc={"https://i.ibb.co/Jz164wH/Group-37.png"}
                title="Data Science: Roadmap to Success in 2023"
                text="The need for data science has become increasingly important in today's world due to the vast amount of data being generated by businesses, organizations, and individuals. Discover the essential steps to becoming a skilled Data Scientist."
                readTime=""
              />
            </NextLink>

            {/* <div className="trending_text">
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
              </div>  */}
            {/* </> */}
            {/* ) : (
            <PageLoader />
          )} */}
          </div>
          <UserCard
            name={"Satya"}
            coins={"700"}
            enrolledcourses={["12", "8", "13", "6"]}
            referral="zzzzz"
          />
          {handleReferralModal && <AddReferalModal />}
        </div>
      </AuthLayout>
    </>
  );
};

export default Index;

{
  /* <p className='trending_bio'>Check out the most 🔥 courses in the market</p>  */
}
