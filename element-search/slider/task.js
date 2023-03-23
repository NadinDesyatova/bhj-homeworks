let deactivateSlider = slider => slider.className = 'slider__item';
let activateSlider = slider => slider.className = 'slider__item slider__item_active';
let deactivateDot = dot => dot.className = 'slider__dot';
let activateDot = dot => dot.className = 'slider__dot slider__dot_active';

const arraySliders = Array.from(document.querySelectorAll('.slider__item'));
const arrayDots = Array.from(document.querySelectorAll('.slider__dot'));
const arrayArrows = Array.from(document.querySelectorAll('.slider__arrow'));
let numberSlider = 0;
let deactivateSlidersAndDots = function (nextNumberSlider) {
  deactivateSlider(arraySliders[numberSlider]);
  deactivateDot(arrayDots[numberSlider]);
  numberSlider = nextNumberSlider;
  return numberSlider;
}

arrayArrows.forEach(arrow => arrow.onclick = () => {
  if (arrow.classList.contains('slider__arrow_next')) {
    deactivateSlidersAndDots(numberSlider + 1);
    if (arraySliders[numberSlider]) {
      activateDot(arrayDots[numberSlider]);
      activateSlider(arraySliders[numberSlider]);
    } else {
        activateDot(arrayDots[0]);
        activateSlider(arraySliders[0]);
        numberSlider = 0;
      }
  } else if (arrow.classList.contains('slider__arrow_prev')) {
      deactivateSlidersAndDots(numberSlider - 1);
      if (arraySliders[numberSlider]) {
        activateDot(arrayDots[numberSlider]);
        activateSlider(arraySliders[numberSlider]);
      } else {
          activateDot(arrayDots[arraySliders.length - 1]);
          activateSlider(arraySliders[arraySliders.length - 1]);
          numberSlider = arraySliders.length - 1;
        }      
    }
});

arrayDots.forEach((dot, index) => {
  dot.onclick = () => {
    deactivateDot(arrayDots[numberSlider]);
    activateDot(dot);
    deactivateSlider(arraySliders[numberSlider]);
    activateSlider(arraySliders[index]);
    numberSlider = index;
  }
});  
  