const api = "https://weather-proxy.freecodecamp.rocks/api/current?";
let tempCelsius, tempFahrenheit, tempUnit = 'C';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = "lat=" + position.coords.latitude;
    const lon = "lon=" + position.coords.longitude;
    const url = `${api}${lat}&${lon}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const weather = data.weather[0].description;
        const icon = data.weather[0].icon;
        tempCelsius = data.main.temp;
        tempFahrenheit = (tempCelsius * 9 / 5) + 32;

        document.getElementById("loc").innerText = data.name;
        document.getElementById("country").innerText = data.sys.country;
        document.getElementById("weather").innerText = weather;
        document.getElementById("weatherIcon").src = icon;
        document.getElementById("temp").innerText = Math.round(tempCelsius);
        document.getElementById("tempUnit").innerText = "°C";

        setBackground(weather);
      });
  });
}

document.getElementById("tempUnit").addEventListener("click", () => {
  if (tempUnit === 'C') {
    document.getElementById("temp").innerText = Math.round(tempFahrenheit);
    document.getElementById("tempUnit").innerText = "°F";
    tempUnit = 'F';
  } else {
    document.getElementById("temp").innerText = Math.round(tempCelsius);
    document.getElementById("tempUnit").innerText = "°C";
    tempUnit = 'C';
  }
});

function setBackground(weather) {
  const weatherLower = weather.toLowerCase();
  let image = "";

  if (weatherLower.includes("cloud")) {
    image = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=1350&q=80";
  } else if (weatherLower.includes("rain")) {
    image = "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=1350&q=80";
  } else if (weatherLower.includes("clear")) {
    image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80";
  } else if (weatherLower.includes("snow")) {
    image = "https://images.unsplash.com/photo-1608889175444-0c61f8f048b7?auto=format&fit=crop&w=1350&q=80";
  } else if (weatherLower.includes("haze") || weatherLower.includes("fog")) {
    image = "https://images.unsplash.com/photo-1532274402917-5aadf881bdfd?auto=format&fit=crop&w=1350&q=80";
  } else {
    image = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80";
  }

  document.documentElement.style.setProperty('--bg-img', `url(${image})`);
}