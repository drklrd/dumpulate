(function() {

	function valueAssosicate(entity) {
		var entityType = entity.nodeName;
		switch (entityType) {
			case "INPUT":
				return entity ? expressionMatches(entity) : templates.wordCreator();
				break;
			default:
		}
	}

	function validator(entity) {

		function insertAfter(referenceNode, newNode) {
			if (referenceNode.nextSibling) {
				referenceNode.parentNode.removeChild(referenceNode.nextSibling)
			}
			referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
		}

		function validityHighlighter(entity, message) {
			entity.style.borderColor = "red";
			var el = document.createElement("span");
			el.innerHTML = "<b>" + message + "</b>";
			insertAfter(entity, el);
		}

		if (!entity.name) {
			validityHighlighter(entity, "This field is missing NAME attribute");
		}

		if (entity.nodeName === "INPUT" && !entity.getAttribute("type")) {
			validityHighlighter(entity, "This INPUT field is missing type attribute.Defaults to text");
		}
	}

	var forms = document.forms;

	if (!forms.length) {
		alert('No Form element(s) found ! Make sure the input fields are within form elements.');
		return;
	}

	for (var form = 0; form < forms.length; form++) {
		var tags = ['input', 'select', 'textarea'];
		var Fields = {};
		(function tagSelector() {
			tags.forEach(function(tag) {
				Fields[tag + 'Fields'] = document.forms[form].getElementsByTagName(tag).length ? document.forms[form].getElementsByTagName(tag) : []

			})
		})();
		var radios = {};
		var event = new Event('change');

		if (Fields.inputFields && Fields.inputFields.length) {
			for (field = 0; field < Fields.inputFields.length; field++) {
				var type = Fields.inputFields[field].type;
				if (type) {
					switch (type) {
						case "date":
							var date = {};
							if (Fields.inputFields[field].min) {
								date.min = new Date(Fields.inputFields[field].min).getTime();

							}
							if (Fields.inputFields[field].max) {
								date.max = new Date(Fields.inputFields[field].max).getTime();
							}

							if (!date.min) {
								date.min = new Date().getTime();
							}

							if (!date.max) {
								date.max = date.min + (365 * 24 * 60 * 60 * 1000);
							}
							date.date = Math.floor(Math.random() * (date.max - date.min)) + date.min;
							Fields.inputFields[field].value = moment(date.date).format('YYYY-MM-DD');
							Fields.inputFields[field].dispatchEvent(event);
							validator(Fields.inputFields[field]);
							break;

						case "email":

							Fields.inputFields[field].value = valueAssosicate(Fields.inputFields[field]);
							Fields.inputFields[field].dispatchEvent(event);
							validator(Fields.inputFields[field]);
							break;

						case "text":
							Fields.inputFields[field].value = valueAssosicate(Fields.inputFields[field]);
							Fields.inputFields[field].dispatchEvent(event);
							validator(Fields.inputFields[field]);
							break;

						case "url":

							Fields.inputFields[field].value = "www.google.com";
							Fields.inputFields[field].dispatchEvent(event);
							validator(Fields.inputFields[field]);
							break;

						case "radio":
							if (Fields.inputFields[field].name) {
								if (!radios[Fields.inputFields[field].name]) {
									radios[Fields.inputFields[field].name] = [Fields.inputFields[field]];
								} else {
									radios[Fields.inputFields[field].name].push(Fields.inputFields[field]);
								}

							}
							validator(Fields.inputFields[field]);
							break;

						case "password":
							Fields.inputFields[field].value = "123!pass@#%";
							Fields.inputFields[field].dispatchEvent(event);
							validator(Fields.inputFields[field]);
							break;

						case "number":
							Fields.inputFields[field].value = Math.floor(Math.random() * 1000) ;
							Fields.inputFields[field].dispatchEvent(event);
							validator(Fields.inputFields[field]);
							break;


						default:


					}

				}

			}
		} else {
			Fields.inputFields = [];
		}
		if (Object.keys(radios).length) {
			for (radio in radios) {
				if (radios[radio].length) {
					radios[radio][Math.floor(Math.random() * radios[radio].length)].checked = true;

				}
			}
		}
		if (Fields.selectFields && Fields.selectFields.length) {
			for (field = 0; field < Fields.selectFields.length; field++) {
				Fields.selectFields[field].value = Fields.selectFields[field].options[Math.floor(Math.random() * Fields.selectFields[field].options.length)].value;
				Fields.selectFields[field].dispatchEvent(event);
				validator(Fields.selectFields[field]);
			}
		} else {
			Fields.selectFields = [];
		}
		if (Fields.textareaFields && Fields.textareaFields.length) {
			for (area = 0; area < Fields.textareaFields.length; area++) {
				Fields.textareaFields[area].value = "The one ring to rule them all !"
				Fields.textareaFields[area].dispatchEvent(event);
				validator(Fields.textareaFields[area]);
			}
		} else {
			Fields.textareaFields = [];
		}


	}

})();