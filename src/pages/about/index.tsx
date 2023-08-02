import AuthLayout from "@/Components/Layout/AuthLayout";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <AuthLayout>
        <h1 className="mt-4">Welcome to the About page!</h1>
        <p>This is the about page content.</p>
      </AuthLayout>
    </>
  );
};

export default index;
