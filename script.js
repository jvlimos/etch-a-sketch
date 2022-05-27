const container = document.querySelector('#container');

// change pad size
let inputSize = 4;
const size = document.querySelector('#size');
size.addEventListener('click', () => {
	inputSize = parseInt(prompt('Enter desired number of boxes per line:', 4));
	deleteDivs();
	createDivs();
	}
);

// color picker
var blackColor = true;
const black = document.querySelector('#black');
const rainbow = document.querySelector('#rainbow');

let divsPerLine = inputSize * inputSize;
// function for creation of divs
function createDivs() {

	divsPerLine = inputSize * inputSize;
	let i = 0;
	while (i < divsPerLine) {
		let newDiv = document.createElement('div');
		newDiv.classList.add('new-div');
		container.appendChild(newDiv);
		i++;
	}

	const newDivs = document.querySelectorAll('.new-div');
	// size of every div according to number of divs
	let divSize = Math.sqrt(divsPerLine) / divsPerLine * 100;
	[...newDivs].forEach((div) => {
		div.setAttribute('style', `height: ${divSize}%; width: ${divSize}%;`);
		div.setAttribute('onmousedown', 'return false')
	});
	// JUST ANOTHER METHOD
	// for (let i = 0; i < newDivs.length; i++) {
	// 	newDivs[i].setAttribute('style', `height: ${divSize}%; width: ${divSize}%;`);
	// }

	// color picker
	function colorPicker() {
		if (blackColor === true) {
			// adds event listener for mouseover and mousedown
			[...newDivs].forEach((div) => div.addEventListener('mouseover', (event) => {
				if (event.type === 'mouseover' && !mouseDown) return;
				div.removeAttribute('style');
				div.setAttribute('style', `height: ${divSize}%; width: ${divSize}%;`);
				div.classList.add('selected-div');
				}
			));
			// fixes first mousedown on tile not functioning
			[...newDivs].forEach((div) => div.addEventListener('mousedown', (event) => {
				if (event.type === 'mousedown') {
					div.removeAttribute('style');
					div.setAttribute('style', `height: ${divSize}%; width: ${divSize}%;`);
					div.classList.add('selected-div');
				}}
			));
			// JUST ANOTHER METHOD
			// for (let i = 0; i < newDivs.length; i++) {
			// 	let div = newDivs[i];
			// 	div.addEventListener('mouseover', (event) => {
			// 		if (event.type === 'mouseover' && !mouseDown) return;
			// 		div.classList.add('selected-div');
			// 	});
			// }

		} else if (blackColor === false) {
			// adds event listener for mouseover and mousedown
			[...newDivs].forEach((div) => div.addEventListener('mouseover', (event) => {
				if (event.type === 'mouseover' && !mouseDown) return;
				div.setAttribute('style', `height: ${divSize}%; width: ${divSize}%; background-color: blue;`);
			}));
			// fixes first mousedown on tile not functioning
			[...newDivs].forEach((div) => div.addEventListener('mousedown', (event) => {
				if (event.type === 'mousedown') {
					div.setAttribute('style', `height: ${divSize}%; width: ${divSize}%; background-color: blue;`);
				}
			}));
		}
	}
	black.addEventListener('click', () => {
		blackColor = true;
		colorPicker();
	});
	rainbow.addEventListener('click', () => {
		blackColor = false;
		colorPicker();
	});

	colorPicker();
}
createDivs();

// function for deleting existing divs
function deleteDivs() {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

// declare mouseDown and change value based on event
let mouseDown = false;
document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);


// create clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearPad);

// clear function
function clearPad() {
	divSize = Math.sqrt(divsPerLine) / divsPerLine * 100;

	const newDivs = document.querySelectorAll('.new-div');
	[...newDivs].forEach((div) => {
		div.classList.remove('selected-div');	div.removeAttribute('style');
		div.setAttribute('style', `height: ${divSize}%; width: ${divSize}%;`);
	});
}
