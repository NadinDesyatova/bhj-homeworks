const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

subscribeModal.classList.add('modal_active');

modalClose.onclick = function() {
  subscribeModal.classList.remove('modal_active');
  document.cookie = 'popup=' + encodeURIComponent('closed');
}

function checkingClosedPopup() {
  const value = "; " + document.cookie;
  const parts = value.split('; popup=');
  if (parts.length === 2) {
    subscribeModal.classList.remove('modal_active');
  }
}

checkingClosedPopup();
