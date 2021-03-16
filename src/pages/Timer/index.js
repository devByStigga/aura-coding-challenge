// Globals
import "./styles.scss";
import React, { useEffect, useRef, useState } from "react";

// Components
import { Button } from "components/Button";

import { call } from "file-loader";
//import counter from "./counter";

// Sub-component
function Expired() {
  return (
    <div className="aura-expired">
      <div className="aura-expired-emoji">⚠️</div>
      <div className="aura-expired-text">Timer expired!</div>
    </div>
  );
}

// Component
function Timer() {
  // Hooks - state
  const [num, setNum] = useState("0:00");
  const [pause, setPause] = useState(true);

  let intervalRef = useRef();

  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    if (!pause) {
      intervalRef.current = setInterval(decreaseNum, 1000);

      return () => clearInterval(intervalRef.current);
    }
  }, [pause]);

  useEffect(() => {
    if (num == 0) {
      clearInterval(intervalRef.current);
      setPause(true);
      setNum("0:00");
    }
  }, [num]);

  const handleStart = () => {
    setNum(60);
    setPause((prev) => !prev);
    if (!pause) {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }
  };

  const handleReset = () => {
    setNum("1:00");
    clearInterval(intervalRef.current);
    if (pause !== true) setPause(true);
  };

  // Render
  return (
    <div className="aura-page aura-timer">
      <h1>Timer</h1>

      <div className="aura-page-content">
        <div className="aura-timer-clock">
          {num == 60
            ? "0:00"
            : num < 10
            ? "0:0" + num
            : num > 0
            ? "0:" + num
            : num}
        </div>
        {num <= "0:00" ? <Expired /> : null}

        <div className="aura-timer-buttons">
          <Button onClick={handleStart}>Start</Button>
          <Button onClick={handleReset}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

export { Timer };
