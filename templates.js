var templates = {
	firstNames: ['John', 'Harry', 'Prince', 'Walter', 'Frodo', 'Samwise', 'Legolas'],
	lastNames: ['Potter', 'Bright', 'Baggins', 'Gamgee'],
	userNames: ['dragon', 'potter', 'philosopher', 'smeagol', 'gandalf', 'elf', 'morgan', 'thechoosenman', 'drklrd', 'curious9'],
	commons: 'ABCDEFGHIJKLMNOPQRSTUVWZYZ',
	urls: ['google', 'middleearth', 'theonering', 'drklrd', 'sauron', 'shire'],
	domains: ['com', 'org', 'net'],
	emails: ['gmail', 'hotmail', 'yahoo'],
	wordCreator: function(length) {
		var wordLength = length || 6;
		var word = "";
		for (var len = 0; len < wordLength; len++) {
			word = word + this.commons[this.randomNumber(this.commons.length)];
		}
		return word;
	},
	randomNumber: function(length) {
		return Math.floor(Math.random() * length);
	},
	randomPicking: function(choices) {
		return Math.floor(Math.random() * choices.length);
	},
	nameGenerator: function() {
		return this.firstNames[this.randomPicking(this.firstNames)] + ' ' + this.lastNames[this.randomPicking(this.lastNames)]
	},
	usernameGenerator: function() {
		return this.userNames[this.randomPicking(this.userNames)];
	},
	urlGenerator: function() {
		return 'www.' + this.urls[this.randomPicking(this.urls)] + '.' + this.domains[this.randomPicking(this.domains)]
	},
	emailGenerator: function() {
		return this.wordCreator(5) + '@' + this.emails[this.randomPicking(this.emails)] + '.' + this.domains[this.randomPicking(this.domains)]
	}
}

function checkMatch(entity, against) {

	var match = false;

	var attributesToCheck = ['name', 'type', 'placeholder'];

	attributesToCheck.forEach(function(attribute) {
		if (entity[attribute] && entity[attribute].toLowerCase().indexOf(against) !== -1) {
			match = true;
		}
	})

	return match;

}

function expressionMatches(entity, against) {

	if (checkMatch(entity, 'username')) {
		return templates.usernameGenerator();
	} else if (checkMatch(entity, 'name')) {
		return templates.nameGenerator();
	} else if (checkMatch(entity, 'url')) {
		return templates.urlGenerator();
	} else if (checkMatch(entity, 'email')) {
		return templates.emailGenerator();
	} else {
		return templates.wordCreator();
	}


}