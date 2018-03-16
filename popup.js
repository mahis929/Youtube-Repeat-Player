console.log("Smart pause popup.js loaded!!");

chrome.runtime.sendMessage({value: "bg"}, function(response){
	console.log("Message sent!!");
});

