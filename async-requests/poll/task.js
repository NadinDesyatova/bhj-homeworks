const xhr1 = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const poll = document.querySelector('.poll');

xhr1.addEventListener('readystatechange', () => {
  if (xhr1.readyState === xhr1.DONE) {
    let allResponse = JSON.parse(xhr1.responseText);
    let pollId = allResponse['id'];
  	let data = allResponse['data'];
    pollTitle.textContent = data['title'];
    let arrayAnswers = data['answers'];
    for (let i = 0; i < arrayAnswers.length; i++) {
      pollAnswers.insertAdjacentHTML('beforeEnd', '<button class="poll__answer"></button>');
      document.querySelectorAll('.poll__answer')[i].textContent = arrayAnswers[i];
      let argumentForSend = 'vote=' + pollId + '&answer='+ i;
      document.querySelectorAll('.poll__answer')[i].addEventListener('click', (e) => {
        alert('Спасибо, ваш голос засчитан!');

        e.preventDefault();

        const xhr2 = new XMLHttpRequest();

        xhr2.addEventListener('readystatechange', () => {
          if (xhr2.readyState === xhr2.DONE){
            pollAnswers.remove();
            let allResponse2 = JSON.parse(xhr2.responseText);
            let statistics = allResponse2['stat'];
            let votesNumber = +statistics.reduce((accum, item) => accum + item['votes'], 0);
            for (let i = 0; i < statistics.length; i++) {
              poll.insertAdjacentHTML('beforeEnd', '<div class="poll__title"></div>');
              poll.querySelectorAll('.poll__title')[i + 1].textContent = statistics[i]['answer'];
              let votesNumberOfAnswer = ' ' + ((statistics[i]['votes'] / votesNumber) * 100).toFixed(2) + '%';
              let pollTitleCurrent = poll.querySelectorAll('.poll__title')[i + 1];
              pollTitleCurrent.insertAdjacentHTML('beforeEnd', '<b></b>')
              pollTitleCurrent.querySelector('b').textContent = votesNumberOfAnswer;
            }
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

