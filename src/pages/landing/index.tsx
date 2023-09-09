import AuthLayout from "@/Components/Layout/AuthLayout";
import { publicRoutes } from "@/enums/route.enum";
import Image from "next/image";
import React, { ReactNode } from "react";
import NextLink from "next/link";

const Index = () => {
  return (
    <>
      <div className="landing_container">
        <div className="d-flex align-align-items-center justify-content-center py-4 mb-5">
          <div className="me-5">Are you an investor?</div>
          <div >Join Us</div>
          
        </div>
        <div className="landing_banner pb-5 mb-5 container d-flex flex-column align-items-center justify-content-center">
          <h1 className="landing_title fw-bolder mb-3">EDLOOPS</h1>
          {/* <h1 className="fw-bold">Learn to Code</h1> */}
          <h1 className="fw-bold">
            Learn to Code <span className="text_red">20x</span> Faster
          </h1>
          <h3 className="mb-5">with Free courses powered by AI sensei</h3>
          <NextLink href={publicRoutes.home}>
            <button
              className="explore_button fw-500 px-3 py-2 d-flex align-items-center justify-content-center"
              type="button"
            >
              Explore More{" "}
              <span>
                <i className="fa-solid fa-angle-right ms-2"></i>
              </span>
            </button>
          </NextLink>
          {/* <div className="d-flex  align-items-center justify-content-center mt-3 mb-1 footer_input_box">
            <a href="https://5m8ntpxkuyy.typeform.com/to/eQBwelCx" target="_blank" rel="noopener noreferrer">
              <button className="landing_button fw-500 px-3 py-2" type="button">
              Join Us
              </button>
            </a>
          </div> */}
        </div>
        <div className="dsa_section pt-5 text-center mb-5">
          <Image
            // data-aos="fade-up-right"
            // data-aos-duration="1000"
            className="mb-4"
            src={"/img/dsa.png"}
            height={430}
            width={739}
            alt="dsa_image"
          />
          <h1 data-aos="fade-up" className="text-center fw-bolder">
            Boring courses turned into <br /> Interactive Lessons
          </h1>
        </div>
        <div className="pt-5 pb-5 courses_section container-fluid">
          <div className="my-5 row">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="col-lg-6 col-12"
            >
              <h1 className="fw-bolder">Chose from wide range of Courses</h1>
              <h5 className="fw-normal mt-3">
                tailored from the content present across the internet
              </h5>
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="1000"
              className="course_img_box d-flex justify-content-end col-lg-6 col-12"
            >
              <Image
                className="frontend_img"
                src={"/img/front1.png"}
                height={326}
                width={257}
                alt="frontend_image"
              />
              <Image
                className="data_img"
                src={"/img/data1.png"}
                height={326}
                width={257}
                alt="data_image"
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="py-5 mt-5 interact_section position-relative row">
            <div className=" col-lg-7 col-12">
              <div
                data-aos="fade-up-right"
                data-aos-duration="1000"
                className="position-relative double_img_box img_section1"
              >
                <Image
                  className="preview_img"
                  src={"/img/preview1.png"}
                  height={248}
                  width={486}
                  alt="code_img"
                />
                <Image
                  className="chat_img mb-5"
                  src={"/img/chat_tag1.png"}
                  height={482}
                  width={317}
                  alt="code_img"
                />
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-duration="1000"
                className="position-relative double_img_box img_section2"
              >
                <Image
                  className="problem_img"
                  src={"/img/problem.png"}
                  height={252}
                  width={374}
                  alt="code_img"
                />
                <Image
                  className="chat_solve_img"
                  src={"/img/chat_solve.png"}
                  height={534}
                  width={300}
                  alt="code_img"
                />
              </div>
            </div>
            <div
              // data-aos="fade-up-left"
              // data-aos-duration="1000"
              className="interact_title mb-5 col-lg-5 col-12"
            >
              <h1 className="fw-bolder ps-5 ms-3">
                Interact with lectures you watch problems you practice.
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-5 pb-5 footer_section">
          <div className="d-flex  align-items-center justify-content-center mt-3 mb-1 footer_input_box">
            <input className="landing_input py-2 px-2 me-3" type="text" />
            <button className="landing_button fw-500 px-3 py-2" type="button">
              Join Us
            </button>
          </div>
          <h5 className="text-center fw-normal">
            be the first to be informed when we move mountain
          </h5>
          <div className="text-center mt-5 pb-5">
            <h3>EDLOOPS</h3>
            <h6 className="fw-light fs-12">all rights reserved</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
