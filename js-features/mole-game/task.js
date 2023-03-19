(() => {
  let playing = true;
  let activeHole = 1;
  const deadMole = document.getElementById('dead');
  const lost = document.getElementById('lost');
  let getHole = index => document.getElementById(`hole${index}`);
  let deactivateHole = index => getHole( index ).className = 'hole';
  let activateHole = index => getHole( index ).className = 'hole hole_has-mole';
  let timeoutId = null;
  let counterPoints = function() {
    for (let index = 1; index <= 9; index++) {
      let hole = getHole(index);
      hole.onclick = function() {
      if (hole.classList.contains( 'hole_has-mole' )) {
        deadMole.textContent = +deadMole.textContent + 1;;
      } else {
          lost.textContent = +lost.textContent + 1;
        }
      }
      
      if (deadMole.textContent === '10') {
        alert('Победа!');
        deadMole.textContent = '0';
        lost.textContent = '0';
      } else if (lost.textContent === '5') {
          alert('Вы проиграли!');
          deadMole.textContent = '0';
          lost.textContent = '0';
        }
    }
  }

  if (timeoutId === null) {
      timeoutId = 0;
      counterPoints();
    }   
  
  let next = () => setTimeout(() => {
    counterPoints();
    if ( !playing ) {
      return;
    }
    deactivateHole( activeHole );
    activeHole = Math.floor( 1 + Math.random() * 9 );
    activateHole( activeHole );
    next();
  }, 800 );

  next();
})();