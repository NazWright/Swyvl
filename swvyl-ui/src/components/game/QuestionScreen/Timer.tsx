import React, { useEffect, useRef, useState, useCallback } from "react";

interface TimerProps {
  seconds: number;
  resetTrigger: boolean;
  timeUpHandler: () => void;
}

export default function Timer({
  seconds,
  resetTrigger,
  timeUpHandler,
}: TimerProps) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const [runInterval, setRunInterval] = useState(true);
  const timerRef = useRef<any>(null); // Use NodeJS.Timeout for TypeScript

  const stopTimer = useCallback(() => {
    clearInterval(timerRef.current!);
    timerRef.current = null;
  }, []);

  const resetTimer = useCallback(() => {
    setSecondsRemaining(seconds);
    stopTimer();
  }, [seconds, stopTimer]);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining((seconds) => seconds - 1);
      }
      if (secondsRemaining === 0) {
        timeUpHandler();
      }
    }, 1000);
  }, [secondsRemaining, timeUpHandler]);

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    }; // clear interval when unmounting the component
  }, [startTimer, stopTimer]);

  useEffect(() => {
    if (resetTrigger) {
      resetTimer();
      startTimer();
    }

    return () => {
      stopTimer();
    }; // clear interval when unmounting the component
  }, [startTimer, stopTimer, resetTimer, resetTrigger]);

  return (
    <div>
      <div className="timer">{secondsRemaining}</div>
    </div>
  );
}
