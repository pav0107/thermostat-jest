import Thermostat from './thermostat.js';

document.addEventListener('DOMContentLoaded', () => {
  const thermostat = new Thermostat();
  const temperatureEl = document.querySelector('#temperature');
  const upEl = document.querySelector('#temperature-up');
  const downEl = document.querySelector('#temperature-down');
  const resetEl = document.querySelector('#temperature-reset');
  const powerSavingModeOnEl = document.querySelector('#powersaving-on');
  const powerSavingModeOffEl = document.querySelector('#powersaving-off');

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

  // Get weather info for London
  const API = 'f5929c891d8537828818b3a10a7e3e0e';
  const city = 'London';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
