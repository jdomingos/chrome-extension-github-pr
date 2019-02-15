var expression = /https:\/\/github.com\/[^\/]+\/[^\/]+\/pull\/\d\/files/gi;
var regex = new RegExp(expression);

var container = document.getElementsByClassName("new-discussion-timeline")[0]; 

var urlMatch = window.location.href.match(regex);

if (container && urlMatch) { 
    container.style.cssText = "width: auto; margin-left: 20px; margin-right: 20px"; 
} else if (container) {
	container.style.cssText = "";
}
