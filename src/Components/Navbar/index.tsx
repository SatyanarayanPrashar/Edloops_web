import React, { useEffect, useState } from "react";
// import NextLink from "next/link";
import { FaHome, FaBlog, FaBook, FaCommentDots } from "react-icons/fa";
import { publicRoutes } from "@/enums/route.enum";
import { useRouter } from "next/router";
import NextLink from "@/helper/NextLink";
import { ErrorHandler, ResponseHandler } from "@/helper/utils";

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const index = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [activeClass, setActiveClass] = useState(false);
  const router = useRouter();
  // const [user] = useAuthState(auth);

  // useEffect(() => {
  //   console.log(router.pathname, "pathname");

  //   if (router.pathname === publicRoutes.home) {
  //     setActiveClass(true);
  //   }
  // }, []);

  const signInWithGoogle = () => {
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
  };

  const handleSignOut = () => {
    // signOut(auth);
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
          {/* <NextLink activeClassName={"active"} href={publicRoutes.community}>
            <li className="sidebarbutton">
              <span>
                <FaCommentDots className="sidebaricon" />
                Community
              </span>
            </li>
          </NextLink> */}
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
          {/* <li className='loginButton'>
        <div>
        {user ? (
      <>
        <h1>Welcome, {user.displayName}!</h1>
        <button className="sign-out-button" onClick={handleSignOut}>
        <div className="google-logo-wrapper">
          <img
            className="google-logo_signout"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&usqp=CAU"
            alt="Google logo"
          />
        </div>
        <span className="google-sign-in-text">Sign Out</span>
        </button>
      </>
    ) : (
      <button className="google-sign-in-button" onClick={signInWithGoogle}>
        <div className="google-logo-wrapper">
          <img
            className="google-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdZstnFOO87-aJ43mJ_-R2gGYO8SV9A_GAw&usqp=CAU"
            alt="Google logo"
          />
        </div>
        <span className="google-sign-in-text">Sign in with Google</span>
      </button>
    )}
  </div>
       </li>  */}
        </ul>
        <div
          className={`overlay ${toggleSidebar ? "view" : ""}`}
          onClick={() => setToggleSidebar(!toggleSidebar)}
        ></div>
      </nav>
    </>
  );
};

export default index;
