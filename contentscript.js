var inputFields = document.getElementsByTagName("input");
var selectFields = document.getElementsByTagName("select");
var textAreas = document.getElementsByTagName("textarea");

var radios={};

if (inputFields && inputFields.length) {
	for (field = 0; field < inputFields.length; field++) {
		var type = inputFields[field].type;
		if (type) {
			switch (type) {

				case "date":
					var date = {};
					if (inputFields[field].min) {
						date.min = new Date(inputFields[field].min).getTime();

					}
					if (inputFields[field].max) {
						date.max = new Date(inputFields[field].max).getTime();
					}

					if (!date.min) {
						date.min = new Date().getTime();
					}

					if (!date.max) {
						date.max = date.min + (365 * 24 * 60 * 60 * 1000);
					}


					date.date = Math.floor(Math.random() * (date.max - date.min)) + date.min;

					inputFields[field].value = moment(date.date).format('YYYY-MM-DD');
					break;

				case "email":

					inputFields[field].value = "test@google.com";
					break;

				case "text":

					inputFields[field].value = "www.google.com";
					break;

				case "url":
					
					inputFields[field].value = "www.google.com";
					break;

				case "radio":

					if(inputFields[field].name){
						if(!radios[inputFields[field].name]){
							radios[inputFields[field].name] = [inputFields[field]];
						}else{
							radios[inputFields[field].name].push(inputFields[field]);
						}
					}

					break;

				default:


			}

		}

	}
}else{
	inputFields = [];
}

// if(Object.keys(radios).length){
// 	for(radio in radios){
// 		if(radios[radio].length){
// 			radios[radio][Math.floor(Math.random()*radios[radio].length)].checked=true;
// 		}
// 	}
// }


if (selectFields && selectFields.length) {
	for (field = 0; field < selectFields.length; field++) {
		selectFields[field].value = selectFields[field].options[Math.floor(Math.random() * selectFields[field].length)].text;
	}
}else{
	selectFields = [];
}

if (textAreas && textAreas.length) {
	for (area = 0; area < textAreas.length; area++) {
		textAreas[area].value = "Who lives in a pineapple under the sea ??? Spongebob squarepants !"
	}
}else{
	textAreas = [];
}


// var validators = inputFields.concat(selectFields,textAreas)

// for (field = 0; field < validators.length; field++) {
// 	if(!validators[field].checkValidity()){
// 		validators[field].style.borderColor="red"
// 	}
	
// }