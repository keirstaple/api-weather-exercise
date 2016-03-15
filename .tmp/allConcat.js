exports.testy = function() {
	document.write('testy');
	return "testy";
};

var testy = require('./../js/scripts.js').testy;

testy();
var apiKey = "da921fa6f90ad30a2be0cfbf0e081c5d";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      console.log(response);
    });
  });
});
