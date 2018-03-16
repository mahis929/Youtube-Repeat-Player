console.log("Background.js has loaded!!");
//********REDUNDANT METHOD for resetting the background color*********************


var active_url = "", last_active_url = "";
chrome.tabs.onActiveChanged.addListener(function(tabID, selectInfo) {
	console.log("Active tab changed!!");
	var params = {
	  audible : true,
	  currentWindow : true
	}
	chrome.tabs.query(params, gotTabs);
	function gotTabs(tabs) {
		if(tabs.length != 1) {
			for(let j = 0; j < tabs.length; j++) {
				if(tabs[j].active)
					active_url = tabs[j].url;
			}
			if(active_url !== "")
				last_active_url = active_url;
			for(let i = 0; i < tabs.length; i++) {
				let acv;
				let msg = {
					value : "content",
			        url : tabs[i].url,
			        active: acv
			    };    
				chrome.tabs.sendMessage(tabs[i].id, msg, function(response) {
					console.log("Message sent to :" + tabs[i].title);
				});		  		
	 		}
		}
	}
});



chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
	if(request.value === 'bg') {			
		console.log("Message di maa di from popup.js!!");
	}
});

(function() {
	
});


