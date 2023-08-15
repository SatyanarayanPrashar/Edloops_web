import Head from "next/head";
import Landing from "./landing";

export default function Home() {
  return (
    <>
      <Head>
      {/* <!-- HTML Meta Tags --> */}
        <title>Edloops</title>
        <meta name="description" content="" />

{/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Edloops" />
        <meta itemProp="description" content="Learn to code 20X faster with AI powered courses" />
        <meta itemProp="image" content="" />

{/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://edloops.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Edloops" />
        <meta property="og:description" content="Learn to code 20X faster with AI powered courses" />
        <meta property="og:image" content="" />

{/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edloops" />
        <meta name="twitter:description" content="Learn to code 20X faster with AI powered courses" />
        <meta name="twitter:image" content="" />

      </Head>
      <Landing />
    </>
  );
}
