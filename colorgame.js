var numSquares = 6;
var squares = document.getElementsByClassName('square');
var colorRGB = document.getElementById('color');
var message = document.getElementById('message');
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easy');
var hardBtn = document.getElementById('hard');
var heading = document.getElementsByTagName('h1')[0];

var colors = generateColorsArr(numSquares);
var pickedColor = pickColor();
colorRGB.textContent = pickedColor;
colorize();
function colorize() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener('click', function() {
			if (this.style.backgroundColor === pickedColor) {
				message.textContent = 'Congratulations! Correct choice.';
				resetButton.textContent = 'Play again!';
				heading.style.backgroundColor = pickedColor;
			} else {
				this.style.backgroundColor = '#232323';
				message.textContent = 'Try again!';
			}
		});
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor() {
	var red = Math.floor(Math.random() * 255 + 1);
	var green = Math.floor(Math.random() * 255 + 1);
	var blue = Math.floor(Math.random() * 255 + 1);
	return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function generateColorsArr(numberOfColors) {
	var arr = [];
	for (var i = 0; i < numberOfColors; i++) {
		arr.push(generateColor());
	}
	return arr;
}

resetButton.addEventListener('click', function() {
	colors = generateColorsArr(numSquares);
	pickedColor = pickColor();
	heading.style.backgroundColor = 'teal';
	colorRGB.textContent = pickedColor;
	colorize();
	message.textContent = '';
	resetButton.textContent = 'New Colors';
});
easyBtn.addEventListener('click', function() {
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares = 3;
	colors = generateColorsArr(numSquares);
	heading.style.backgroundColor = 'teal';
	message.textContent = '';
	pickedColor = pickColor();
	colorRGB.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
});
hardBtn.addEventListener('click', function() {
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares = 6;
	colors = generateColorsArr(numSquares);
	heading.style.backgroundColor = 'teal';
	message.textContent = '';
	pickedColor = pickColor();
	colorRGB.textContent = pickedColor;
	colorize();
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = 'block';
	}
});
