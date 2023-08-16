import ChatBox from "@/Components/ChatBox";
import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";
import { get } from "lodash";
import { toast } from "react-toastify";
import PageLoader from "@/Components/PageLoader";

const index = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [blogContent, setBlogContent] = useState({});

  const fetchBlogContent = async () => {
    setLoading(true);
    await requests
      .get(blogRequestUrls.blogs.getSingleBlog(router.query.id))
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setBlogContent(get(response, "data", []));
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "message", ""));
      });
  };

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.id, "router");
      fetchBlogContent();
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Blog Content</title>
      </Head>
      <AuthLayout>
        {!loading ? (
          <>
            <div className="mainblog mt-4">
              <div className="contentblog">
                <h1>{get(blogContent, "title", "")}</h1>
                <h2 className="blog_tags">{get(blogContent, "tags", "")}</h2>
                <div
                  className="mt-4 blog_content"
                  dangerouslySetInnerHTML={{
                    __html: get(blogContent, "content", ""),
                  }}
                />
              </div>
              <ChatBox />
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
