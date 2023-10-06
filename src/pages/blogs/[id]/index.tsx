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
import CommunityCard from "@/Components/communityCard/communityCard";

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
      fetchBlogContent();
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>{get(blogContent, "title", "")}</title>
        <meta name="description" content={get(blogContent, "content", "")} />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={get(blogContent, "title", "")} />
        <meta name="description" content={get(blogContent, "content", "")} />
        <meta itemProp="image" content="" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://edloops.com/blogs/react-native-vs-flutter-KhrPrM"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={get(blogContent, "title", "")} />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={get(blogContent, "title", "")} />
        <meta
          name="twitter:description"
          content={get(blogContent, "content", "")}
        />
        <meta name="twitter:image" content=""></meta>
      </Head>

      <AuthLayout>
        {!loading ? (
          <>
            <div className="mainblog mt-4">
              <div className="contentblog">
                {/* <h1>{get(blogContent, "title", "")}</h1> */}
                <p className="blog_tags">{get(blogContent, "tags", "")}</p>
                <div
                  className="mt-4 blog_content"
                  dangerouslySetInnerHTML={{
                    __html: get(blogContent, "content", ""),
                  }}
                />
              </div>
              {/* <ChatBox /> */}
            </div>
            <CommunityCard/>
          </>
        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
