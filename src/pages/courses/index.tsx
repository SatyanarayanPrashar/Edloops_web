import CurriculumCard from "@/Components/CurriculumCard";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageLoader from "@/Components/PageLoader";
import ReviewCard from "@/Components/ReviewCard/ReviewCard";
import CommunityCard from "@/Components/communityCard";
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
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetchBlogContent();
  }, [router.isReady]);

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
        <title>Courses</title>
      </Head>
      <AuthLayout>
        {!loading ? (
          <>
            <div>
                <div className="blogTop_Title mt-0">Simplify Learning</div>
                <div className="blogTop_MotoT">
                  Embark on a Journey of Learning and Mastery
                </div>
                <div className="blogTop_MotoB">with Our Comprehensive Courses</div>
              </div>

            {/* <h3>Trending</h3> */}
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
