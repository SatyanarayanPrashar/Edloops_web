"use client";
import React, { use, useEffect, useState } from "react";
import { FaHome, FaBlog, FaBook, FaCommentDots } from "react-icons/fa";
import { publicRoutes } from "@/enums/route.enum";
import { useRouter } from "next/router";
import NextLink from "@/helper/NextLink";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { checkLoggedInUser } from "@/redux/ui/ui.action";
import { RootState } from "@/redux";
import { ErrorHandler, ResponseHandler, firebaseConfig } from "@/helper/utils";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { get } from "lodash";
import { toast } from "react-toastify";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const index = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();
  const loggedInUserId = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );
  const isLoggedInUser = () => {
    if (user === null) {
      dispatch(checkLoggedInUser({ isLoggedIn: false }));
    } else {
      dispatch(
        checkLoggedInUser({ isLoggedIn: true, loggedInUser: user?.uid })
      );
    }
  };

  const [user]: any = useAuthState(auth);
  useEffect(() => {
    if (!router.isReady) return;
    if (loggedInUserId) {
      fetchBlogContent();
    }
    console.log(router.pathname, "pathname");

    isLoggedInUser();
    if (router.pathname === publicRoutes.home) {
      setActiveClass(true);
    }
  }, [user, router.isReady, loggedInUserId]);

  const fetchBlogContent = async () => {
    setLoading(true);
    await requests
      .get(blogRequestUrls.users.getUserInfo(loggedInUserId))
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setData(get(response, "data", []));
        }
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        const error = ErrorHandler(e);
        toast.error(get(error, "message", ""));
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      {/* header */}
      <nav className="header px-4 py-3">
        <div className="logo">Edloops</div>
        <div
          className="hamburger"
          onClick={() => setToggleSidebar(!toggleSidebar)}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
      {/* sidebar */}
      <nav className={`sidebar ${toggleSidebar ? "open" : ""}`}>
        <ul>
          <div>
            <NextLink activeClassName={"active"} href={publicRoutes.landing}>
              <li className="edloops">Edloops</li>
            </NextLink>
            <NextLink activeClassName={"active"} href={publicRoutes.home}>
              <li className="sidebarbutton">
                <span>
                  <FaHome className="sidebaricon" />
                  Home
                </span>
              </li>
            </NextLink>
            <NextLink activeClassName={"active"} href={publicRoutes.community}>
              <li className="sidebarbutton">
                <span>
                  <FaCommentDots className="sidebaricon" />
                  Community
                </span>
              </li>
            </NextLink>
            <NextLink activeClassName={"active"} href={publicRoutes.courses}>
              <li className="sidebarbutton">
                <span>
                  <FaBook className="sidebaricon" />
                  Courses
                </span>
              </li>
            </NextLink>
            <NextLink activeClassName={"active"} href={publicRoutes.blog}>
              <li className="sidebarbutton">
                <span>
                  <FaBlog className="sidebaricon" />
                  Blogs
                </span>
              </li>
            </NextLink>
          </div>
        </ul>

        <div
          className={`overlay ${toggleSidebar ? "view" : ""}`}
          onClick={() => setToggleSidebar(!toggleSidebar)}
        ></div>

        {
          <li className="loginButton">
            <div>
              {user ? (
                <>
                  <div className="Points-Container">
                    <div className="welcomemessage">{user.displayName}!</div>
                    <div>{get(data, "points", 0)} Points</div>
                    {/* <a className="">
                      {" "}
                      on clicking open a Modal with Lorem Ipsum texts and a copy
                      referral code button on the bottom Refer Friends{" "}
                      <span>
                        <i className="fa-solid fa-angle-right ms-2"></i>
                      </span>
                    </a> */}
                  </div>
                  <button className="sign-out-button" onClick={handleSignOut}>
                    {/* <div className="google-logo-wrapper border-0">
                      <img
                        className="google-logo_signout"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&usqp=CAU"
                        alt="Google logo"
                      />
                    </div> */}
                    <span className="google-sign-in-text">Sign Out</span>
                  </button>
                </>
              ) : (
                <button
                  className="google-sign-in-button"
                  onClick={signInWithGoogle}
                >
                  <div className="google-logo-wrapper border-0 me-1">
                    <img
                      className="google-logo"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&usqp=CAU"
                      alt="Google logo"
                    />
                  </div>
                  <span className="google-sign-in-text">
                    Sign in with Google
                  </span>
                </button>
              )}
            </div>
          </li>
        }
      </nav>
    </>
  );
};

export default index;
