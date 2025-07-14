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

// Control buttons
const breakDecrementBtn = document.getElementById('break-decrement');
const breakIncrementBtn = document.getElementById('break-increment');
const sessionDecrementBtn = document.getElementById('session-decrement');
const sessionIncrementBtn = document.getElementById('session-increment');

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
  updateDisabledButtons();
}

// Enable/Disable buttons visually and functionally
function updateDisabledButtons() {
  // Break
  breakDecrementBtn.classList.toggle('disabled-btn', breakLength <= 1);
  breakIncrementBtn.classList.toggle('disabled-btn', breakLength >= 60);

  // Session
  sessionDecrementBtn.classList.toggle('disabled-btn', sessionLength <= 1);
  sessionIncrementBtn.classList.toggle('disabled-btn', sessionLength >= 60);
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
      isSession = !isSession;
      timeLeft = (isSession ? sessionLength : breakLength) * 60;
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
breakIncrementBtn.addEventListener('click', incrementBreak);
breakDecrementBtn.addEventListener('click', decrementBreak);
sessionIncrementBtn.addEventListener('click', incrementSession);
sessionDecrementBtn.addEventListener('click', decrementSession);