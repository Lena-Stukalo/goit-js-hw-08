const throttle = require('lodash.throttle');

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
let formData = {};
const formInut = document.querySelector('input');
const formTextarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormLocalDataSet, 500));
form.addEventListener('submit', onSubmitForm);
onFormLocalDataGet();

function onFormLocalDataSet(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormLocalDataGet() {
  const localData = localStorage.getItem(STORAGE_KEY);
  if (localData) {
    const dataToForm = JSON.parse(localData);
    formInut.value = dataToForm.email !== undefined ? dataToForm.email : '';
    formData.email = formInut.value;
    formTextarea.value =
      dataToForm.message !== undefined ? dataToForm.message : '';
    formData.message = formTextarea.value;
  }
}
function onSubmitForm(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  formData = {};
}
