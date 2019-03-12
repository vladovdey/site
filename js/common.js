$(function () {
	const switcherOn = document.querySelector('.on'),
		switcherOff = document.querySelector('.off');

	switcherOn.addEventListener('click', () => {
		if (switcherOff.style.opacity == 0) {
			switcherOff.style.opacity = '1';
			switcherOn.style.opacity = '0';
		}else{
			switcherOff.style.opacity = '0';
			switcherOn.style.opacity = '1';
		}

	});
	// Custom JS

});