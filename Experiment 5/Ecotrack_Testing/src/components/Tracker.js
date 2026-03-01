// 23bcs12648_Priyanshu
import React, { useState } from "react";
import "./tracker.css";

function Tracker() {
  const [activities, setActivities] = useState([]);
  const [input, setInput] = useState("");

  const addActivity = () => {
    if (input.trim() === "") return;
    setActivities([...activities, input]);
    setInput("");
  };

  const deleteActivity = (index) => {
    const updated = activities.filter((_, i) => i !== index);
    setActivities(updated);
  };

  return (
    <div className="activity-logger-container">
      <header className="logger-header">
        <h2 className="logger-title">Activity Log</h2>
        <span className="logger-badge">{activities.length} Records</span>
      </header>

      <div className="logger-controls">
        <div className="input-group">
          <input
            type="text"
            className="logger-input"
            placeholder="Record a new activity..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addActivity()}
          />
          <button className="logger-submit-btn" onClick={addActivity}>
            Submit
          </button>
        </div>
      </div>

      <div className="logger-list-container">
        {activities.length === 0 ? (
          <div className="logger-empty-state">No activities recorded.</div>
        ) : (
          <ul className="logger-list">
            {activities.map((act, index) => (
              <li key={index} className="logger-list-item">
                <span className="logger-item-text">{act}</span>
                <button
                  className="logger-remove-btn"
                  onClick={() => deleteActivity(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Tracker;