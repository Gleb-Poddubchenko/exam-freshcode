import React, { useState, useEffect } from 'react';
import FormInput from './FormInput';

const BrandingTimer = () => {
  const [timers, setTimers] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  const addTimer = () => {
    if (eventName && eventDate) {
      setTimers([...timers, { name: eventName, date: new Date(eventDate) }]);
      setEventName('');
      setEventDate('');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) => prevTimers.filter(timer => {
        const timeLeft = timer.date - new Date();
        return timeLeft > 0;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="branding-timer">
      <h2>Create and Manage Your Timers</h2>
      <div className="form-section">
        <FormInput 
          label="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <FormInput 
          label="Event Date and Time"
          type="datetime-local"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button onClick={addTimer}>Add Timer</button>
      </div>
      <div className="timers-list">
        {timers.map((timer, index) => {
          const timeLeft = Math.max(0, timer.date - new Date());
          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
          return (
            <div key={index} className={`timer ${timeLeft < 60000 ? 'urgent' : ''}`}>
              <p>{timer.name}</p>
              <p>Time left: {hours}h {minutes}m {seconds}s</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandingTimer;