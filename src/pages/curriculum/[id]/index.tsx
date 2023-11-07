import Chapter from "@/Components/Chapter";
import AuthLayout from "@/Components/Layout/AuthLayout";
import LoginModal from "@/Components/LoginModal";
import PageLoader from "@/Components/PageLoader";
import ReviewCard from "@/Components/ReviewCard/ReviewCard";
import CommunityCard from "@/Components/communityCard";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { RootState } from "@/redux";
import { callUserApi } from "@/redux/ui/ui.action";
import { get, includes } from "lodash";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [courseEnroll, setCourseEnroll] = useState([]);
  const [checkEnrolled, setCheckEnrolled] = useState(false);
  const [handleModal, setHandleModal] = useState(false);
  const loggedInUserId = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );
  const callApi = useSelector((state: RootState) => state.uiState.callUserApi);

  useEffect(() => {
    if (includes(courseEnroll, parseInt(router.query.id as any))) {
      setCheckEnrolled(true);
    }
  }, [userInfo, loggedInUserId]);

  useEffect(() => {
    if (router.isReady) {
      fetchBlogContent();
    }

    if (loggedInUserId) {
      fetchUserDetail();
    } else {
      setHandleModal(false);
    }
  }, [router.isReady, loggedInUserId]);

  const fetchBlogContent = async () => {
    setLoading(true);
    await requests
      .get(blogRequestUrls.course.getSingleCourse(router.query.id))
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setData(get(response, "data", []));
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "message", ""));
      });
  };

  const fetchUserDetail = async () => {
    setLoading(true);
    await requests
      .get(blogRequestUrls.users.getUserInfo(loggedInUserId))
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setUserInfo(get(response, "data", {}));
          setCourseEnroll(get(response, "data.courses_enrolled", []));
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "message", ""));
      });
  };

  const enrollCourse = async (courseId: any) => {
    const enrolledCourse = {
      courseID: courseId,
    };
    setLoading(true);
    await requests
      .put(
        blogRequestUrls.course.enrollCourseWithId(loggedInUserId),
        enrolledCourse
      )
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setUserInfo(get(response, "data", {}));
        }
        setLoading(false);
        if (get(res, "data.message", "")) {
          toast.success(get(res, "data.message", ""));
          dispatch(callUserApi({ call: true }));
          setCheckEnrolled(true);
        } else {
          toast.error(get(res, "data.error", ""));
        }
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "error", ""));
      });
  };

  const handleEnroll = () => {
    if (loggedInUserId) {
      enrollCourse(get(data, "id", 0));
    } else {
      setHandleModal(true);
    }
  };

  return (
    <>
      <Head>
        <title>Course | Edloops</title>
        <meta name="description" content="Curated Courses to learn tech without spending any money." />

{/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Edloops" />
        <meta itemProp="description" content="Curated Courses to learn tech without spending any money." />
        <meta itemProp="image" content="https://i.ibb.co/YNc7SkF/edloops.png" />
      </Head>
      <AuthLayout>
        {!loading ? (
          <div className="curicullums">
            <div className="w-100">
              <div className="course-topcard">
                <div className="image-title">
                  <img
                    src={
                      get(data, "image") !== ""
                        ? get(data, "image")
                        : "https://i.ibb.co/279v54n/code-1839406-640.jpg"
                    }
                    alt={get(data, "title")}
                  />
                  {/* <img src={"https://i.ibb.co/279v54n/code-1839406-640.jpg"} alt={get(data, "title")} /> */}
                </div>
                <div className="title-description">
                  <h1 className="mt-4">{get(data, "title", "")}</h1>
                  {get(data, "description", "")}
                  <button
                    onClick={handleEnroll}
                    className={`${
                      checkEnrolled || callApi ? "pointer-none" : ""
                    } enroll-link d-flex`}
                    type="button"
                    disabled={checkEnrolled || callApi}
                  >
                    {checkEnrolled || callApi
                      ? "Enrolled"
                      : "Enroll This Course"}
                    <span>
                      <i className="fa-solid fa-angle-right ms-2"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="belowTitle">
                <>
                  {get(data, "chapters", []).map((item: any) => (
                    <>
                      <Chapter
                        key={get(item, "id", 0)}
                        chapterResources={get(item, "resources", [])}
                        chapterTitle={get(item, "title", "")}
                        chapterLinks={[]}
                        checkEnrolled={checkEnrolled}
                      />
                    </>
                  ))}

                  <div className="review">
                    <ReviewCard
                      name="Satya"
                      designation="founder @Edloops | PM @TreeVed"
                      profilePic={"/img/satya.png"}
                      review="These curated courses are improvement of what roadmap I followed to become industry ready developer. Feel free to ping me on discord for any kind related quieres or removal of content."
                    />
                    <ReviewCard
                      name="Arnav Anant"
                      designation="student"
                      profilePic={"/img/user.png"}
                      review="Amazing curation! there are so much of free resources avilable, but getting to the right one is difficult. These Courses really navigates you to the tressures in the ocean."
                    />
                  </div>
                  <CommunityCard />
                </>
              </div>
            </div>
            {handleModal && (
              <LoginModal
                setHandleModal={setHandleModal}
                handleModal={handleModal}
              />
            )}
          </div>
        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
