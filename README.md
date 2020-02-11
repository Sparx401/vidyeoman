# Vidyeoman

A web browser extension that allows for picture-in-picture and wider ranges of playback speeds for video elements.

## Installation

1. Pull down this repo

2. Run `npm install`

3. Run `npm start` to start the initial build; generated code will be placed in the `/public` folder

4. Open a new tab in your browser and navigate to `chrome://extensions` or `brave://extensions` depending on what browser you're using

5. Click on _Load unpacked_ and select the `/public` folder

6. You can check to make sure the extension is working by navigating to a webpage that has a video (like Bitchute or YouTube), clicking the extension icon, and seeing if the purple menu shows up

7. This step isn't part of the installation/build process but it should be noted that the _build_ script command in the package.json file is solely used for packaging up the extension for distribution at the Chrome Web Store

## To Do List

- Update playback rate on page action based on the current settings of the video
- Toggle Picture-in-Picture button based on the state of the video
- Clean up and better organize the code
- Find alternate way to zip up the files when building for distribution; the ParcelJS plugin used here creates a zip file even during development
