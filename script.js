// const colors = ['yellow', 'blue', 'pink', 'green', 'white', 'red', 'orange'];
// const stroboscope = document.getElementById('stroboscope');
// var startStrob;
// let i = 0;
// const myInterval = setInterval(function() {
// 		stroboscope.style.backgroundColor = colors[i];
// 		i++;
// 		if (i === colors.length - 1) {
// 			i = 0;
// 		};
// 	}, 50);

// function startStrob() {	
// 	startStrob = myInterval;
// };

// function stopStrob() {
// 	window.clearInterval(startStrob);
// };



// stroboscope.addEventListener('click', function(e) {
// 	console.log(e.target.className);
// 	if (e.target.className === 'on') {
// 		startStrob();
// 		e.target.className = 'off';
// 	} else if (e.target.className = 'off') {
// 		stopStrob();
// 		e.target.className = 'on';
// 		startStrob = myInterval;
// 	}
// });