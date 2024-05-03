import { useState, useEffect } from "react";

export default function CountdownTimer({ isRunning, isFinished }) {
  // const [remainingTime, setRemainingTime] = useState(5 * 60);
  const [remainingTime, setRemainingTime] = useState(5);

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

  useEffect(() => {
    if (remainingTime === 0) {
      isFinished(); // Trigger the finish callback when time reaches zero
    }
  }, [remainingTime, isFinished]);

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
