var cheerio = require('cheerio');
var fs = require('fs');


datafiles = fs.readdirSync('./lexingtonma');

for (var i = 1; i < datafiles.length; i++) {
	contents = fs.readFileSync('./lexingtonma/'+datafiles[i], 'utf8');
	//var $ = cheerio.load(contents);
	//$('.mealgroup.breakfast #bakery-station ul .item-menu-name').each(function(object) {
//		//console.log($(this).text());
//		station.items.push($(this).text())
//	});

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