chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(tab.id, {file: "jquery_2.1.3.min.js"}, function(){
		chrome.tabs.executeScript(tab.id, {file: "app.js"});
	});
});