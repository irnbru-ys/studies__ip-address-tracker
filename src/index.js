const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
  fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_rjFOXHiluNgBpHANSFljflUjpO0y9&ipAddress=${ipInput.value}`,
  )
    .then((responce) => responce.json())
    .then(console.log);
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}
