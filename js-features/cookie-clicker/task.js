const cookie = document.getElementById('cookie');
const clickerСounter = document.getElementById('clicker__counter');
const speedClicker = document.getElementById('speed__clicker');
let startClicker = new Date();
cookie.onclick = function() {
  clickerСounter.textContent = +clickerСounter.textContent + 1;
  if (clickerСounter.textContent % 2 === 1) {
  	cookie.width = 250;
  } else if (clickerСounter.textContent % 2 === 0) {
  	cookie.width = 200;
  }
  let currentTime = new Date();
  let timeClicker = (currentTime - startClicker) / 1000;
  speedClicker.textContent = +(1 / timeClicker).toFixed(2);
  startClicker = new Date(); 
}