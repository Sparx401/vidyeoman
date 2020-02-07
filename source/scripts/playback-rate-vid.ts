const video = document.getElementsByTagName('video').item(0) as HTMLVideoElement

chrome.runtime.onMessage.addListener(function(message) {
	if(!!message.playbackRate) {
		video.playbackRate = message.playbackRate
	}
})