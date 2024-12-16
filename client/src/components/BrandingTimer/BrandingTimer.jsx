import React, { useState, useEffect } from 'react';

const BrandingTimer = () => {
  const [timers, setTimers] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const addTimer = () => {
    if (eventName && eventDate) {
      setTimers([
        ...timers,
        { name: eventName, date: new Date(eventDate), creationTime: new Date() },
      ]);
      setEventName('');
      setEventDate('');
    }
  };

  const resetTimers = () => {
    setTimers([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.filter((timer) => {
          const timeLeft = timer.date - new Date();
          return timeLeft > 0;
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="branding-timer">
      <h1 className="upcoming-events-title">Upcoming Events</h1>
      <h2 className="main-title">Create and Manage Your Timers</h2>
      <div className="form-section">
        <label>Event Name</label>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <label>Event Date and Time</label>
        <input
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button onClick={addTimer}>Add Timer</button>
        <button onClick={resetTimers} className="reset-button">Reset</button>
      </div>
      <div className="timers-list">
        {timers.map((timer, index) => {
          const timeLeft = Math.max(0, timer.date - new Date());
          const totalTime = timer.date - timer.creationTime || 1;
          const progressPercentage = Math.min(100, (timeLeft / totalTime) * 100);

          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          return (
            <div key={index} className={`timer ${timeLeft < 60000 ? 'urgent' : ''}`}>
              <div>
                <p>{timer.name}</p>
                <p>
                  Time left: {hours}h {minutes}m {seconds}s
                </p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandingTimer;