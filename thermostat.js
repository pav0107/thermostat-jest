class Thermostat {
  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  getCurrentTemperature() {
    return this.temperature;
  }
  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature++;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature--;
  }
  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }
  isMaximumTemperature() {
    if (this.isPowerSavingModeOn() === true)
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    else {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
  }
  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }
}
module.exports = Thermostat;
