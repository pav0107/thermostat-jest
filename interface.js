import Thermostat from './thermostat.js';

document.addEventListener('DOMContentLoaded', () => {
  const thermostat = new Thermostat();
  const temperatureEl = document.querySelector('#temperature');
  const upEl = document.querySelector('#temperature-up');
  const downEl = document.querySelector('#temperature-down');
  const resetEl = document.querySelector('#temperature-reset');
  const powerSavingModeOnEl = document.querySelector('#powersaving-on');
  const powerSavingModeOffEl = document.querySelector('#powersaving-off');
  const currentTemperatureEl = document.querySelector('#current-temperature');
  const selectCityEl = document.querySelector('#select-city');
  const currentCity = document.querySelector('#current-city');
  const currentOutdoorTemp = document.querySelector('#current-outdoor-temp');

  // Update temperature display
  const updateTemperature = () => {
    temperatureEl.innerText = thermostat.temperature;
    temperatureEl.className = thermostat.energyUsage();
  };

  // Temperature display
  updateTemperature();

  // Increase temperature
  upEl.addEventListener('click', () => {
    // update model
    thermostat.up();
    // update view
    updateTemperature();
  });

  // Decrease temperature
  downEl.addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  // Reset temperature
  resetEl.addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  // Turn Power Saving Mode on'
  powerSavingModeOnEl.addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  });

  // Turn Power Saving Mode off'
  powerSavingModeOffEl.addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  });

  // ALTERNATIVE WHERE YOU CAN ENTER A LOCATION (DOESN'T MAKE SENSE)
  // Get weather info for London

  // const displayWeather = (city) => {
  //   const API = 'f5929c891d8537828818b3a10a7e3e0e';
  //   const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => (currentTemperatureEl.innerText = data.main.temp));
  // };

  // displayWeather('London');

  // selectCityEl.addEventListener('submit', (event) => {
  //   event.preventDefault();
  //   const city = currentCity.value;
  //   displayWeather(city);
  // });

  let lon, lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('dfsfd');
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      console.log('here');
      const API = 'f5929c891d8537828818b3a10a7e3e0e';

      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => (currentTemperatureEl.innerText = data.main.temp));
      currentOutdoorTemp.classList.remove('hidden');
      currentOutdoorTemp.classList.add('shown');
    });
  }
});
