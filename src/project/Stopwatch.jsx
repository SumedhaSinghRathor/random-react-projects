import React, { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-red-500">
      <div className="stopwatch p-5 border-4 bg-yellow-200 rounded-lg">
        <div className="display text-8xl p-6 w-full font-mono">
          {formatTime()}
        </div>
        <div className="controls flex justify-between">
          <button
            className="font-bold text-lg bg-orange-300 py-2 px-4 rounded-lg"
            onClick={() => start()}
          >
            Start
          </button>
          <button
            className="font-bold text-lg bg-orange-300 py-2 px-4 rounded-lg"
            onClick={() => stop()}
          >
            Stop
          </button>
          <button
            className="font-bold text-lg bg-orange-300 py-2 px-4 rounded-lg"
            onClick={() => reset()}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stopwatch;
