import { useState, useEffect } from "react";

export default function CountdownTimer({ isRunning }) {
  const [remainingTime, setRemainingTime] = useState(5 * 60);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <p>
        Time Remaining: {minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </p>
    </div>
  );
}
