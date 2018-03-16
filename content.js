console.log("Smart pause content.js loaded");

var reg1 = /soundcloud/g;
var reg2 = /youtube/g;
var reg3 = /asd/g;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.value === 'content') {			
		console.log("Message received from background.js!!");
		console.log(request.url);
		if(reg1.test(request.url)) {
			let btn = document.getElementsByClassName('playControl');
			if(!request.active)
				btn[0].click();
			else if(request.active)
				btn[0].click();
		}
		else if(reg2.test(request.url)) {
			let vid = document.getElementsByTagName('video');
			if(!request.active)
				vid[0].pause();
			else
				vid[0].play();
		}	
		else if(reg3.test(request.url)) {
			let vid = document.getElementsByTagName('video');
			if(!request.active)
				vid[0].pause();
			else
				vid[0].play();
		}
	}
});
