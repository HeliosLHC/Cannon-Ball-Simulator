
// Global Variables
	var ballX = $("circle").attr('cx');
	var ballY;
	var initVelocity = 20; 
	var currentVelocity;
	var acceleration = 9.81;
	var simActive = false;
	var time = 0;
	var dateObject = new Date();
	var initTime;
	var currTime = dateObject.getTime();
	var timeDelta;
// UI
$("#start-btn").on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	simActive = true;
	// Set InitTime 
	initTime = dateObject.getTime();
	setInterval(timer,10)
	setInterval(render,10);
	// DEBUG
	console.log("Sim Started " + "SimActive: " + simActive);
	setInterval(function(){console.log("Time: " + timeDelta + " Seconds")}, 1000)});
	

// Time
	// Time increment
	function timer() {
		//setInterval(function(){time++; }, 1000)	
		dateObject = new Date();
		currTime = dateObject.getTime();
		timeDelta = Math.round((currTime - initTime)*0.001);
	}
// Render
	function render() {
		// Velocity
		//currentVelocity = initVelocity + time*acceleration;
		// Position Ball
		ballX = initVelocity*timeDelta;
		// Apply Attributes
		$("circle").attr({
		cx: ballX,
		cy: "10",
		r: "10"
	});
	}
// Collision