
// Global Variables
	// Static Variables
	var ballX = parseInt($("circle").attr('cx'));
	var ballY = parseInt($("circle").attr('cy'));
	var velocityInput;
	var angleDeg;

	// Dynamic Variables	
	var currentVelocity;
	var acceleration = -9.81;
	var simActive = false;
	var velocityX;
	var velocityY;
	var angleRad;
	var ballRadius;
		// Time Variable
			var time;
			var startTime;
			var currTime = 0;
			var timeDelta;

	// DEBUG
		// gSA
		var gameStateArray;
		// iA
		var inputArray;
// UI
	// Initiate Simulator State
		$(document).ready(function() {
			// Canvas Resize
			windowHeight = window.innerHeight;
			$("#canvas").css('height', windowHeight);
			$("svg").css('height', windowHeight * 0.8);
			// Set Ball Position
			$("circle").attr({
				cy: windowHeight * 0.75
			});
		});

	// Reset	
		$("#reset-btn").on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			$("#velocityInput,#angleInput,#ballRadius").val("");
			console.log("Test")
		});	

	// Button Event
	$("#start-btn").on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			simActive = true;
			
		 	// Set Ball Radius
		 	ballRadius = parseInt($("#ballRadius").val())

			// Set Velocity
			velocityInput = parseInt($("#velocityInput").val())
			velocityX = Math.cos(angleRad); 
			velocityY = Math.sin(angleRad);

			// Set Angle
			angleDeg = parseInt($("#angleInput").val());
			angleRad = radToDeg(angleDeg);

			// Initiate Render Loop
			setInterval(render,1);
			// DEBUG
				console.log("Sim Started " + "SimActive: " + simActive);

				// Start DEBUG loop
				setInterval(debug,1000)

		// Input
			// Velocity Validation

			// Angle Validation
		}
	)

// Degree to Radians Calculator
	function radToDeg(angle) {
		return angle / (180 / Math.PI);
	}
// Render
	function render() {
		// Update Time
			time = new Date().getTime();
			currTime = new Date().getTime();
			timeDelta = 0.001 * (currTime - startTime);
		// Set Velocities
		velocityX = Math.cos(angleRad)*velocityInput;
		velocityY = Math.sin(angleRad)*velocityInput;
			
		// Distance 
		ballX = velocityX * timeDelta;
		ballY =  (windowHeight * 0.75) - (velocityY*timeDelta + 0.5*acceleration*(Math.pow(timeDelta,2)));
		
		// Apply Attributes
			$("circle").attr({
			cx: ballX + ballRadius,
			cy: ballY ,
			r: ballRadius
			});
		}
		
// Collision

// DEBUG
	function debug() {
		// console.log("Velocities are")
		// 		// Set DEBUG variables
		// 		gameStateArray = {"simActive":simActive,"Time":currTime}
		// 		inputArray = {"X Velocity":velocityX,"Y Velocity":velocityY}
		// 		// Output DEBUG variables
		// 		console.log("gameStateArray");
		// 		console.log("inputArray")
		console.log(timeDelta)
	}
			