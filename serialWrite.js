var SerialPort = require("serialport").SerialPort;

var sp = new SerialPort("/dev/tty.usbserial-FTWKD2O0", {
		baudrate: 921600
});

sp.open(function(err) {
		if (err) console.log("Failed to open: ", err);
		else {
				sp.on("open", function() {
						console.log("Serial port opened.");
						sp.write("Hello? Is anyone there?");
				});
		}
});
