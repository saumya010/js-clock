/*
 * Define global variables
*/
let wakeup = 7;
let noon = 12;
let lunch = 14;
let evening = 18;
let nap = 16;

var getTime = function() {
	let today = new Date();
	let hour = today.getHours();
	let minute = today.getMinutes();
	let second = today.getSeconds();

	let hh = hour;
	let dd = 'AM';

	if(hour > 12) {
		hh = hour - 12;
		dd = 'PM';
	}
	if(hh === 0) {
		hh = 12;
	}

	minute = minute < 10 ? "0"+minute : minute;
	second = second < 10 ? "0"+second : second;

	document.getElementById('current-time').innerHTML = hh+":"+minute+":"+second+" "+dd+"!";

}

var changeImage = function() {
	let image = 'https://i.chzbgr.com/full/9281859072/hA9F27B5B/you-sleep-for-4-hours-but-it-feels-like-8-the-laws-of-time-are-mine-00000-and-they-will-obey-me';
	let clockImage = document.getElementById('clock-image');
	let now = new Date().getHours();

	if(now == wakeup) {
		image = 'https://sayingimages.com/wp-content/uploads/i-made-you-some-toast-good-morning-meme.jpg';
	}
	else if (now == lunch) {
		image = 'https://i.chzbgr.com/full/9189631744/hD33A3FCF/jim-halpert-meme-with-the-caption-when-its-time-for-lunch-but-you-already-ate-your-lunch';
	}
	else if (now < noon) {
		image = 'https://img.memecdn.com/at-noon-we-ride_o_1247211.jpg';
	}
	else if (now == nap) {
		image = 'https://meme.xyz/uploads/posts/t/l-39378-when-you-wake-up-from-a-nap-and-dont-know-what-planet-youre-on.jpg';
	}
	else if (now >= evening && now < 22) {
		image = 'https://memegenerator.net/img/instances/68464779.jpg';
	}
	else if (now > 22) {
		image = 'https://www.funnymemess.com/wp-content/uploads/2018/05/5-min-27-267x300.jpg';
	}
	clockImage.src = image;
	getTime();
}
changeImage();
var oneSecond = 1000;
setInterval(changeImage, oneSecond);

// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("clock-wake-time");

var wakeUpEvent = function()
{
    wakeup = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("clock-lunch-time");

var lunchEvent = function()
{
    lunch = lunchTimeSelector.value;
	console.log('lunch ki value change ki '+ lunch);
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("clock-nap-time");

var napEvent = function()
{
    nap = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
