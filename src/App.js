//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

export const addFieldGoal = currentScore => {
  return currentScore + 3;
};

export const addTouchdown = currentScore => {
  return currentScore + 7;
};

export const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

function App() {
  const [lionsScore, setLionsScore] = useState(0);
  const [tigersScore, setTigersScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  if (quarter > 4) {
    setQuarter(1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={() => setLionsScore(addTouchdown(lionsScore))}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            data-testid="home-touchdown"
            onClick={() => setLionsScore(addFieldGoal(lionsScore))}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="gameButtons">
          <button
            onClick={() => setQuarter(quarter + 1)}
            className="gameButtons__changeQuarter"
          >
            Change Quarter
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={() => setTigersScore(addTouchdown(tigersScore))}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={() => setTigersScore(addFieldGoal(tigersScore))}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
