
// Global Variables
	// Static Variables
	var ballX = $("circle").attr('cx');
	var ballY = $("circle").attr('cy');
	var velocityInput = velocityInput =  parseInt($("#velocityInput").val());
	var angleDeg = angleDeg = parseInt($("#angleInput").val());

	// Dynamic Variables	
	var currentVelocity;
	var acceleration = 9.81;
	var simActive = false;
	var time = 0;
	var dateObject = new Date();
	var initTime;
	var currTime;
	var timeDelta;
	var velocityX;
	var velocityY;
	var angleRad;
	// DEBUG
		// gSA
		var gameStateArray;
		// iA
		var inputArray;
// UI
$("#start-btn").on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	simActive = true;

	// Set InitTime 
	initTime = dateObject.getTime();
	
	// Set Velocity
	velocityX = Math.cos(angleRad); 
	velocityY = Math.sin(angleRad);

	// Set Angle
	angleRad = radToDeg(angleDeg);

	// Initiate Render Loop
	setInterval(render,10);
	// DEBUG
	console.log("Sim Started " + "SimActive: " + simActive);
// Input
	// Velocity Validation

	// Angle Validation

		
		

// Degree to Radians Calculator
	function radToDeg(angle) {
		return angle * (180 / Math.PI);
	}
// Render
	function render() {
		// Update Time
		dateObject = new Date();
		currTime = dateObject.getTime();
		timeDelta = Math.round((currTime - initTime)*0.001);
		// Set Velocities
		velocityX = Math.cos(angleRad)*velocityInput;
		velocityY = Math.sin(angleRad)*velocityInput;
			// DEBUG
			console.log("Velocities are")
				// Set DEBUG variables
				gameStateArray = {"simActive":simActive,"Time":timeDelta}
				inputArray = {"X Velocity":velocityX,"Y Velocity":velocityY}
				// Output DEBUG variables
				console.log("gameStateArray");
				console.log("inputArray")
		// Distance 
		ballX=velocityX*timeDelta;
		ballY=velocityY*timeDelta + 0.5*acceleration*(Math.pow(timeDelta,2));
		// Apply Attributes
		$("circle").attr({
		cx: ballX,
		cy: ballY,
		r: "10"
		});
		}
		}
	)
// Collision