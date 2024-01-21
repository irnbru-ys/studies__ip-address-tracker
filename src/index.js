import { validateIp } from './helpers';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(
		  `https://geo.ipify.org/api/v2/country?apiKey=at_rjFOXHiluNgBpHANSFljflUjpO0y9&ipAddress=${ipInput.value}`,
    )
		  .then((responce) => responce.json())
		  .then(data => setInfo(data));
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapdata) {
	console.log(mapdata)
	ipInfo.innerText = mapdata.ip;
	locationInfo.innerText = mapdata.location.country + ' ' + mapdata.location.region;
	timezoneInfo.innerText = mapdata.location.timezone;
	ispInfo.innerText = mapdata.isp;
}