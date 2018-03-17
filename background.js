console.log("YTR background.js loaded!!");
var hist = [], playlists = [], starred = [];
/*
history: stores all the recently played songs
playlists: all the playlists created by the user
starred: favourite songs of the users
*/

//listens for click on the browserAction button
//and loads content_script for the current page
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.storage.local.get(["yrp"], function(result) {
		console.log(result);
		let msg = {
			value: true,
			history: hist,
			playlists: playlists,
			starred: starred 
		};
		if(Object.keys(result).length === 0) {
			chrome.tabs.sendMessage(tab.id, msg);
		}
		else {
			hist = result["yrp"]["history"];
			playlists = result["yrp"]["playlists"];
			starred = result["yrp"]["starred"];	
			chrome.tabs.sendMessage(tab.id, msg);	
		}
		
	});
});

