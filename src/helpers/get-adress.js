export async function getAddress(ip = '176.120.73.154') {
  const responce = await fetch(
			  `https://geo.ipify.org/api/v2/country,city?apiKey=at_rjFOXHiluNgBpHANSFljflUjpO0y9&ipAddress=${ip}`,
  );

	  return await responce.json();
}
