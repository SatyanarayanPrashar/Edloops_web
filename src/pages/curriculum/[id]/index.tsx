import Chapter from "@/Components/Chapter";
import ChatBox from "@/Components/ChatBox";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageLoader from "@/Components/PageLoader";
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
              <h1 className="mt-4">{get(data, "title", "")}</h1>
              <div className="belowTitle">
                <>
                  {get(data, "chapters", []).map((item: any) => (
                    <Chapter
                      key={get(item, "id", "")}
                      chapterResources={get(item, "resources", [])}
                      chapterTitle={get(item, "title", "")}
                      chapterLinks={[]}
                      // subItems={chapter.subItems}
                    />
                  ))}
                </>
              </div>
            </div>
            {/* <ChatBox /> */}
          </div>
        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
