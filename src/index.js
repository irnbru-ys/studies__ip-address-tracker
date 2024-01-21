import 'leaflet/dist/leaflet.css';
import L, { LatLngBounds } from 'leaflet';
import { addTileLayer, validateIp } from './helpers';
import icon from '../images/icon-location.svg';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

const mapArea = document.querySelector('.map');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
});

const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
});

addTileLayer(map);

L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);

function getData() {
  if (validateIp(ipInput.value)) {
    fetch(
		  `https://geo.ipify.org/api/v2/country,city?apiKey=at_rjFOXHiluNgBpHANSFljflUjpO0y9&ipAddress=${ipInput.value}`,
    )
		  .then((responce) => responce.json())
		  .then((data) => setInfo(data));
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapdata) {
  console.log(mapdata);
  const { country, region, timezone } = mapdata.location;
  const { lat, lng } = mapdata.location;
  ipInfo.innerText = mapdata.ip;
  locationInfo.innerText = `${country} ${region}`;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = mapdata.isp;

  map.panTo([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);
}
