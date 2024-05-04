import { useState, useEffect } from "react";

export default function CountdownTimer({ isRunning, isFinished }) {
  const [gameTime, setGameTime] = useState(0);
  const quizDurationInSeconds = 1000;
  const [endTime, setEndTime] = useState(
    Date.now() + quizDurationInSeconds * 1000
  );
  const [remainingTime, setRemainingTime] = useState(quizDurationInSeconds);

  useEffect(() => {
    let timer;

    const updateRemainingTime = () => {
      const now = Date.now();
      const timeDifference = endTime - now;

      if (timeDifference <= 0) {
        clearInterval(timer);
        isFinished();
      } else {
        setRemainingTime(Math.ceil(timeDifference / 1000));
      }
    };

    if (isRunning) {
      timer = setInterval(updateRemainingTime, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [endTime, isRunning, isFinished]);

  useEffect(() => {
    setGameTime(remainingTime);
  }, [remainingTime, setGameTime]);

  return (
    <div className="flex-centered">
      <p className="time">
        Time Remaining: {Math.floor(remainingTime / 60)}:
        {remainingTime % 60 < 10 ? "0" : ""}
        {remainingTime % 60}
      </p>
    </div>
  );
}
