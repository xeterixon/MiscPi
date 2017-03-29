var Gpio = require('onoff').Gpio;
var button = new Gpio(4, 'in', 'both');
console.log("Button setup" + button);
var currentValue = button.readSync();

button.watch(function (err, value) {
  if (err) {
    console.log(err);
  }
  if(value != currentValue)
  {
    currentValue = value
  }
  console.log(currentValue);
});

process.on('SIGINT', function () {
  console.log("Going down");
  button.unexport();
});
