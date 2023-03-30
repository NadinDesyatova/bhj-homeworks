const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinButton = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const storedId = localStorage.getItem('storedUserId');
if (storedId) {
  signin.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userId.textContent = storedId;
}

signinButton.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(signinForm);

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    let response = xhr.response;
    if (response['success'] === false) {
      alert('Неверный логин/пароль');
      signinForm.reset();
    } else {
      signin.classList.remove('signin_active');
      welcome.classList.add('welcome_active');
      let storedUserId = response['user_id'];
      userId.textContent = storedUserId;
      localStorage.storedUserId = storedUserId;  
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth', true);

  xhr.responseType = 'json';

  xhr.send(formData);
});