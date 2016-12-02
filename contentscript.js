var forms = document.forms;

for (var form = 0; form < forms.length; form++) {

	var inputFields = document.forms[form].getElementsByTagName("input");
	var selectFields = document.forms[form].getElementsByTagName("select");
	var textAreas = document.forms[form].getElementsByTagName("textarea");

	var radios = {};
	var event = new Event('change');

	function validator(entity) {

		function insertAfter(referenceNode, newNode) {
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}



		if (!entity.checkValidity() || !entity.name) {
			entity.style.borderColor = "red";
			var el = document.createElement("span");
			el.innerHTML = "<b>This field has failed validation !</b>";
			insertAfter(entity, el);
		}
	}

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
						inputFields[field].dispatchEvent(event);
						validator(inputFields[field]);
						break;

					case "email":

						inputFields[field].value = "test@google.com";
						inputFields[field].dispatchEvent(event);
						validator(inputFields[field]);
						break;

					case "text":
						inputFields[field].value = "Test";
						inputFields[field].dispatchEvent(event);
						validator(inputFields[field]);

						break;

					case "url":

						inputFields[field].value = "www.google.com";
						inputFields[field].dispatchEvent(event);
						validator(inputFields[field]);
						break;

					case "radio":

						if (inputFields[field].name) {
							if (!radios[inputFields[field].name]) {
								radios[inputFields[field].name] = [inputFields[field]];
							} else {
								radios[inputFields[field].name].push(inputFields[field]);
							}
							validator(inputFields[field]);
						}

						break;

					case "password":
						inputFields[field].value = "123!pass@#%";
						inputFields[field].dispatchEvent(event);
						validator(inputFields[field]);
						break;


					default:


				}

			}

		}
	} else {
		inputFields = [];
	}

	if (Object.keys(radios).length) {
		for (radio in radios) {
			if (radios[radio].length) {
				radios[radio][Math.floor(Math.random() * radios[radio].length)].checked = true;

			}
		}
	}


	if (selectFields && selectFields.length) {
		for (field = 0; field < selectFields.length; field++) {
			selectFields[field].value = selectFields[field].options[Math.floor(Math.random() * selectFields[field].options.length)].value;
			selectFields[field].dispatchEvent(event);
			validator(selectFields[field]);
		}
	} else {
		selectFields = [];
	}

	if (textAreas && textAreas.length) {
		for (area = 0; area < textAreas.length; area++) {
			textAreas[area].value = "Spongebob"
			textAreas[area].dispatchEvent(event);
			validator(textAreas[area]);
		}
	} else {
		textAreas = [];
	}


}