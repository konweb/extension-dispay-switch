chrome.browserAction.onClicked.addListener(function(tab) {
	var DOM = document.getElementsByTagName("*");
	var num = DOM.length;
	var i;
	for(i = 0;i < num;i++){
		if(
			DOM[i].nodeName === "HEAD" ||
			DOM[i].nodeName === "META" ||
			DOM[i].nodeName === "TITLE" ||
			DOM[i].nodeName === "STYLE" ||
			DOM[i].nodeName === "SCRIPT" ||
			DOM[i].nodeName === "NOSCRIPT"
		){
			continue;
		}
		alert($(DOM[i]).is(':visible'));
		if(!$(DOM[i]).is(':visible')){
			alert(DOM[i]);
			DOM[i].style.display = "block";
		}
	}
});