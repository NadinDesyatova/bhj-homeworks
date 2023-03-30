const textEditorField = document.getElementById('editor');

const storedText = localStorage.getItem('textValue');

textEditorField.addEventListener('input', () => {
  localStorage.textValue = textEditorField.value;
});

textEditorField.value = storedText;
