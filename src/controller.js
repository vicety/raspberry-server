var gpiop = require('rpi-gpio').promise;

exports.setOut = async function (pin, voltage) {
  await gpiop.setup(pin, gpiop.DIR_OUT)
  gpiop.write(pin, voltage)
}