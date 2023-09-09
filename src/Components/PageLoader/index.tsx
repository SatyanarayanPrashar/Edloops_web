import React from "react";
import { ThreeDots } from "react-loader-spinner";

const index = () => {
  return (
    <>
      <div className="loader-container d-flex justify-content-center align-items-center">
        < ThreeDots
          height="80"
          width="80"
          ariaLabel="threedots"
          color="#fff"
          // backgroundColor="#40a944"
        />
      </div>
    </>
  );
};

export default index;
