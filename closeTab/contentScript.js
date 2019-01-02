document.body.addEventListener('closeTabMessage', function () {
	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
	  // alert(response.farewell);
	});
});