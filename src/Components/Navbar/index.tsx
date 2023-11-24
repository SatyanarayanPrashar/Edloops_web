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
import {
  checkLoggedInUser,
  firebaseUserInfoData,
  userInfoData,
} from "@/redux/ui/ui.action";
import { RootState } from "@/redux";
import {
  ErrorHandler,
  ResponseHandler,
  firebaseConfig,
  generateRandomString,
} from "@/helper/utils";
import { blogRequestUrls, requests } from "@/helper/apiAgent";
import { get } from "lodash";
import { toast } from "react-toastify";
import { log } from "console";

const index = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uniqueStrings, setUniqueStrings] = useState("");
  const [data, setData] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user]: any = useAuthState(auth);

  const loggedInUserId = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );

  const callApi = useSelector((state: RootState) => state.uiState.callUserApi);

  useEffect(() => {
    if (!router.isReady) return;
    if (loggedInUserId || callApi) {
      fetchUserInfo();
      dispatch(firebaseUserInfoData(user));
    }
    console.log(router.pathname, "pathname");

    isLoggedInUser();
    if (router.pathname === publicRoutes.home) {
      setActiveClass(true);
    }
    generateUniqueRandomString();
  }, [user, router.isReady, loggedInUserId, callApi]);

  const isLoggedInUser = () => {
    if (user === null) {
      dispatch(checkLoggedInUser({ isLoggedIn: false }));
    } else {
      dispatch(
        checkLoggedInUser({
          isLoggedIn: true,
          loggedInUser: user?.uid,
        })
      );
    }
  };

  const isStringUnique = (str: string): boolean => {
    const regex = /^[a-zA-Z0-9]{6}$/;
    return regex.test(str) && !uniqueStrings.includes(str);
  };

  const generateUniqueRandomString = () => {
    let newString: string;
    do {
      newString = generateRandomString();
    } while (!isStringUnique(newString));

    setUniqueStrings(newString);
  };

  const userData = {
    userID: loggedInUserId,
    referral_code: uniqueStrings,
  };

  const fetchUserInfo = async () => {
    setLoading(true);
    await requests
      .post(blogRequestUrls.users.registerUser, userData)
      .then((res) => {
        const response = ResponseHandler(res);
        if (get(response, "status", false)) {
          setData(get(response, "data", []));
          dispatch(userInfoData(get(response, "data", {})));
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
        {/* <img src="/img/logo.png" alt="" /> */}
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
              <li className="edloops">
                <img src="/img/logo.png" alt="" />
              </li>
            </NextLink>
            <NextLink activeClassName={"active"} href={publicRoutes.landing}>
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
                  <button className="sign-out-button" onClick={handleSignOut}>
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
