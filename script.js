const colors = ['yellow', 'blue', 'pink', 'green', 'white', 'red', 'orange'];

function stroboscope() {
	const strobTainer = document.getElementById('stroboscope');
	let i = 0;
	setInterval(function() {
		strobTainer.style.backgroundColor = colors[i];
		i++;
		if (i === colors.length - 1) {
			i = 0;
		};
	}, 50);
};