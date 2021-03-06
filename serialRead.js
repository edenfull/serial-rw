var SerialPort = require("serialport").SerialPort;

var sp = new SerialPort("/dev/tty.usbserial-FTWKD5YE", {
		baudrate: 921600
});

sp.open(function(err) {
		if (err) console.log("Failed to open: ", err);
		else {
				sp.on("open", function() {
						console.log("Serial port opened.");
						
						sp.on("data", function(data) {
								console.log("Data received: ", data);
						});
				});			
		}
});
