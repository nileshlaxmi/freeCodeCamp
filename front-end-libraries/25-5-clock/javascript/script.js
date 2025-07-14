let breakLength = 5;
let sessionLength = 25;
let timeLeft = sessionLength * 60; // in seconds
let timerInterval = null;
let isRunning = false;
let isSession = true;

// DOM Elements
const breakLengthElem = document.getElementById('break-length');
const sessionLengthElem = document.getElementById('session-length');
const timeLeftElem = document.getElementById('time-left');
const timerLabelElem = document.getElementById('timer-label');
const beepSound = document.getElementById('beep');

// Format time in mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// Update UI
function updateDisplay() {
  timeLeftElem.textContent = formatTime(timeLeft);
  breakLengthElem.textContent = breakLength;
  sessionLengthElem.textContent = sessionLength;
  timerLabelElem.textContent = isSession ? 'Session' : 'Break';
}

// Timer logic
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      beepSound.play();

      if (isSession) {
        // Start break
        isSession = false;
        timeLeft = breakLength * 60;
      } else {
        // Start session
        isSession = true;
        timeLeft = sessionLength * 60;
      }
    }
    updateDisplay();
  }, 1000);
}

// Pause timer
function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
  timerInterval = null;
}

// Toggle start/stop
function toggleTimer() {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

// Reset timer
function resetTimer() {
  pauseTimer();
  breakLength = 5;
  sessionLength = 25;
  timeLeft = sessionLength * 60;
  isSession = true;

  beepSound.pause();
  beepSound.currentTime = 0;

  updateDisplay();
}

// Handlers for increment/decrement
function incrementBreak() {
  if (breakLength < 60) {
    breakLength++;
    if (!isRunning && !isSession) timeLeft = breakLength * 60;
    updateDisplay();
  }
}

function decrementBreak() {
  if (breakLength > 1) {
    breakLength--;
    if (!isRunning && !isSession) timeLeft = breakLength * 60;
    updateDisplay();
  }
}

function incrementSession() {
  if (sessionLength < 60) {
    sessionLength++;
    if (!isRunning && isSession) timeLeft = sessionLength * 60;
    updateDisplay();
  }
}

function decrementSession() {
  if (sessionLength > 1) {
    sessionLength--;
    if (!isRunning && isSession) timeLeft = sessionLength * 60;
    updateDisplay();
  }
}

// Initial render
updateDisplay();

// Event listeners
document.getElementById('start_stop').addEventListener('click', toggleTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('break-increment').addEventListener('click', incrementBreak);
document.getElementById('break-decrement').addEventListener('click', decrementBreak);
document.getElementById('session-increment').addEventListener('click', incrementSession);
document.getElementById('session-decrement').addEventListener('click', decrementSession);