console.log("YTR content.js has loaded");

var interval_id, div1, div2;
var hist, playlists, starred;
//listens for message from background.js
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
	console.log("BrowserAction clicked, Music player loaded!!");
	var body = document.getElementsByTagName('body');
	var div = document.createElement('div');
	div.setAttribute("id", "yrp-player");
	div.style.zIndex = "99999";
	div.style.position = "relative";
	div.style.float = "right";
	div.innerHTML = '<div class="sidebar" style="right: -300px;width:200px;height:100vh;background:#262626;transition:0.5s;padding:20px;box-sizing:border-box;"> <div style="font-size:20px;text-align:center;"> <label for="strt-point">Starting point</label><br> <input type="number" name="strt-point" id="strt-point" value="0"><br><br> <label for="end-point">Ending point</label><br> <input type="number" name="end-point" id="end-point" value="0"> <br><br> <button id="goyrp">Submit</button> </div> <div id="recents" style="background:#0E0B70; height:200px; margin:10px -10px 0px -10px;"><h3 style="text-align:center">Recently Played</h3></div> </div>';
	body[0].appendChild(div);

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

		document.getElementById('goyrp').addEventListener('click', Player1Control);

		function Player1Control() {
			let song = {}; //stores the current video
			let start = document.getElementById('strt-point').value;
			let stop = document.getElementById('end-point').value;
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
	}
}

/*
functions used in gotMessage()
*/
function repeater(start, stop) {
	let vid = document.getElementsByTagName('video');
	var vid_curr = vid[0].currentTime;
	console.log()
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

