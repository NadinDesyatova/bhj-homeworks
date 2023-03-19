const timer = document.getElementById('timer');
function start() {
	let setIntervalId = setInterval(() => {
    timer.textContent -= 1;
    if (timer.textContent === '0') {
      alert('Вы победили в конкурсе!');
      clearInterval(setIntervalId);
    }
  }, 1000);
}

function startNew() {
  let hour = '00';
  let minute = '00';
  let second = '31';
  let setIntervalId = setInterval(() => {
    second -= 1;
    second = (second < 10) ? '0' + second : second;
    let currentTime = [hour, minute, second].join(':');
    timer.textContent = currentTime;
    if (timer.textContent === '00:00:00') {
      alert('Вы победили в конкурсе!');
      clearInterval(setIntervalId);
    }
  }, 1000);
}

startNew();
