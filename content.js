console.log("YTR content.js has loaded");

var interval_id, div1, div2;
var hist, playlists, starred;
//listens for message from background.js
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
<<<<<<< HEAD
	console.log("BrowserAction clicked, Music player loaded!!");
	var body = document.getElementsByTagName('body');
	var div = document.createElement('div');
	div.setAttribute("id", "yrp-player");
	div.style.zIndex = "99999";
	div.style.position = "relative";
	div.style.float = "right";
	div.innerHTML = '<div class="sidebar" style="right: -300px;width:200px;height:100vh;background:#262626;transition:0.5s;padding:20px;box-sizing:border-box;"> <div style="font-size:20px;text-align:center;"> <form> <label for="strt-point">Starting point</label><br> <input type="time" name="strt-point" id="strt-point" step="2" value="00:00:00"><br><br> <label for="end-point">Ending point</label><br> <input type="time" name="end-point" id="end-point" step="2" value="00:00:00"> <br><br> <input type="submit" value="Submit"> </form> </div> <div id="recents" style="background:#0E0B70; height:200px; margin:10px -10px 0px -10px;"><h3 style="text-align:center">Recently Played</h3></div> </div>';
	body[0].appendChild(div);
	/*var head = document.getElementsByTagName('head')[0];

	/*var css = '.menu-icon img{top:2px;height:50px;right:0;position:fixed;z-index:2;transition:0.5s}.menu-icon img.active{right:300px}.sidebar{position:fixed;top:0;right:-300px;width:300px;height:100vh;background:#262626;transition:0.5s;padding:20px;box-sizing:border-box}.sidebar.active{right:0}.sidebar .menu{margin:0;padding:40px 0px}.sidebar .menu li{list-style:none;font-family:sans-serif}.sidebar .menu li a{display:block;padding:10px 0px;text-transform:uppercase;color:#fff;font-size:18px;text-decoration:none}.sidebar .menu li a:hover{background:#fc2827;color:#fff}.menu-icon.active span{position:absolute;width:calc(100% - 16px);top:calc(50% - 8px)}.menu-icon.active span:nth-child(1){transform:rotate(45deg)}.menu-icon.active span:nth-child(3){transform:rotate(-45deg)}.menu-icon.active span:nth-child(2){display:none}';
	var s = document.createElement('style');
	s.setAttribute("type", "text/css");
	s.setAttribute("id", "yrp1");
	if (s.styleSheet) {   // IE
        s.styleSheet.cssText = css;
    } else {                // the world
        s.appendChild(document.createTextNode(css));
    }

	var script = document.createElement('script');
	script.innerHTML = '$(document).ready(function(){$(".menu-icon").click(function(){$(".menu-icon img").toggleClass("active");$(".sidebar").toggleClass("active");});})';*/

	/*var script1 = document.createElement('script');
	script1.src = '"jquery-3.3.1.min.js"';*/

	
	/*var script = document.createElement('script');
	script.setAttribute("type", "text/javascript");
	script.innerHTML = '$(document).ready(function(){$(".menu-icon").click(function(){$(".menu-icon img").toggleClass("active");});$(".menu-icon").click(function(){$(".sidebar").toggleClass("active");});});';
	head.appendChild(script1);
	head.appendChild(script);
	/*body[0].appendChild(script1);
	body[0].appendChild(script);*/
}
=======
	
	if(message.value) {
		console.log("BrowserAction clicked, Music player loaded!!");
		console.log("message");
		hist = message.history;
		playlists = message.playlists;
		starred = message.starred;			
		console.log(hist);
		console.log(playlists);
		console.log(starred);

		var body = document.getElementsByTagName('body');
		/*
		MUSIC PLAYER template 1
		*/
		div1 = createPlayer1Template();
		body[0].appendChild(div1);

		//document.getElementById('submit').addEventListener('click', Player1Control);

		function Player1Control() {
			let song = {}; //stores the current video
			//let start = document.getElementById('starting-point').value;
			//let stop = document.getElementById('stopping-point').value;
			let start = 10;
			let stop = 100;
			var vid = document.getElementsByTagName('video');
			var vid_length = vid[0].duration;
			var vid_title = document.querySelector('h1.title').innerText;
			/*
			Serach song in history, if found only increase the number of plays, 
			modify the start and stop time to the new one.
			If not found add song to history, and set plays = 1;
			*/
			var recent_titles = listTitles(hist);
			if(recent_titles.indexOf(vid_title) != -1) { //song found in history
				let song_index = recent_titles.find(vid_title);
				let song = hist[song_index];
				song.startTime = start;
				song.stopTime = stop;
				song.plays += 1;
				hist[song_index] = song;
			}
			else { //when song not found in history
				song.title = vid_title;
				song.startTime = start;
				song.stopTime = stop;
				song.url = vid[0].baseURI;
				song.plays = 1;
				hist.push(song);
			}
			console.log(song); //for debug prints out the updated song

			//check in small intervals the current time of the video and repeat
			interval_id = setInterval(function() { repeater(start, stop); }, 300);
			div1.style.display = "none";
			div2 = createPlayer2Template();
			body[0].appendChild(div2);
		}
		Player1Control();
	}

}

/*
functions used in gotMessage()
*/
function repeater(start, stop) {
	let vid = document.getElementsByTagName('video');
	var vid_curr = vid[0].currentTime;
	if(vid[0].currentTime >= stop)
		vid[0].currentTime = start;
	else if(vid[0].currentTime < start)
		vid[0].currentTime = start;
}


function createPlayer1Template() {
	let div = document.createElement('DIV');
	div.setAttribute("id", "yrp-player1");
	div.style.zIndex = "1000";
	div.innerHTML = "<h1 style = 'color:red;'>HJADJHASGDJ</h1>";
	return div;
}

function createPlayer2Template() {
	let div = document.createElement('DIV');
	div.setAttribute("id", "yrp-player2");
	div.style.zIndex = "1000";
	div.innerHTML = "<h1 style = 'color:red;'>HJADJHASGDJ</h1>";
	return div;
}

function listTitles(hist) {
	var titles = [];
	for(let i = 0; i < hist.length; i++) {
		titles.push(hist[i][title]);
	}
	return titles;
}
>>>>>>> a4938882d3a0bc2149235e3f51e7eda7416f6b87
