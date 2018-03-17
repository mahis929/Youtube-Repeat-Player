console.log("YTR background.js loaded!!");


//listens for click on the browserAction button
//and loads content_script for the current page
chrome.browserAction.onClicked.addListener(function(tab) {
	let msg = {
      value : true
    }
    chrome.tabs.sendMessage(tab.id, msg);
});

