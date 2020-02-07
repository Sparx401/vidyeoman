// Set references to buttons and inputs
const popOutBtn = document.getElementById('pop-out-vid-btn') as HTMLButtonElement

const playBackRangeInput = document.getElementById('vid-playback-input') as HTMLInputElement
const playbackRateOutput = document.getElementById('playbackRate') as HTMLOutputElement
const playbackRateSubmitBtn = document.getElementById('vid-playback-submit-btn') as HTMLButtonElement
const resetPlaybackSpeedBtn = document.getElementById('vid-reset-playback-submit-btn') as HTMLButtonElement

// Initially set output element to range value
playbackRateOutput.value = playBackRangeInput.value

// Set up the listener to always update the output element when range value changes
playBackRangeInput.oninput = function() {
	playbackRateOutput.value = playBackRangeInput.value
}

// Executes the PiP request script
popOutBtn.addEventListener('click', function(ev) {

	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		const currentTab = tabs[0]
		chrome.tabs.executeScript(currentTab.id, { file: './scripts/pop-vid.js' })
	})

})

// Sends data message containing a playback rate value to the content script
playbackRateSubmitBtn.addEventListener('click', function(ev) {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		const currentTab = tabs[0]

		chrome.tabs.sendMessage(currentTab.id, { playbackRate: playBackRangeInput.valueAsNumber })
	})
})

// Sends data message to reset playback rate to 1 and updates the playback speed controls
resetPlaybackSpeedBtn.addEventListener('click', function(ev) {
	playBackRangeInput.value = '1'
	playbackRateOutput.value = playBackRangeInput.value

	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		const currentTab = tabs[0]

		chrome.tabs.sendMessage(currentTab.id, { playbackRate: 1 })
	})
})