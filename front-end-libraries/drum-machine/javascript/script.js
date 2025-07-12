const getClipName = (key) => {
  switch (key) {
    case 'Heater 1': return 'Q';
    case 'Heater 2': return 'W';
    case 'Heater 3': return 'E';
    case 'Heater 4': return 'A';
    case 'Clap': return 'S';
    case 'Open-HH': return 'D';
    case 'Kick_n_Hat': return 'Z';
    case 'Kick': return 'X';
    case 'Closed-HH': return 'C';
    default: return '';
  }
};

function triggerSound(key) {
  const audio = document.getElementById(key);
  if (!audio) return;
  
  const pad = audio.parentElement; 

  // Animate
  pad.classList.add('active');
  setTimeout(() => pad.classList.remove('active'), 150); 

  // Play Sound
  audio.currentTime = 0;
  audio.play();

  document.getElementById('display').innerText = getClipName(pad.id); 
}

// Click handler
document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', () => {
    const audio = pad.querySelector('audio');
    if (audio) {
      triggerSound(audio.id);
    }
  });
});

// Key press handler
document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  triggerSound(key);
});