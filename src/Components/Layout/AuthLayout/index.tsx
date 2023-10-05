import Navbar from "@/Components/Navbar";
import Sitemap from "@/Components/Sitemap";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const index = (props: IProps) => {
  return (
    <>
      <div className="App">
        {/* sidebar */}
        <Navbar />
        <div className="content">
          <div className="page-content ps-lg-5 ps-3 pe-lg-5 pe-3">
            {props.children}
            {/* footer */}
            <Sitemap />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
