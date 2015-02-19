var DOM = document.getElementsByTagName("*"),
		num = DOM.length,
		attr = "display-visible",
		i;

for(i = 0;i < num;i++){
	if(
		DOM[i].nodeName === "HEAD" ||
		DOM[i].nodeName === "META" ||
		DOM[i].nodeName === "LINK" ||
		DOM[i].nodeName === "TITLE" ||
		DOM[i].nodeName === "STYLE" ||
		DOM[i].nodeName === "SCRIPT" ||
		DOM[i].nodeName === "NOSCRIPT"
	){
		continue;
	}
	if(!$(DOM[i]).is(':visible')){
		DOM[i].style.display = "block";
		DOM[i].setAttribute(attr, "true");
	}else if(DOM[i].getAttribute(attr)){
		DOM[i].style.display = "none";
		DOM[i].removeAttribute(attr);
	}
}
