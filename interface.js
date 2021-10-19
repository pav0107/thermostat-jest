import Thermostat from './thermostat.js';

document.addEventListener('DOMContentLoaded', () => {
  const thermostat = new Thermostat();
  const temperatureEl = document.querySelector('#temperature');
  const upEl = document.querySelector('#temperature-up');
  const downEl = document.querySelector('#temperature-down');
  const resetEl = document.querySelector('#temperature-reset');
  const powerSavingModeOnEl = document.querySelector('#powersaving-on');
  const powerSavingModeOffEl = document.querySelector('#powersaving-off');

  // Temperature display
  temperatureEl.innerText = thermostat.temperature;

  // Increase temperature
  upEl.addEventListener('click', () => {
    // update model
    thermostat.up();
    // update view
    temperatureEl.innerText = thermostat.temperature;
  });

  // Decrease temperature
  downEl.addEventListener('click', () => {
    thermostat.down();
    temperatureEl.innerText = thermostat.temperature;
  });

  // Reset temperature

  // Turn Power Saving Mode on'

  // Turn Power Saving Mode off'
});
