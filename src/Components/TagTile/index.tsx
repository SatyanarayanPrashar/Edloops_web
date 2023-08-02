import React from "react";

interface IProps {
  tagName: any;
}

const index = (props: IProps) => {
  return (
    <div className="tagContainer">
      <button className="read-more">{props.tagName}</button>
    </div>
  );
};

export default index;
