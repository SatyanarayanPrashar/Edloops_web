import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Head>
      {/* <!-- HTML Meta Tags --> */}
        <title>Edloops</title>
        <meta name="description" content="Curated Courses to learn tech without spending any money." />

{/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Edloops" />
        <meta itemProp="description" content="Curated Courses to learn tech without spending any money." />
        <meta itemProp="image" content="https://i.ibb.co/YNc7SkF/edloops.png" />

{/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://edloops.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edloops" />
        <meta property="og:description" content="Curated Courses to learn tech without spending any money." />
        <meta property="og:image" content="" />

{/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edloops" />
        <meta name="twitter:description" content="Curated Courses to learn tech without spending any money." />
        <meta name="twitter:image" content="" />

      </Head>
      <Landing />
    </>
  );
}
