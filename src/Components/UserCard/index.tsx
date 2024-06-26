import { publicRoutes } from "@/enums/route.enum";
import React, { useEffect, useState } from "react";
import NextLink from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateReferralModal } from "@/redux/ui/ui.action";
import { RootState } from "@/redux";
import { get } from "lodash";
import { useRouter } from "next/router";
import LoginModal from "../LoginModal";
import { streakCounter } from "streak-counter";
import ReferralModal from "../ReferralModal";

interface UserCardProps {
  name: string;
  coins: string;
  referral: string;
  enrolledcourses: string[]; // Change the type to string array
}

const courseNameMapping: Record<string, string> = {
  "1": "Data Science",
  "2": "System Design",
  "3": "Web3 development",
  "4": "Flutter",
};

const UserCard: React.FC<UserCardProps> = ({
  name,
  coins,
  referral,
  enrolledcourses,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [setShowButton, setSetShowButton] = useState(false);
  const [handleModal, setHandleModal] = useState(false);
  const [handleReferralModal, setHandleReferralModal] = useState(false);
  const [handleStreak, setHandleStreak] = useState(0);
  const [copiedCode, setCopiedCode] = useState("");
  const showModal = () => {
    dispatch(updateReferralModal({ show: true }));
  };
  const loggedInUserId = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );
  const surveyInfo = useSelector((state: RootState) => state.uiState.userInfo);
  const today = new Date();
  useEffect(() => {
    if (loggedInUserId) {
      let { currentCount } = streakCounter(localStorage, today);
      setHandleStreak(currentCount);
    } else {
      localStorage.setItem("streak", JSON.stringify("currentCount"));
    }
  }, [loggedInUserId]);
  useEffect(() => {
    setSetShowButton(get(surveyInfo, "referral_used", false));
  }, [router.isReady, surveyInfo]);

  return (
    <>
      <div>
        <div className="userCard">
          {loggedInUserId ? (
            <>
              <div className="user-name">
                <div className="svg-feature">
                  <img src="/svg/fire.svg" /> {handleStreak} day
                  {handleStreak > 1 ? "s" : ""} Streak
                </div>
                <div className="svg-feature">
                  <img src="/svg/user.svg" /> {name}
                </div>
                <div className="svg-feature">
                  <img src="/svg/coin.svg" /> {coins} Edcoins
                </div>
                <a
                  className="cursor-pointer text-decoration-none"
                  onClick={() => setHandleReferralModal(true)}
                >
                  <div className="svg-feature">
                    <img src="/svg/referral.svg" /> Refer Friends
                  </div>
                </a>
                {/* <div className="svg-feature"><img src="/svg/referral.svg" /> <h6>{referral}</h6> Referral code</div> */}
                <div className="svg-feature">
                  <img src="/svg/course.svg" /> Enrolled Courses:
                </div>
              </div>
              <div className="coursename">
                <ul>
                  {enrolledcourses.map((courseId, index) => (
                    <>
                      <NextLink
                        href={publicRoutes.curriculum + `/${courseId} `}
                      >
                        <li key={index}>{courseNameMapping[courseId]}</li>
                      </NextLink>
                    </>
                  ))}
                </ul>
              </div>
              {!setShowButton && (
                <div className="reffer-bttn">
                  <div
                    className="svg-feature cursor-pointer"
                    onClick={showModal}
                  >
                    <img src="/svg/celebrate.svg" />
                    Use Referral Code
                  </div>
                </div>
              )}
            </>
          ) : (
            <div>
              <div className="unauth-img">
                <img src="/img/waving.png" alt="Discord Logo" />
              </div>
              <div
                className="reffer-bttn mt-0"
                onClick={() => setHandleModal(true)}
              >
                <div className="svg-feature cursor-pointer d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-google me-2"></i>
                  <p className="m-0 lh-1">Signup / Login</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {handleReferralModal && (
        <ReferralModal
          setHandleReferralModal={setHandleReferralModal}
          handleReferralModal={handleReferralModal}
        />
      )}
      {handleModal && (
        <LoginModal setHandleModal={setHandleModal} handleModal={handleModal} />
      )}
    </>
  );
};

export default UserCard;
