import { publicRoutes } from "@/enums/route.enum";
import React from "react";
import NextLink from "next/link";

interface IProps {
  imageSrc: any;
  title: any;
  text: any;
  length: any;
  By: any;
  id?: any;
}

const index = (props: IProps) => {
  const { imageSrc, title, text, length, By, id } = props;
  return (
    <NextLink href={publicRoutes.curriculum + `/${id}`}>
      <div className="curriculum-preview-card mb-3 me-3">
        <img src={imageSrc} alt={title} />
        <div className="curriculum-preview-card-content px-2 w-100 mt-2">
          <h3 className="curriculum-preview-card-title">{title}</h3>
          <p className="curriculum-preview-card-text">{text}</p>
          <p className="curriculum-preview-card-text">{length}</p>
          <p className="curriculum-preview-card-By">{By}</p>
        </div>
      </div>
    </NextLink>
  );
};

export default index;
