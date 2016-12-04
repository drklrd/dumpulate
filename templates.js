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
		return word.toLowerCase();
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

	var attributesToCheck = ['name', 'type', 'placeholder','ng-model'];

	for(var attr=0;attr<attributesToCheck.length;attr++){
		var attribute = attributesToCheck[attr];
		if (entity.getAttribute(attribute) && entity.getAttribute(attribute).toLowerCase().indexOf(against) !== -1) {
			match = true;
			break;
		}
	}

	return match;

}

function expressionMatches(entity, against) {

	var matchAgainst = ['username', 'name','url','email'];

	var match = {
		status : false,
		in : undefined
	};

	for(var match=0;match<matchAgainst.length;match++){
		if (checkMatch(entity, matchAgainst[match])) {
			match = {
				status : true,
				in : matchAgainst[match]
			}
			break;
		}
	}

	return match.status ? templates[match.in+'Generator']() : templates.wordCreator();

	


}