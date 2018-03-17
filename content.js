console.log("YTR content.js has loaded");

//listens for message from background.js
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log("BrowserAction clicked, Music player loaded!!");
	var body = document.getElementsByTagName('body');
	
	var div = document.createElement('DIV');
	div.setAttribute("id", "yrp-player");
	div.style.zIndex = "1000";
	div.innerHTML = "<h1 style = 'color:red;'>HJADJHASGDJ</h1>";

	body[0].appendChild(div);
}