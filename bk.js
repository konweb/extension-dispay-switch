var count = 2;
function iconChange(tab){
	chrome.browserAction.setIcon({path:'icon_0' + count + '.png', tabId:tab.id});
	if(count === 2){
		count = 1;
	}else{
		count = 2;
	}
}

chrome.browserAction.onClicked.addListener(function(tab) {
	// chrome.tabs.insertCSS(null, {file: "style.css"});
	chrome.tabs.executeScript(tab.id, {file: "jquery_2.1.3.min.js"}, function(){
		chrome.tabs.executeScript(tab.id, {file: "app.js"});
	});
	iconChange(tab);
});