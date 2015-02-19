var attr = "ex-display-visible",
		i,DOM,num;

if($(document).find("[" + attr + "]")[0]){
	DOM = $(document).find("[" + attr + "]");
}else{
	DOM = $(document).find(":hidden");
}
num = DOM.length;

for(i = 0;i < num;i++){
	if(
		DOM[i].nodeName === "HEAD"
		|| DOM[i].nodeName === "META"
		|| DOM[i].nodeName === "LINK"
		|| DOM[i].nodeName === "TITLE"
		|| DOM[i].nodeName === "STYLE"
		|| DOM[i].nodeName === "SCRIPT"
		|| DOM[i].nodeName === "NOSCRIPT"
		|| DOM[i].nodeName === "IFRAME" && String($(DOM[i])[0].src).match(/chrome-extension:/)
	){
		continue;
	}
	// console.log(DOM[i]);
	if(!$(DOM[i]).is(':visible')){
		if($(DOM[i]).parents("[" + attr + "]").attr(attr) === "false"){
			continue;
		}
		DOM[i].style.display = "block";
		DOM[i].setAttribute(attr, "true");
	}else{
		if(DOM[i].getAttribute(attr)){
			DOM[i].setAttribute(attr, "false");
			DOM[i].style.display = "none";
		}
	}
}