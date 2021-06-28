const colourBoxes = document.querySelectorAll('.colourBox');
const nextButtons = document.querySelectorAll('.nextButton');
const selectButtons = document.querySelectorAll('.selectButton');
const colourLineup = document.querySelector('.colourLineup');

colourBoxes.forEach((colourBox) => {
	const coloursArray = [];
})

// Press next button
nextButtons.forEach((nextButton) => {
	nextButton.addEventListener('click', (e) => {
		let colour1 = Math.floor(Math.random() * 255);
		let colour2 = Math.floor(Math.random() * 255);
		let colour3 = Math.floor(Math.random() * 255);
		const randomColour = `rgb(${colour1}, ${colour2}, ${colour3})`
		// coloursArray.push(randomColour);
		e.currentTarget.parentNode.parentNode.style.backgroundColor = randomColour;
	});
});

// Press select button
selectButtons.forEach((selectButton) => {
	selectButton.addEventListener('click', (e) => {

		let selectedColour = e.currentTarget.parentNode.parentNode.style.backgroundColor;
		colourLineup.insertAdjacentHTML('beforeend',
			`<div class='chosenColour'>
				<div class='chosenColourBox'></div>
				<div class='chosenColourTitle'></div>
				<div class='deleteButton'><p>❌</p></div>
			</div>`
		); 

		const chosenColourBoxes = document.querySelectorAll('.chosenColourBox');
		chosenColourBoxes[(chosenColourBoxes.length - 1)].style.backgroundColor = selectedColour;

		const chosenColourTitles = document.querySelectorAll('.chosenColourTitle');
		chosenColourTitles[(chosenColourTitles.length - 1)].innerText = selectedColour;
		
		const deleteButtons = document.querySelectorAll('.deleteButton');
		// Press delete buttons
		deleteButtons.forEach((deleteButton) => {
			deleteButton.addEventListener('click', (j) => {
			j.currentTarget.parentNode.style.display = 'none';
			})
		});
	});

});

window.addEventListener('DOMContentLoaded', () => {
	window.dispatchEvent(new KeyboardEvent('keyup', {'key':'r'}));
})

// Randomise All Colours
window.addEventListener('keyup', (e) => {
	if(e.keyCode === 82){
		nextButtons.forEach((nextButton) => {
			nextButton.addEventListener('click', (e) => {
			let colour1 = Math.floor(Math.random() * 255);
			let colour2 = Math.floor(Math.random() * 255);
			let colour3 = Math.floor(Math.random() * 255);
			const randomColour = `rgb(${colour1}, ${colour2}, ${colour3})`
			// coloursArray.push(randomColour);
			e.currentTarget.parentNode.parentNode.style.backgroundColor = randomColour;
			});
			nextButton.click();
		})
	}
})






















