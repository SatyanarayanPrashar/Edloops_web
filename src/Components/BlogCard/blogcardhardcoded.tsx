import { publicRoutes } from "@/enums/route.enum";
import React from "react";
import NextLink from "next/link";

interface IProps {
  imageSrc: any;
  title: any;
  text: any;
  readTime: any;
  slug?: any;
}

const index = (props: IProps) => {
  const { imageSrc, title, text, readTime, slug } = props;
  return (
    <NextLink href={publicRoutes.flutterroadmap}>
      <div className="blog-preview-card">
        <img src={imageSrc} alt={title} />
        <div className="blog-preview-card-content mt-3 mt-md-0">
            <div>
                <h3 className="blog-preview-card-title">{title}</h3>
                <p
                    className="blog-preview-card-text mt-2"
                    dangerouslySetInnerHTML={{ __html: text }}
                />
            </div>
            <p className="blog-preview-card-read-time">{readTime}</p>
        </div>
      </div>
    </NextLink>
  );
};

export default index;
