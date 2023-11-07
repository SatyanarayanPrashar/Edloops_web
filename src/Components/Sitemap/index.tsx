import { publicRoutes } from "@/enums/route.enum";
import NextLink from "@/helper/NextLink";
import React from "react";

const index = () => {
  return (
    <>
      <footer className="section bg-footer ps-md-5 ps-3 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="">
                {/* <h6 className="footer-heading text-uppercase text-dark">
                  Edloops
                </h6> */}
                <ul className="list-unstyled footer-link mt-4">
                  <NextLink activeClassName={"active"} href={publicRoutes.home}>
                    <li>Home</li>
                  </NextLink>
                  <NextLink
                    activeClassName={"active"}
                    href={publicRoutes.community}
                  >
                    <li>Community</li>
                  </NextLink>
                  <NextLink
                    activeClassName={"active"}
                    href={publicRoutes.courses}
                  >
                    <li>Courses</li>
                  </NextLink>
                  <NextLink activeClassName={"active"} href={publicRoutes.blog}>
                    <li>Blog</li>
                  </NextLink>
                  {/* <NextLink
                    activeClassName={"active"}
                    href={publicRoutes.about}
                  >
                    <li>About</li>
                  </NextLink> */}
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="">
                <h6 className="footer-heading text-uppercase text-dark">
                  Courses
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#">Data Structures and Algorithms </a>
                  </li>
                  <li>
                    <a href="">Web Development</a>
                  </li>
                  <li>
                    <a href="">Application Development</a>
                  </li>
                  <li>
                    <a href="">Machine Learning</a>
                  </li>
                  <li>
                    <a href="">Artificial Intelligence</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="">
                <h6 className="footer-heading text-uppercase text-dark">
                  Community
                </h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li>
                    <a href="#">Connect</a>{" "}
                  </li>
                  <li>
                    <a href="#">Ask</a>
                  </li>
                  <li>
                    <a href="#">Fourm</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-6">
              <div className="">
                <h6 className="footer-heading text-uppercase text-dark">
                  Contact Us
                </h6>
                <p className="contact-info mt-4">
                  Contact us if need help withanything
                </p>
                <p className="contact-info">satya@edloops.com</p>
                <p className="contact-info">Terms and Conditions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
          <p className="footer-alt mb-0 f-14">
            2023 © Edloops, All Rights Reserved
          </p>
        </div>
      </footer>
      {/* <footer className="siteMap">
        <ul className="edloops-list">
          <h3 className="edloops-categoryOne">Edloops</h3>
          <li className="categoryOne">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="categoryOne">
            <NavLink exact to="/blog">
              Blog
            </NavLink>
          </li>
          <li className="categoryOne">
            <NavLink exact to="/courses">
              Courses
            </NavLink>
          </li>
          <li className="categoryOne">
            <NavLink exact to="/about">
              About
            </NavLink>
          </li>
        </ul>
        <div></div>
        <ul className="edloops-list-noBorder">
          <h3 className="red">Courses</h3>
          <li>Data Structures and Algorithms</li>
          <li>Web Development</li>
          <li>Application Development</li>
          <li>Machine Learning</li>
          <li>Articial Intelegence</li>
        </ul>
        <ul className="edloops-list-noBorder">
          <h3 className="orange">Community</h3>
          <li>Connect</li>
          <li>Ask</li>
          <li>Fourm</li>
          <li>FAQ</li>
        </ul>
        <ul className="edloops-list-noBorder">
          <h3 className="orange">About</h3>
          <li>Contact us</li>
          <li>Terms and Conditions</li>
        </ul>
      </footer> */}
    </>
  );
};

export default index;
