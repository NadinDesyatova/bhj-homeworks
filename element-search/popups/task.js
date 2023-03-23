const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close');
let arrayModalClose = Array.from(modalClose);
const modalSuccess = document.getElementById('modal_success');
modalMain.className = 'modal modal_active';
arrayModalClose.forEach(element => element.onclick = function() {
  if (element.classList.contains('show-success')) {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
  } else {
      modalMain.className = 'modal';
      modalSuccess.className = 'modal';
    }
});
      
