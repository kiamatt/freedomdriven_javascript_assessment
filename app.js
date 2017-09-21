//---------------------------
//  Section 1
//---------------------------


// 1. Make an ajax call to openweathermap.org. Use their documentation to find out how to query their api.
// 2. Use the appid 8690974851e3f54d7ce53bc8c6738558
// 3. Make the API return a 5-day forecast for any city, with JSON as the mode and imperial as the units
// 4. Log the result to the console
// 5. Look for the description property for each day in the forecast and log that to the console as well


//---------------------------
//  Place Section 1 Code Here
//---------------------------


$.ajax({
	'url': 'http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=8690974851e3f54d7ce53bc8c6738558&mode=json&cnt=5&units=imperial',
	'method': 'get',
	'success': function(data) {
		console.log(data);
		$.each(data.list, function(i, item) {
			console.log(item.weather[0].description);
		});
	}
})


//---------------------------
//  End of Section 1 Code
//---------------------------




//---------------------------
//  Section 2
//---------------------------

1. 


//---------------------------
//  Place Section 2 Code Here
//---------------------------




//---------------------------
//  End of Section 2 Code
//---------------------------