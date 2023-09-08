const btn = document.querySelector('#language_btn');
const btnText = document.querySelector('.language_btn_text');
const btnMobile = document.querySelector('#language_btn_mobile');

btn.addEventListener('click', changeLanguage);
btnMobile.addEventListener('click', changeLanguage);

function changeLanguage() {
  if (btnText.textContent === 'RU') {
    btnText.textContent = 'EN';
  } else {
    btnText.textContent = 'RU';
  }
}
