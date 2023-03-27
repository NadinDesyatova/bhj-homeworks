const xhr1 = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr1.addEventListener('readystatechange', () => {
  if (xhr1.readyState === xhr1.DONE) {
    let allResponse = JSON.parse(xhr1.responseText);
    let pollId = allResponse['id'];
  	let data = allResponse['data'];
    pollTitle.textContent = data['title'];
    let arrayAnswers = data['answers'];
    for (i = 0; i < arrayAnswers.length; i++) {
      pollAnswers.insertAdjacentHTML('beforeEnd', '<button class="poll__answer"></button>');
      document.querySelectorAll('.poll__answer')[i].textContent = arrayAnswers[i];
      let argumentForSend = 'vote=' + pollId + '&answer='+ i;
      document.querySelectorAll('.poll__answer')[i].addEventListener('click', (e) => {
        alert('Спасибо, ваш голос засчитан!');

        e.preventDefault();

        const xhr2 = new XMLHttpRequest();

        xhr2.addEventListener('readystatechange', () => {
          if (xhr2.readyState === xhr2.DONE){

          }
        });

        xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll', true);

        xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr2.send(argumentForSend);
      });
    }
  }
});

xhr1.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll', true);

xhr1.send();

