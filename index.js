import './index.css';

const cookieHTML = document.querySelector('.cookie-consent');
cookieHTML.addEventListener('click', () => {
    cookieHTML.remove();
    localStorage.setItem('cookieConsentRemoved', true);
})

window.addEventListener('load', () => {
    if (localStorage.getItem('cookieConsentRemoved')) {
      cookieHTML.style.display = 'none';
    }
  })