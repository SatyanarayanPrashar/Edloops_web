import Chapter from "@/Components/Chapter";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageLoader from "@/Components/PageLoader";
import ReviewCard from "@/Components/ReviewCard/ReviewCard";
import CommunityCard from "@/Components/communityCard";
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
  const [data, setData] = useState({});

  useEffect(() => {
    if (router.isReady) {
      fetchBlogContent();
    }
  }, [router.isReady]);

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

  return (
    <>
      <Head>
        <title>Curriculum</title>
      </Head>
      <AuthLayout>
        {!loading ? (
          <div className="curicullums">
            <div>
              <div className="image-title">
                <img src={get(data, "image") !== ""
                          ? get(data, "image")
                          : "https://i.ibb.co/279v54n/code-1839406-640.jpg"} alt={get(data, "title")} />
                {/* <img src={"https://i.ibb.co/279v54n/code-1839406-640.jpg"} alt={get(data, "title")} /> */}
                <div className="title-description">
                  <h1 className="mt-4">{get(data, "title", "")}</h1>
                  {get(data, "description", "")}       
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
          </div>
        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
