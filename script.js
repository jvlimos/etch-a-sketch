const container = document.querySelector('#container');

let divsPerLine = 100;

// creation of divs
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
	// div.setAttribute('draggable', 'false'); // doesnt work
});
// JUST ANOTHER METHOD
// for (let i = 0; i < newDivs.length; i++) {
// 	newDivs[i].setAttribute('style', `height: ${divSize}%; width: ${divSize}%;`);
// }

// 
let mouseDown = false;
document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);

// function for mousedown and mouseover event listeners
function eventListener(event, div) {
	if (event.type === 'mouseover' && !mouseDown) return; 
	// mousedown && mouseover needed to proceed
	div.classList.add('selected-div');
}

// // adds event listener for mouseover and mousedown

[...newDivs].forEach((div) => div.addEventListener('mouseover', (event) => {
		if (event.type === 'mouseover' && !mouseDown) return;
		div.classList.add('selected-div');}));

// for (let i = 0; i < newDivs.length; i++) {
// 	let div = newDivs[i];
// 	div.addEventListener('mouseover', (event) => {
// 		if (event.type === 'mouseover' && !mouseDown) return;
// 		div.classList.add('selected-div');
// 	});
// }
