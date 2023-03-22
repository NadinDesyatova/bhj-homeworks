const modalMain = document.getElementById('modal_main');
const modalClose = document.querySelectorAll('.modal__close');
let arrayModalClose = Array.from(modalClose);
const modalSuccess = document.getElementById('modal_success');
modalSuccess.display = 'none';
arrayModalClose.forEach(element => element.onclick = function() {
  if (element.classList.contains('show-success')) {
    modalMain.display = 'none';
    modalSuccess.display = 'flex';
  } else {
      modalMain.display = 'none';
      modalSuccess.display = 'none';
    }
});
      
