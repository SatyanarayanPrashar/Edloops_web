import BlogCardHardcoded from "@/Components/BlogCard/blogcardhardcoded";
import AuthLayout from "@/Components/Layout/AuthLayout";
import PageLoader from "@/Components/PageLoader";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NextLink from "next/link";
import { publicRoutes } from "@/enums/route.enum";

const index = () => {
  const router = useRouter();
  // const [loading, setLoading] = useState(true);
  // const [notes, setNotes] = useState([]);
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   if (router.isReady) {
  //     fetchBlogs();
  //   }
  // }, [router.isReady]);

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
        <meta itemProp="image" content="https://i.ibb.co/YNc7SkF/edloops.png" />
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
        {/* {!loading ? ( */}
        {true ? (
          <div className="px-lg-0 px-3">
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

            {/* <div className="blogDivider mt-md-3 mt-4">
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
            </div> */}
            <NextLink href={publicRoutes.flutterroadmap}>
              <BlogCardHardcoded
                imageSrc={"https://i.ibb.co/8mwvtw0/flutter.png"}
                title="Flutter Developer Roadmap 2023"
                text="Discover the essential steps to becoming a skilled Flutter developer. From mastering programming fundamentals to exploring state management, this roadmap guides you through your journey to success."
                readTime="3 mis read"
              />
            </NextLink>
            <NextLink href={publicRoutes.systemdesignroadmap}>
              <BlogCardHardcoded
                imageSrc={"https://i.ibb.co/s21XCCj/system-design.png"}
                title="Roadmap to excel System Design interviews 2024"
                text="Learning System Design in the currect order is important to understand it properly. This Roadmap covers the all essential steps to excel your System Design Interviews."
                readTime="2 mis read"
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
          </div>
        ) : (
          <PageLoader />
        )}
      </AuthLayout>
    </>
  );
};

export default index;
