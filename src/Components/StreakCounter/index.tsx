import { RootState } from "@/redux";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { streakCounter } from "streak-counter";

const index = () => {
  const [handleStreak, setHandleStreak] = useState(0);
  console.log(handleStreak, "handle streak");

  const loggedInUserId = useSelector(
    (state: RootState) => state.uiState.loggedInUserId
  );
  const today = new Date();
  useEffect(() => {
    if (loggedInUserId) {
      let { currentCount } = streakCounter(localStorage, today);
      setHandleStreak(currentCount);
    } else {
      localStorage.setItem("streak", JSON.stringify("currentCount"));
    }
  }, [loggedInUserId]);

  return (
    <>
      <h1 style={{ marginBottom: "1rem" }}>Current streak</h1>
      <div>
        <p style={{ fontSize: "4rem", marginTop: "2rem", marginBottom: "0" }}>
          <span aria-label="fire emoji" role="img">
            🔥
          </span>
        </p>
      </div>
      <p style={{ fontSize: "2rem" }}>
        {handleStreak} day
        {handleStreak > 1 ? "s" : ""}
      </p>
    </>
  );
};

export default index;
