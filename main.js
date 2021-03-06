
// Global Variables
	// Static Variables
	var ballX = parseInt($("circle").attr('cx'));
	var ballY = parseInt($("circle").attr('cy'));
	var velocityInput;
	var angleDeg;
	var renderLoop;
	var debug;

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
// UI
	// Initiate Simulator State
		function simInit() {
			// Set Ball Position
			$("circle").attr({
				cy: windowHeight * 0.75, cx: 20, r: 20
			});
		}
		$(document).ready(function() {
			// Canvas Resize
			windowHeight = window.innerHeight;
			$("#canvas").css('height', windowHeight);
			$("svg").css('height', windowHeight * 0.8);
			simInit()
			});

	// Reset	
		$("#reset-btn").on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			simActive = false;
			$("#velocityInput,#angleInput,#ballRadius").val("");
			simInit();
		});	
	// Check if Input is a Number
			function numCheck(inputValue) {
				if (isNaN(parseInt( inputValue ))) {
					alert("One of your input values are not numbers");
					console.error("Invalid Input Values");
					return false; 
				} 
				else { 
					return true;
				}
			}		
	// Button Event
	$("#start-btn").on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			
			// Set simulator state to active
			// simActive = true;
			
		 	// Set Ball Radius
		 	ballRadius = $("#ballRadius").val();
		 		// Validate Radius
		 		simActive = numCheck(ballRadius);

			// Set Velocity
			velocityInput = $("#velocityInput").val();
				// Validate Velocity
		 		simActive = numCheck(velocityInput);

				velocityX = Math.cos(angleRad); 
				velocityY = Math.sin(angleRad);

			// Set Angle
			angleDeg = $("#angleInput").val();
				// Validate Angle
		 		simActive = numCheck(angleDeg);

			angleRad = radToDeg(angleDeg);

			// Set Start Time 
			startTime = new Date();
			// Initiate Render Loop
			if (simActive) {
				renderLoop = setInterval(render,1);
				renderLoop;				
			}
			// DEBUG
				console.log("Sim Started " + "SimActive: " + simActive);
				// Start DEBUG loop
				var debug = setInterval(debug,1000);
				debug;
			})	

// Degree to Radians Calculator
	function radToDeg(angle) {
		return angle / (180 / Math.PI);
	}
// Render
	function render() {
		// Check Sim Active
		if (simActive) {

		} 
			else {
				clearInterval(renderLoop);
				clearInterval(debug);
				alert("Simulation has ended");
			}
		// Update Time
			// time = new Date().getTime();
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
			cx: (ballX + ballRadius),
			cy: ballY ,
			r: ballRadius
			});
		// Collision
			if (ballY > (windowHeight)) {
			simActive = false;
		} 
	}
		
// DEBUG
	function debug() {
		gameStateArray = {
		"simActive": 	simActive,
		"Time": 		currTime,
		"timeDelta": 	timeDelta,
		"ballX": 		ballX,
		"ballY": 		ballY,
		};
		console.log(gameStateArray);

	}
			