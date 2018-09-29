(function($) {
	'use strict';

	$('document').ready(function() {
		// 1. скрыть текстовые описания акардиона
		// кроме первого
		var accordion = $('.accordion');
		var accordionDescriptions = accordion.find('p');
		accordionDescriptions.hide();
		accordionDescriptions.eq(0).show();

		// 2. нужно повесить обработчик события на список
		// элементов аккордеонов, который будет отлавлевать 
		// клики по шапкам и показывать соседнее с шапкой описание 
		// а остальные открытые сворачевать
		accordion.on('click', '.accordion__item', function(evt){
			evt.preventDefault();

			var accordionHeader = $(this);
			var accordionDescription = accordionHeader.next('p');

			if (accordionDescription.css('display') === 'none') {
			accordionDescriptions.slideUp(600);
			accordionDescription.slideDown(600);
			}
		});
	});
})($)