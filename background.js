chrome.browserAction.onClicked.addListener(function(activeTab) {
	alert(8)
    chrome.tabs.executeScript(null, {file: "contentscript.js"});
});