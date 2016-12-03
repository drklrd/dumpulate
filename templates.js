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

function expressionMatches(entity, against) {

	if (entity.indexOf("username") !== -1) {
		return templates.usernameGenerator();
	} else if (entity.indexOf("name") !== -1) {
		return templates.nameGenerator();
	} else if (entity.indexOf("url") !== -1) {
		return templates.urlGenerator();
	} else if (entity.indexOf("email") !== -1) {
		return templates.emailGenerator();
	} else {
		return templates.wordCreator();
	}


}