var http = require('http');

var fs = require('fs');

//cheerio for parsing html DOM
var cheerio = require('cheerio');

//datafiles = fs.readdirSync('./lexingtonma');


//iterate over each property which is stored in a unique file

//Start at index 1 because first is .file

/*
	Main() 
	-->URL
	^ Scraper 
 url|	-->HTML
	|		Parser
DB<--Data<--

*/


var incomplete = true;
var counter = 0;
var next = true;
while (incomplete) {
	if (next == true) {
		callback = function(response) {
			var str = '';

			//another chunk of data has been recieved, so append it to `
			//str 
			response.on('error', function(chunk) {
				counter++;
				next = true;
			});
			response.on('data', function(chunk) {
				str += chunk;
			});

			//the whole response has been recieved, so we just print it out here
			response.on('end', function() {
				var $ = cheerio.load(str);
				var heatingType = $('td').map(function() {
					if ($(this).text() === 'Heat Fuel') {
						return $(this).next().text();
					}
				});

				if (heatingType == undefined)
					heatingType = "UNKNOWN";


				if ($('#MainContent_lblAddr1').html() != null)
					var address = $('#MainContent_lblAddr1').html().replace("<br>", " ");

				console.log(address + ' ' + heatingType);
			});
		}

		http.request('http://gis.vgsi.com/lexingtonma/Parcel.aspx?pid=' + counter, callback).end();
	}

}



/*


var addressData = {}
var input = fs.createReadStream('output.txt');
readLines(input, parseData);

function readLines(input, parseData) {
	var remaining = '';

	input.on('data', function(data) {
		remaining += data;
		var index = remaining.indexOf('\n');
		var last = 0;
		while (index > -1) {
			var line = remaining.substring(last, index);
			last = index + 1;
			parseData(line);
			index = remaining.indexOf('\n', last);
		}

		remaining = remaining.substring(last);
	});

	input.on('end', function() {
		if (remaining.length > 0) {
			parseData(remaining);
		}
		//console.log(addressData);
		SortData(addressData);
	});
}

function parseData(data) {

	var street = data.substr(0, data.indexOf("\t") - 1);
	var type = data.substr(data.indexOf("\t") + 1, data.length);

	addressData[street] = type;

}



function SortData(addressData) {
	var addresses = Object.keys(addressData);
	var streetNames = Object.keys(addressData);

	function streetArrayElements(element, index, array) {
		streetNames[index] = element
	}

	streetNames.forEach(streetArrayElements);
	//sort street names
	addresses.sort(function(a, b) {
		var anum = parseInt(a.substr(0, a.indexOf(" ")));
		var bnum = parseInt(b.substr(0, b.indexOf(" ")));

		a = a.substr(a.indexOf(" ") + 1, a.length);
		b = b.substr(b.indexOf(" ") + 1, b.length);
		if (a < b)
			return -1;
		if (a > b)
			return 1;
		if (anum < bnum)
			return -1;
		if (anum > bnum)
			return 1;
		return 0;


	});

	for (var i = 0; i < addresses.length; i++)
		console.log(addresses[i] + ": " + addressData[addresses[i]])
}
*/