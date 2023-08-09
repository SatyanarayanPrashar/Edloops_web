import React from "react";
import { Comment } from "react-loader-spinner";

const index = () => {
  return (
    <>
      <div className="loader-container d-flex justify-content-center align-items-center">
        <Comment
          height="80"
          width="80"
          ariaLabel="comment-loading"
          color="#fff"
          backgroundColor="#40a944"
        />
      </div>
    </>
  );
};

export default index;
