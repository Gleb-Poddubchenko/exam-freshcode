import React, { useState, useEffect } from 'react';

const BrandingTimer = () => {
  const [timers, setTimers] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [notificationDate, setNotificationDate] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');

  // Функция добавления таймера
  const addTimer = () => {
    if (!eventName || !eventDate || !notificationDate) {
      setNotificationMessage('Please fill in all fields!');
      return;
    }

    const newTimer = {
      name: eventName,
      date: new Date(eventDate),
      notificationDate: new Date(notificationDate),
      creationTime: new Date(), // Время создания таймера
      notified: false,
    };

    setTimers((prevTimers) => [...prevTimers, newTimer]);
    setEventName('');
    setEventDate('');
    setNotificationDate('');
    setNotificationMessage('Timer successfully added!');
  };

  // Логика уведомления
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (!timer.notified && new Date() >= timer.notificationDate) {
            setNotificationMessage(`Reminder: Event "${timer.name}" is coming up!`);
            return { ...timer, notified: true };
          }
          return timer;
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [timers]);

  // Сброс всех таймеров
  const resetTimers = () => {
    setTimers([]);
    setNotificationMessage('');
  };

  return (
    <div className="branding-timer">
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
        <label>Notify Me At</label>
        <input
          type="datetime-local"
          value={notificationDate}
          onChange={(e) => setNotificationDate(e.target.value)}
        />
        <button onClick={addTimer} className="add-button">Add Timer</button>
        <button onClick={resetTimers} className="reset-button">Reset</button>
      </div>
      {notificationMessage && <div className="notification">{notificationMessage}</div>}
      <div className="timers-list">
        {timers.map((timer, index) => {
          const totalTime = timer.date - timer.creationTime; // Общее время с момента создания до даты события
          const timeLeft = Math.max(0, timer.date - new Date()); // Оставшееся время
          const progressPercentage = Math.min(100, (timeLeft / totalTime) * 100);

          const hours = Math.floor(timeLeft / (1000 * 60 * 60));
          const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

          return (
            <div key={index} className="timer">
              <p>{timer.name}</p>
              <p>
                Time left: {hours}h {minutes}m {seconds}s
              </p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: 
                  `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandingTimer;