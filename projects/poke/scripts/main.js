'use strict';

$(document).ready(function () {
	//Set each variable to 0 so that the evolve button that corresponds with the variable disappears after 2 uses
	var pokeId = 0;
	var evolve1 = 0;
	var evolve2 = 0;
	var evolve3 = 0;
	var evolve4 = 0;
	var evolve5 = 0;
	var evolve6 = 0;

	//Generation 1
	$.getJSON('http://pokeapi.co/api/v2/pokemon/1/', function (data) {
		$('.grass').empty();
		$('.grass').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/4/', function (data) {
		$('.fire').empty();
		$('.fire').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/7/', function (data) {
		$('.water').empty();
		$('.water').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 2
	$.getJSON('http://pokeapi.co/api/v2/pokemon/152/', function (data) {
		$('.grass2').empty();
		$('.grass2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/155/', function (data) {
		$('.fire2').empty();
		$('.fire2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/158/', function (data) {
		$('.water2').empty();
		$('.water2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 3
	$.getJSON('http://pokeapi.co/api/v2/pokemon/252/', function (data) {
		$('.grass3').empty();
		$('.grass3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/255/', function (data) {
		$('.fire3').empty();
		$('.fire3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/258/', function (data) {
		$('.water3').empty();
		$('.water3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 4
	$.getJSON('http://pokeapi.co/api/v2/pokemon/387/', function (data) {
		$('.grass4').empty();
		$('.grass4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/390/', function (data) {
		$('.fire4').empty();
		$('.fire4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/393/', function (data) {
		$('.water4').empty();
		$('.water4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 5
	$.getJSON('http://pokeapi.co/api/v2/pokemon/495/', function (data) {
		$('.grass5').empty();
		$('.grass5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/498/', function (data) {
		$('.fire5').empty();
		$('.fire5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/501/', function (data) {
		$('.water5').empty();
		$('.water5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Generation 6
	$.getJSON('http://pokeapi.co/api/v2/pokemon/650/', function (data) {
		$('.grass6').empty();
		$('.grass6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/653/', function (data) {
		$('.fire6').empty();
		$('.fire6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	$.getJSON('http://pokeapi.co/api/v2/pokemon/656/', function (data) {
		$('.water6').empty();
		$('.water6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
	});

	//Evolutions for each generation
	function Evolve(id) {
		setTimeout(function () {
			$('.grass img').css('filter', 'brightness(0) invert(1)');
			$('.fire img').css('filter', 'brightness(0) invert(1)');
			$('.water img').css('filter', 'brightness(0) invert(1)');
			$('.grass img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function (data) {
				$('#bulbasaur h3').empty();
				$('#bulbasaur h3').html(Capitalize(data.name));
				$('.grass').empty();
				$('.grass').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass img').css('filter', 'brightness(0) invert(1)');
				$('.grass img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function (data) {
				$('#charmander h3').empty();
				$('#charmander h3').html(Capitalize(data.name));
				$('.fire').empty();
				$('.fire').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire img').css('filter', 'brightness(0) invert(1)');
				$('.fire img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function (data) {
				$('#squirtle h3').empty();
				$('#squirtle h3').html(Capitalize(data.name));
				$('.water').empty();
				$('.water').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water img').css('filter', 'brightness(0) invert(1)');
				$('.water img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve1++;
	}

	function Evolve2(id) {
		setTimeout(function () {
			$('.grass2 img').css('filter', 'brightness(0) invert(1)');
			$('.fire2 img').css('filter', 'brightness(0) invert(1)');
			$('.water2 img').css('filter', 'brightness(0) invert(1)');
			$('.grass2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function (data) {
				$('#chikorita h3').empty();
				$('#chikorita h3').html(Capitalize(data.name));
				$('.grass2').empty();
				$('.grass2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass2 img').css('filter', 'brightness(0) invert(1)');
				$('.grass2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function (data) {
				$('#cyndaquil h3').empty();
				$('#cyndaquil h3').html(Capitalize(data.name));
				$('.fire2').empty();
				$('.fire2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire2 img').css('filter', 'brightness(0) invert(1)');
				$('.fire2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function (data) {
				$('#totodile h3').empty();
				$('#totodile h3').html(Capitalize(data.name));
				$('.water2').empty();
				$('.water2').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water2 img').css('filter', 'brightness(0) invert(1)');
				$('.water2 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve2++;
	}

	function Evolve3(id) {
		setTimeout(function () {
			$('.grass3 img').css('filter', 'brightness(0) invert(1)');
			$('.fire3 img').css('filter', 'brightness(0) invert(1)');
			$('.water3 img').css('filter', 'brightness(0) invert(1)');
			$('.grass3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function (data) {
				$('#treecko h3').empty();
				$('#treecko h3').html(Capitalize(data.name));
				$('.grass3').empty();
				$('.grass3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass3 img').css('filter', 'brightness(0) invert(1)');
				$('.grass3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function (data) {
				$('#torchic h3').empty();
				$('#torchic h3').html(Capitalize(data.name));
				$('.fire3').empty();
				$('.fire3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire3 img').css('filter', 'brightness(0) invert(1)');
				$('.fire3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function (data) {
				$('#mudkip h3').empty();
				$('#mudkip h3').html(Capitalize(data.name));
				$('.water3').empty();
				$('.water3').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water3 img').css('filter', 'brightness(0) invert(1)');
				$('.water3 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve3++;
	}

	function Evolve4(id) {
		setTimeout(function () {
			$('.grass4 img').css('filter', 'brightness(0) invert(1)');
			$('.fire4 img').css('filter', 'brightness(0) invert(1)');
			$('.water4 img').css('filter', 'brightness(0) invert(1)');
			$('.grass4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function (data) {
				$('#turtwig h3').empty();
				$('#turtwig h3').html(Capitalize(data.name));
				$('.grass4').empty();
				$('.grass4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass4 img').css('filter', 'brightness(0) invert(1)');
				$('.grass4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function (data) {
				$('#chimchar h3').empty();
				$('#chimchar h3').html(Capitalize(data.name));
				$('.fire4').empty();
				$('.fire4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire4 img').css('filter', 'brightness(0) invert(1)');
				$('.fire4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function (data) {
				$('#piplup h3').empty();
				$('#piplup h3').html(Capitalize(data.name));
				$('.water4').empty();
				$('.water4').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water4 img').css('filter', 'brightness(0) invert(1)');
				$('.water4 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve4++;
	}

	function Evolve5(id) {
		setTimeout(function () {
			$('.grass5 img').css('filter', 'brightness(0) invert(1)');
			$('.fire5 img').css('filter', 'brightness(0) invert(1)');
			$('.water5 img').css('filter', 'brightness(0) invert(1)');
			$('.grass5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function (data) {
				$('#snivy h3').empty();
				$('#snivy h3').html(Capitalize(data.name));
				$('.grass5').empty();
				$('.grass5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass5 img').css('filter', 'brightness(0) invert(1)');
				$('.grass5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function (data) {
				$('#tepig h3').empty();
				$('#tepig h3').html(Capitalize(data.name));
				$('.fire5').empty();
				$('.fire5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire5 img').css('filter', 'brightness(0) invert(1)');
				$('.fire5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function (data) {
				$('#oshawott h3').empty();
				$('#oshawott h3').html(Capitalize(data.name));
				$('.water5').empty();
				$('.water5').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water5 img').css('filter', 'brightness(0) invert(1)');
				$('.water5 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve5++;
	}

	function Evolve6(id) {
		setTimeout(function () {
			$('.grass6 img').css('filter', 'brightness(0) invert(1)');
			$('.fire6 img').css('filter', 'brightness(0) invert(1)');
			$('.water6 img').css('filter', 'brightness(0) invert(1)');
			$('.grass6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.fire6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			$('.water6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 0) + '/', function (data) {
				$('#chespin h3').empty();
				$('#chespin h3').html(Capitalize(data.name));
				$('.grass6').empty();
				$('.grass6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.grass6 img').css('filter', 'brightness(0) invert(1)');
				$('.grass6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 3) + '/', function (data) {
				$('#fennekin h3').empty();
				$('#fennekin h3').html(Capitalize(data.name));
				$('.fire6').empty();
				$('.fire6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.fire6 img').css('filter', 'brightness(0) invert(1)');
				$('.fire6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});

			$.getJSON('http://pokeapi.co/api/v2/pokemon/' + (id + 6) + '/', function (data) {
				$('#froakie h3').empty();
				$('#froakie h3').html(Capitalize(data.name));
				$('.water6').empty();
				$('.water6').append('<img src=\'' + data.sprites.front_default + '\' alt=\'' + data.name + '\'>');
				$('.water6 img').css('filter', 'brightness(0) invert(1)');
				$('.water6 img').fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
			});
		}, 3000);
		evolve6++;
	}

	//Pokedex functionality
	function GetPokemon(pokemon) {
		$.getJSON('http://pokeapi.co/api/v2/pokemon/' + pokemon + '/', function (data) {
			pokeId = data.id;

			//Clear all previous data
			$('#name').empty();
			$('#num').empty();
			$('#type').empty();
			$('#move').empty();
			$('#pokedexImage').empty();

			//Displays name, id, and image data
			$('#name').html(Capitalize(data.name));
			$('#number').html(data.id);
			$('#pokedexImage').attr('src', data.sprites.front_default);
			$('#pokedexImage').attr('alt', data.name);

			//Displays type data
			$.each(data.types, function (i, item) {
				$('#type').append(Capitalize(data.types[i].type.name) + '<br>');
			});

			//Displays moves data
			var j = 0;
			$.each(data.moves, function (i, item) {
				if (data.moves[i].version_group_details[0].move_learn_method.name == 'level-up' && j < 4) {
					$('#move').append(Capitalize(data.moves[i].move.name) + '<br>');
					j++;
				}
			});

			//Adding animation to the data
			$('#pokedexImage').addClass('animated');
			$('#pokedexImage').addClass('tada');
			$('.pokemon h3').addClass('animated');
			$('.pokemon h3').addClass('bounceIn');
			$('#name').addClass('animated');
			$('#name').addClass('bounceInUp');
			$('#number').addClass('animated');
			$('#number').addClass('bounceInUp');
			$('#type').addClass('animated');
			$('#type').addClass('bounceInUp');
			$('#move').addClass('animated');
			$('#move').addClass('bounceInUp');

			//Remove the animation classes after 3 seconds
			setTimeout(function () {
				$('#pokedexImage').removeClass('animated');
				$('#pokedexImage').removeClass('tada');
			}, 3000);
			//If search was successful, hide the error message and fade the Pokemon in after 800 milliseconds
		}).done(function () {
			$('.error').hide();
			$('.pokemon').delay(800).fadeIn();
			//If search was unsuccessful, display the error message after 1 second
		}).fail(function () {
			$('.pokemon').fadeOut();
			$('.error').delay(1000).fadeIn(1000);
		});
	}

	//Capitalize the first letter of a pokemon's name
	function Capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	//On submission of the Pokedex search, run the GetPokemon function
	$('#pokemonForm').on('submit', function (event) {
		event.preventDefault();
		var pokemon = $(this).serialize();;
		GetPokemon(pokemon.substr(6));
	});

	//Evolve buttons
	$('#evolve1').click(function () {
		var id = parseInt($('#bulbasaur h3').attr('class'));
		$('#bulbasaur h3').attr('class', id + 1);
		Evolve(id + 1);
		if (evolve1 == 2) {
			$('#evolve1').remove();
		}
	});

	$('#evolve2').click(function () {
		var id = parseInt($('#chikorita h3').attr('class'));
		$('#chikorita h3').attr('class', id + 1);
		Evolve2(id + 1);
		if (evolve2 == 2) {
			$('#evolve2').remove();
		}
	});

	$('#evolve3').click(function () {
		var id = parseInt($('#treecko h3').attr('class'));
		$('#treecko h3').attr('class', id + 1);
		Evolve3(id + 1);
		if (evolve3 == 2) {
			$('#evolve3').remove();
		}
	});

	$('#evolve4').click(function () {
		var id = parseInt($('#turtwig h3').attr('class'));
		$('#turtwig h3').attr('class', id + 1);
		Evolve4(id + 1);
		if (evolve4 == 2) {
			$('#evolve4').remove();
		}
	});

	$('#evolve5').click(function () {
		var id = parseInt($('#snivy h3').attr('class'));
		$('#snivy h3').attr('class', id + 1);
		Evolve5(id + 1);
		if (evolve5 == 2) {
			$('#evolve5').remove();
		}
	});

	$('#evolve6').click(function () {
		var id = parseInt($('#chespin h3').attr('class'));
		$('#chespin h3').attr('class', id + 1);
		Evolve6(id + 1);
		if (evolve6 == 2) {
			$('#evolve6').remove();
		}
	});

	//Show loading icon when searching for a pokemon
	$('#searchForm').bind('enterKey', function (e) {
		$('#loading').delay(500).fadeIn();
		$('.pokemon').fadeOut();
		$('.error').fadeOut();
	});

	$('#searchForm').keyup(function (e) {
		if (e.keyCode == 13) {
			$(this).trigger('enterKey');
		}
	});

	//Fade out loading icon when ajax is done
	$(document).ajaxStop(function () {
		$('#loading').fadeOut();
	});
});
'use strict';

$(document).ready(function () {
	//Full page initialization 
	$('#fullpage').fullpage({
		menu: '#menu',
		keyboardScrolling: true,
		verticalCentered: false,
		anchors: ['first', 'about', 'second', 'third']
	});

	//Redirect to the first section on page load
	location.replace('#first');

	//Disable scrolling on load
	$.fn.fullpage.setAllowScrolling(false);

	//Add a glow effect when focusing on the Pokedex search bar
	$('#searchForm').focus(function () {
		$('#searchForm').css('box-shadow', '0 0 20px rgba(81, 203, 238, 1');
		$('#searchForm').css('border', '1px solid rgba(81, 203, 238, 1');
		$('#searchForm').css('transition', '.5s');
	});

	$('#searchForm').blur(function () {
		$('#searchForm').css('box-shadow', 'none');
		$('#searchForm').css('border', '1px solid gray');
		$('#searchForm').css('transition', '.5s');
	});

	//Pokeball wobble and sound effect on hover
	$('#pokeball').hover(function () {
		$(this).css('filter', 'brightness(.5)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
		wobble.volume = .5;
		wobble.play();
	}, function () {
		$(this).removeClass('animated bounceInDown');
		$(this).css('filter', 'brightness(1)');
		$(this).css('transition', '.5s');
		var wobble = document.getElementById('pokeballWobble');
		wobble.pause();
		wobble.currentTime = 0;
	});

	//When the Pokeball is clicked, fade to white, then fade to the main page and play the theme song
	$('#pokeball').click(function () {
		$('.first').css('opacity', '0');
		$('.first').css('transition', '1s');
		$('#pokeballWobble').animate({ volume: 0 }, 500);

		setTimeout(function () {
			var wobble = document.getElementById('pokeballWobble');
			wobble.remove();
			var pokeball = document.getElementById('pokeballOpen');
			pokeball.volume = .2;
			pokeball.play();
		}, 200);

		setTimeout(function () {
			$('.navbar').css('opacity', '1');
			$('.navbar').css('transition', '1s');
			$('.second, .third').css('display', 'block');
			$('.second, .third').css('transition', '1s');
			$('#pokeman').css('display', 'block');
			$('.welcome2').css('display', 'block');
			$('.welcome1').css('display', 'none');
			$('.first').css('opacity', '1');
			$('.first').css('transition', '3s');
			$('#pokeball').remove();
		}, 2000);

		setTimeout(function () {
			var background = document.getElementById('backgroundMusic');
			background.play();
			background.volume = .2;
			$.fn.fullpage.setAllowScrolling(true);
		}, 3400);
	});

	//Evolution black magic
	$('#evolve1').click(function () {
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({ volume: 0 }, 1500);
		$('.element').css('color', 'black');
		$('.element').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function () {
			$('.element').show();
			$('.element').css('color', 'white');
			$('.element').css('transition', '2s');
			$(function () {
				$('.element').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);

		setTimeout(function () {
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);

		setTimeout(function () {
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
		}, 10000);

		setTimeout(function () {
			$('.grass img').css('filter', 'brightness(1) invert(0)');
			$('.grass img').css('transition', '3s');
			$('.fire img').css('filter', 'brightness(1) invert(0)');
			$('.fire img').css('transition', '3s');
			$('.water img').css('filter', 'brightness(1) invert(0)');
			$('.water img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
		}, 12000);

		setTimeout(function () {
			$('.grass img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.fire img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.water img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass img').addClass('animated');
			$('.grass img').addClass('tada');
			$('.fire img').addClass('animated');
			$('.fire img').addClass('tada');
			$('.water img').addClass('animated');
			$('.water img').addClass('tada');
		}, 14500);

		setTimeout(function () {
			$(function () {
				$('.element').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
		}, 16000);

		setTimeout(function () {
			$('.second').css('background-color', 'white');
			$('.grass img').removeClass('animated');
			$('.grass img').removeClass('tada');
			$('.fire img').removeClass('animated');
			$('.fire img').removeClass('tada');
			$('.water img').removeClass('animated');
			$('.water img').removeClass('tada');
			$('#backgroundMusic').animate({ volume: .2 }, 1000);
		}, 20000);

		setTimeout(function () {
			$('.element').hide();
			$('.evolveBtn').fadeIn(1000);
			$('h2').css('opacity', '1');
			$('h3').css('opacity', '1');
			$.fn.fullpage.setAllowScrolling(true);
		}, 21000);
	});

	$('#evolve2').click(function () {
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({ volume: 0 }, 1500);
		$('.element2').css('color', 'black');
		$('.element2').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function () {
			$('.element2').show();
			$('.element2').css('color', 'white');
			$('.element2').css('transition', '2s');
			$(function () {
				$('.element2').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);

		setTimeout(function () {
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);

		setTimeout(function () {
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
		}, 10000);

		setTimeout(function () {
			$('.grass2 img').css('filter', 'brightness(1) invert(0)');
			$('.grass2 img').css('transition', '3s');
			$('.fire2 img').css('filter', 'brightness(1) invert(0)');
			$('.fire2 img').css('transition', '3s');
			$('.water2 img').css('filter', 'brightness(1) invert(0)');
			$('.water2 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
		}, 12000);

		setTimeout(function () {
			$('.grass2 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.fire2 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.water2 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass2 img').addClass('animated');
			$('.grass2 img').addClass('tada');
			$('.fire2 img').addClass('animated');
			$('.fire2 img').addClass('tada');
			$('.water2 img').addClass('animated');
			$('.water2 img').addClass('tada');
		}, 14500);

		setTimeout(function () {
			$(function () {
				$('.element2').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
		}, 16000);

		setTimeout(function () {
			$('.second').css('background-color', 'white');
			$('.grass2 img').removeClass('animated');
			$('.grass2 img').removeClass('tada');
			$('.fire2 img').removeClass('animated');
			$('.fire2 img').removeClass('tada');
			$('.water2 img').removeClass('animated');
			$('.water2 img').removeClass('tada');
			$('#backgroundMusic').animate({ volume: .2 }, 1000);
		}, 20000);

		setTimeout(function () {
			$('.element2').hide();
			$('.evolveBtn').fadeIn(1000);
			$('h2').css('opacity', '1');
			$('h3').css('opacity', '1');
			$.fn.fullpage.setAllowScrolling(true);
		}, 21000);
	});

	$('#evolve3').click(function () {
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({ volume: 0 }, 1500);
		$('.element3').css('color', 'black');
		$('.element3').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function () {
			$('.element3').show();
			$('.element3').css('color', 'white');
			$('.element3').css('transition', '2s');
			$(function () {
				$('.element3').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);

		setTimeout(function () {
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);

		setTimeout(function () {
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
		}, 10000);

		setTimeout(function () {
			$('.grass3 img').css('filter', 'brightness(1) invert(0)');
			$('.grass3 img').css('transition', '3s');
			$('.fire3 img').css('filter', 'brightness(1) invert(0)');
			$('.fire3 img').css('transition', '3s');
			$('.water3 img').css('filter', 'brightness(1) invert(0)');
			$('.water3 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
		}, 12000);

		setTimeout(function () {
			$('.grass3 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.fire3 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.water3 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass3 img').addClass('animated');
			$('.grass3 img').addClass('tada');
			$('.fire3 img').addClass('animated');
			$('.fire3 img').addClass('tada');
			$('.water3 img').addClass('animated');
			$('.water3 img').addClass('tada');
		}, 14500);

		setTimeout(function () {
			$(function () {
				$('.element3').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
		}, 16000);

		setTimeout(function () {
			$('.second').css('background-color', 'white');
			$('.grass3 img').removeClass('animated');
			$('.grass3 img').removeClass('tada');
			$('.fire3 img').removeClass('animated');
			$('.fire3 img').removeClass('tada');
			$('.water3 img').removeClass('animated');
			$('.water3 img').removeClass('tada');
			$('#backgroundMusic').animate({ volume: .2 }, 1000);
		}, 20000);

		setTimeout(function () {
			$('.element3').hide();
			$('.evolveBtn').fadeIn(1000);
			$('h2').css('opacity', '1');
			$('h3').css('opacity', '1');
			$.fn.fullpage.setAllowScrolling(true);
		}, 21000);
	});

	$('#evolve4').click(function () {
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({ volume: 0 }, 1500);
		$('.element4').css('color', 'black');
		$('.element4').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function () {
			$('.element4').show();
			$('.element4').css('color', 'white');
			$('.element4').css('transition', '2s');
			$(function () {
				$('.element4').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);

		setTimeout(function () {
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);

		setTimeout(function () {
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
		}, 10000);

		setTimeout(function () {
			$('.grass4 img').css('filter', 'brightness(1) invert(0)');
			$('.grass4 img').css('transition', '3s');
			$('.fire4 img').css('filter', 'brightness(1) invert(0)');
			$('.fire4 img').css('transition', '3s');
			$('.water4 img').css('filter', 'brightness(1) invert(0)');
			$('.water4 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
		}, 12000);

		setTimeout(function () {
			$('.grass4 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.fire4 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.water4 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass4 img').addClass('animated');
			$('.grass4 img').addClass('tada');
			$('.fire4 img').addClass('animated');
			$('.fire4 img').addClass('tada');
			$('.water4 img').addClass('animated');
			$('.water4 img').addClass('tada');
		}, 14500);

		setTimeout(function () {
			$(function () {
				$('.element4').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
		}, 16000);

		setTimeout(function () {
			$('.second').css('background-color', 'white');
			$('.grass4 img').removeClass('animated');
			$('.grass4 img').removeClass('tada');
			$('.fire4 img').removeClass('animated');
			$('.fire4 img').removeClass('tada');
			$('.water4 img').removeClass('animated');
			$('.water4 img').removeClass('tada');
			$('#backgroundMusic').animate({ volume: .2 }, 1000);
		}, 20000);

		setTimeout(function () {
			$('.element4').hide();
			$('.evolveBtn').fadeIn(1000);
			$('h2').css('opacity', '1');
			$('h3').css('opacity', '1');
			$.fn.fullpage.setAllowScrolling(true);
		}, 21000);
	});

	$('#evolve5').click(function () {
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({ volume: 0 }, 1500);
		$('.element5').css('color', 'black');
		$('.element5').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function () {
			$('.element5').show();
			$('.element5').css('color', 'white');
			$('.element5').css('transition', '2s');
			$(function () {
				$('.element5').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);

		setTimeout(function () {
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);

		setTimeout(function () {
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
		}, 10000);

		setTimeout(function () {
			$('.grass5 img').css('filter', 'brightness(1) invert(0)');
			$('.grass5 img').css('transition', '3s');
			$('.fire5 img').css('filter', 'brightness(1) invert(0)');
			$('.fire5 img').css('transition', '3s');
			$('.water5 img').css('filter', 'brightness(1) invert(0)');
			$('.water5 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
		}, 12000);

		setTimeout(function () {
			$('.grass5 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.fire5 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.water5 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass5 img').addClass('animated');
			$('.grass5 img').addClass('tada');
			$('.fire5 img').addClass('animated');
			$('.fire5 img').addClass('tada');
			$('.water5 img').addClass('animated');
			$('.water5 img').addClass('tada');
		}, 14500);

		setTimeout(function () {
			$(function () {
				$('.element5').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
		}, 16000);

		setTimeout(function () {
			$('.second').css('background-color', 'white');
			$('.grass5 img').removeClass('animated');
			$('.grass5 img').removeClass('tada');
			$('.fire5 img').removeClass('animated');
			$('.fire5 img').removeClass('tada');
			$('.water5 img').removeClass('animated');
			$('.water5 img').removeClass('tada');
			$('#backgroundMusic').animate({ volume: .2 }, 1000);
		}, 20000);

		setTimeout(function () {
			$('.element5').hide();
			$('.evolveBtn').fadeIn(1000);
			$('h2').css('opacity', '1');
			$('h3').css('opacity', '1');
			$.fn.fullpage.setAllowScrolling(true);
		}, 21000);
	});

	$('#evolve6').click(function () {
		$.fn.fullpage.setAllowScrolling(false);
		var click = document.getElementById('click');
		click.play();
		var background = document.getElementById('backgroundMusic');
		$('#backgroundMusic').animate({ volume: 0 }, 1500);
		$('.element6').css('color', 'black');
		$('.element6').css('transition', '2s');
		$('h2').css('opacity', '0');
		$('h2').css('transition', '2s');
		$('h3').css('opacity', '0');
		$('h3').css('transition', '2s');
		$('.second').css('background-color', 'black');
		$('.second').css('transition', '2s');
		$('.evolveBtn').fadeOut(1000);

		setTimeout(function () {
			$('.element6').show();
			$('.element6').css('color', 'white');
			$('.element6').css('transition', '2s');
			$(function () {
				$('.element6').typed({
					strings: ['What? Everyone is evolving!'],
					typeSpeed: 20
				});
			});
		}, 1000);

		setTimeout(function () {
			var evolve = document.getElementById('evolveMusic');
			evolve.play();
		}, 3000);

		setTimeout(function () {
			$('.second').css('opacity', '0');
			$('.second').css('transition', '1s');
		}, 10000);

		setTimeout(function () {
			$('.grass6 img').css('filter', 'brightness(1) invert(0)');
			$('.grass6 img').css('transition', '3s');
			$('.fire6 img').css('filter', 'brightness(1) invert(0)');
			$('.fire6 img').css('transition', '3s');
			$('.water6 img').css('filter', 'brightness(1) invert(0)');
			$('.water6 img').css('transition', '3s');
			$('.second').css('opacity', '1');
			$('.second').css('transition', '2s');
		}, 12000);

		setTimeout(function () {
			$('.grass6 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.fire6 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.water6 img').css('filter', 'drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black)');
			$('.grass6 img').addClass('animated');
			$('.grass6 img').addClass('tada');
			$('.fire6 img').addClass('animated');
			$('.fire6 img').addClass('tada');
			$('.water6 img').addClass('animated');
			$('.water6 img').addClass('tada');
		}, 14500);

		setTimeout(function () {
			$(function () {
				$('.element6').typed({
					strings: ['Congratulations! Everyone evolved!'],
					typeSpeed: 20
				});
			});
		}, 16000);

		setTimeout(function () {
			$('.second').css('background-color', 'white');
			$('.grass6 img').removeClass('animated');
			$('.grass6 img').removeClass('tada');
			$('.fire6 img').removeClass('animated');
			$('.fire6 img').removeClass('tada');
			$('.water6 img').removeClass('animated');
			$('.water6 img').removeClass('tada');
			$('#backgroundMusic').animate({ volume: .2 }, 1000);
		}, 20000);

		setTimeout(function () {
			$('.element6').hide();
			$('.evolveBtn').fadeIn(1000);
			$('h2').css('opacity', '1');
			$('h3').css('opacity', '1');
			$.fn.fullpage.setAllowScrolling(true);
		}, 21000);
	});
});