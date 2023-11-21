import React, { useState, useEffect } from "react";

const index = () => {
  // State to manage the streak count
  const [streakCount, setStreakCount] = useState(0);

  useEffect(() => {
    // Get the stored streak data from local storage
    const storedStreakDataString = localStorage.getItem("streakData");
    const storedStreakData = storedStreakDataString
      ? JSON.parse(storedStreakDataString)
      : {};

    // Check if the streak is from today
    const today = new Date().toLocaleDateString();
    if (storedStreakData.date === today) {
      // Streak is from today, set the streak count
      setStreakCount(storedStreakData.count);
    } else {
      // Streak is from a previous day or doesn't exist, reset streak count
      setStreakCount(0);
    }
  }, []);

  const handleLogin = () => {
    // Get the stored streak data from local storage
    const storedStreakDataString = localStorage.getItem("streakData");
    const storedStreakData = storedStreakDataString
      ? JSON.parse(storedStreakDataString)
      : {};

    // Check if the last login date is yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (
      new Date(storedStreakData.date).toLocaleDateString() ===
      yesterday.toLocaleDateString()
    ) {
      // User logged in consecutively, increase the streak count
      const newStreakCount = storedStreakData.count + 1;
      setStreakCount(newStreakCount);

      // Store the updated streak data in local storage
      localStorage.setItem(
        "streakData",
        JSON.stringify({
          date: new Date().toLocaleDateString(),
          count: newStreakCount,
        })
      );
    } else {
      // User missed a day, reset the streak count to 1
      setStreakCount(1);

      // Store the new streak data in local storage
      localStorage.setItem(
        "streakData",
        JSON.stringify({ date: new Date().toLocaleDateString(), count: 1 })
      );
    }
  };

  return (
    <div>
      <p>Streak Count: {streakCount}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default index;
