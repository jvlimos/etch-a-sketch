const container = document.querySelector('#container');

// creation of divs
let divsPerLine = 3600;
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

// declare mouseDown and change value based on event
let mouseDown = false;
document.body.addEventListener('mousedown', () => mouseDown = true);
document.body.addEventListener('mouseup', () => mouseDown = false);

// adds event listener for mouseover and mousedown
[...newDivs].forEach((div) => div.addEventListener('mouseover', (event) => {
	if (event.type === 'mouseover' && !mouseDown) return;
	div.classList.add('selected-div');
	}
));
// fixes first mousedown on tile not functioning
[...newDivs].forEach((div) => div.addEventListener('mousedown', (event) => {
	if (event.type === 'mousedown') div.classList.add('selected-div');
	}
));
// JUST ANOTHER METHOD
// for (let i = 0; i < newDivs.length; i++) {
// 	let div = newDivs[i];
// 	div.addEventListener('mouseover', (event) => {
// 		if (event.type === 'mouseover' && !mouseDown) return;
// 		div.classList.add('selected-div');
// 	});
// }

// create clear button
const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
	[...newDivs].forEach((div) => div.classList.remove('selected-div'));
});