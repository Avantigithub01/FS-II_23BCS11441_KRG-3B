import { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CounterDisplay from "../components/CounterDisplay";

const COUNT_KEY = "water_count";
const GOAL_KEY = "water_goal";

function WaterTrackerPage() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [goalInput, setGoalInput] = useState("8");
  const [tip, setTip] = useState("");
  const [tipLoading, setTipLoading] = useState(true);
  const [tipError, setTipError] = useState("");
  const [unrelatedClicks, setUnrelatedClicks] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem(COUNT_KEY);
    const savedGoal = localStorage.getItem(GOAL_KEY);

    if (savedCount !== null) {
      const parsedCount = Number(savedCount);
      if (!Number.isNaN(parsedCount) && parsedCount >= 0) {
        setCount(parsedCount);
      }
    }

    if (savedGoal !== null) {
      const parsedGoal = Number(savedGoal);
      if (!Number.isNaN(parsedGoal) && parsedGoal > 0) {
        setGoal(parsedGoal);
        setGoalInput(String(parsedGoal));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(COUNT_KEY, String(count));
  }, [count]);

  useEffect(() => {
    localStorage.setItem(GOAL_KEY, String(goal));
  }, [goal]);

  useEffect(() => {
    let active = true;

    async function fetchTip() {
      setTipLoading(true);
      setTipError("");

      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        if (!response.ok) {
          throw new Error("Could not load health tip.");
        }
        const data = await response.json();
        if (active) {
          setTip(data?.slip?.advice || "Stay hydrated throughout the day.");
        }
      } catch (error) {
        if (active) {
          setTipError(error.message || "Something went wrong while loading tip.");
        }
      } finally {
        if (active) {
          setTipLoading(false);
        }
      }
    }

    fetchTip();

    return () => {
      active = false;
    };
  }, []);

  const increaseCount = useCallback(() => {
    setCount((previous) => previous + 1);
  }, []);

  const decreaseCount = useCallback(() => {
    setCount((previous) => (previous > 0 ? previous - 1 : 0));
  }, []);

  const resetCount = useCallback(() => {
    setCount(0);
  }, []);

  const saveGoal = useCallback(() => {
    const parsedGoal = Number(goalInput);
    if (!Number.isNaN(parsedGoal) && parsedGoal > 0) {
      setGoal(parsedGoal);
    }
  }, [goalInput]);

  return (
    <main className="page">
      <Navbar />
      <section className="card tracker-card">
        <h1>Daily Water Tracker</h1>

        <CounterDisplay count={count} goal={goal} />

        <div className="button-row">
          <button type="button" onClick={increaseCount}>
            + Add Water
          </button>
          <button type="button" onClick={decreaseCount}>
            - Remove Water
          </button>
          <button type="button" onClick={resetCount}>
            Reset
          </button>
        </div>

        <div className="goal-row">
          <label htmlFor="goal-input">Daily Goal:</label>
          <input
            id="goal-input"
            type="number"
            min="1"
            value={goalInput}
            onChange={(event) => setGoalInput(event.target.value)}
          />
          <button type="button" onClick={saveGoal}>
            Save Goal
          </button>
        </div>

        <div className="tip-box">
          {tipLoading && <p>Loading health tip...</p>}
          {!tipLoading && tipError && <p className="error-text">{tipError}</p>}
          {!tipLoading && !tipError && <p>Today&apos;s Health Tip: {tip}</p>}
        </div>

        <div className="unrelated-box">
          <button type="button" onClick={() => setUnrelatedClicks((value) => value + 1)}>
            Unrelated Button
          </button>
          <p>Unrelated clicks: {unrelatedClicks}</p>
        </div>
      </section>
    </main>
  );
}

export default WaterTrackerPage;
