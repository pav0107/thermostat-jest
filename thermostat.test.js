const Thermostat = require('./thermostat.js');

it('it starts at 20 degrees', () => {
  let thermostat = new Thermostat();
  expect(thermostat.temperature).toEqual(20);
});
