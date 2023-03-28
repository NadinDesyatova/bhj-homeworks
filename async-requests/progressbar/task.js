const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 1) {
      progress.value = 0.25;
    }

    if (xhr.readyState === 2) {
      progress.value = 0.5;
    }

    if (xhr.readyState === 3) {
      progress.value = 0.75;
    }

    if (xhr.readyState === 4) {
      progress.value = 1;
    }
  });

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

  xhr.send(formData);
});
    


