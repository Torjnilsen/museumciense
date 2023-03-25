
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}


let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

const form = document.getElementById('contact-form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  
  if (name === '') {
    showError('Name is required');
    return;
  }
  
  if (email === '') {
    showError('Email is required');
    return;
  }

  if (!isValidEmail(email)) {
    showError('Email is invalid');
    return;
  }
  
  if (message === '') {
    showError('Message is required');
    return;
  }
  
  showSuccess('Form submitted successfully');
});

function showError(message) {
  result.innerHTML = `<div class="error">${message}</div>`;
}

function showSuccess(message) {
  result.innerHTML = `<div class="success">${message}</div>`;
}

function isValidEmail(email) {

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
