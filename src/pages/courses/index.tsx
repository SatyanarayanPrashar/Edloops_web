import CurriculumCard from "@/Components/CurriculumCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageLoader from "@/Components/PageLoader";
import { publicRoutes } from "@/enums/route.enum";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NextLink from "next/link";

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // const [courseData, setCourseData] = useState([]);

  // useEffect(() => {
  //   fetchBlogContent();
  // }, [router.isReady]);

  // const fetchBlogContent = async () => {
  //   setLoading(true);
  //   await requests
  //     .get(blogRequestUrls.course.getAllCourses)
  //     .then((res) => {
  //       const response = ResponseHandler(res);
  //       if (get(response, "status", false)) {
  //         setCourseData(get(response, "data", []));
  //       }
  //       setLoading(false);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       const error = ErrorHandler(e);
  //       toast.error(get(error, "message", ""));
  //     });
  // };
  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>
      <AuthLayout>
        {/* {!loading  ( */}
        <div className="px-lg-0 px-3">
          <div>
            <div className="blogTop_Title mt-0">Simplify Learning</div>
            <div className="blogTop_MotoT">
              Embark on a Journey of Learning and Mastery
            </div>
            <div className="blogTop_MotoB">with Our Comprehensive Courses</div>
          </div>

          {/* <h3>Trending</h3> */}
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
                    advanced concepts of system design. Analyze case studies of
                    designs of Spotify, Amaazona and more. By the end of this
                    course, you'll be well-prepared to excel in SDE interviews
                    and design systems that can handle massive user loads
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
                    This comprehensive course is designed for beginners to start
                    their journey in Flutter development from scratch. You'll
                    learn the basics of Flutter, understand its architecture,
                    and build your first Flutter applications step by step.
                    Whether you're new to programming or looking to transition
                    to mobile app development, this course will provide you with
                    a solid foundation in Flutter.
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
              href={publicRoutes.datascienceCourse}
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
            <NextLink
              className="customCurriculum"
              href={publicRoutes.web3Course}
            >
              <div className="curriculum-preview-card mb-3 me-3">
                <img
                  src="https://i.ibb.co/W24b4kY/web3.jpg"
                  alt="web 3 course image"
                />
                <div className="curriculum-preview-card-content px-2 w-100 mt-2">
                  <h3 className="curriculum-preview-card-title">
                    Web3: Zero to Hero
                  </h3>
                  <p className="curriculum-preview-card-text">
                    This course will teach you the basics of Web3, including
                    what it is, how it works, and the different technologies
                    that make it up. You will also learn how to build and deploy
                    decentralized applications (DApps) and use smart contracts.
                    No prior knowledge of blockchain or programming is required.
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
          {/* <CommunityCard/> */}
        </div>
        {/* ) : (
          <PageLoader />
        )} */}
      </AuthLayout>
    </>
  );
};

export default index;
