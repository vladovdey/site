$(function () {
	const switcherOn = document.querySelector('.on'),
		switcherOff = document.querySelector('.off'),
		slider = document.querySelector("#toning_range"),
		tonerTruck = document.querySelector(".toner"),
		tonerGlass = document.querySelector('.header_content__img-on'),
		tryBlock = document.querySelector('.header_content__button___popup'),
		popupContact = document.querySelector('.contact_us'),
		callbackBtn = document.querySelector('#callback'),
		closeBtn = document.querySelector('.contact_us__body___close > svg');

	callbackBtn.addEventListener('click',()=>{
		popupContact.style.display = 'block';
		document.body.style.overflow = '';
	});

	closeBtn.addEventListener('click',()=>{
		popupContact.style.display = 'none';
		document.body.style.overflow = '';
	});

	// let timerID = setInterval(()=>{
	// 	tryBlock.style.display = 'block';
	// },1000);

	slider.addEventListener('input',()=>{
		let value = (+slider.value)/100;
		tonerTruck.style.opacity = value;
	});


	switcherOn.addEventListener('click', () => {
		if (switcherOff.style.opacity == 0) {
			switcherOff.style.opacity = '1';
			switcherOn.style.opacity = '0';
			tonerGlass.style.opacity = '0';
		}else{
			switcherOff.style.opacity = '0';
			switcherOn.style.opacity = '1';
			tonerGlass.style.opacity = '1';
		}

	});

	$(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
	$(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.5, orientation: 'vertical'});
	// Custom JS

});