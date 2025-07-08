import React, { useEffect, useState } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    let storedEndTime = localStorage.getItem('countdownEndTime');

    if (!storedEndTime) {
      const newEndTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem('countdownEndTime', newEndTime);
      storedEndTime = newEndTime;
    } else {
      storedEndTime = parseInt(storedEndTime, 10);
    }

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = storedEndTime - now;

      if (distance <= 0) {
        localStorage.removeItem('countdownEndTime');
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
      const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  // Inline styles
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      fontFamily: 'Segoe UI, sans-serif',
    },
    countdown: {
      display: 'flex',
      gap: '20px',
      fontSize: '2.5rem',
      alignItems: 'center',
    },
    time: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    label: {
      fontSize: '0.75rem',
      color: '#aaa',
      marginTop: '5px',
      letterSpacing: '1px',
    },
    divider: {
      fontSize: '2.5rem',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.countdown}>
        <div style={styles.time}>
          <span>{timeLeft.days}</span>
          <div style={styles.label}>DAYS</div>
        </div>
        <div style={styles.divider}>:</div>
        <div style={styles.time}>
          <span>{timeLeft.hours}</span>
          <div style={styles.label}>HOURS</div>
        </div>
        <div style={styles.divider}>:</div>
        <div style={styles.time}>
          <span>{timeLeft.minutes}</span>
          <div style={styles.label}>MINUTES</div>
        </div>
        <div style={styles.divider}>:</div>
        <div style={styles.time}>
          <span>{timeLeft.seconds}</span>
          <div style={styles.label}>SECONDS</div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
