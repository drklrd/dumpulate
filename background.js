(function(){
	chrome.browserAction.onClicked.addListener(function(activeTab) {
		chrome.tabs.executeScript(null, {file: "templates.js"});
	    chrome.tabs.executeScript(null, {file: "contentscript.js"});
	});
})();