# closeTabByJS
chrome extension to close tab by javascript.  

[chrome extension url](https://chrome.google.com/webstore/detail/closetabbyjs/ipokkmbpcicendfjcnlmonfejdbckomm?utm_source=chrome-ntp-icon)


[github link](https://github.com/jdk137/closeTabByJS)

Javacript can not close page in recent version chrome, because it's not safe. But we can close with this extension installed.

## Usage:
```js
	function closeWindow () {
		var event = new Event('closeTabMessage');
		document.body.dispatchEvent(event);
	};
```
Run this  function in javascript, you can close chrome tab now.  


## Warning: 
This extension can only work in  http(s)://localhost or 127.0.0.1,  to show some local demo. But you can edit manifest.json to enlarge it's premission.
Extension sourcecode is in closeTab file.
```js
  "content_scripts": [
    {
      // "matches": ["*://localhost/*", "*://127.0.0.1/*"], // localhost and 127.0.0.1
      "matches": ["*://*/*"], // change it, allow all website
      "js": ["contentScript.js"]
    }
  ]
```

