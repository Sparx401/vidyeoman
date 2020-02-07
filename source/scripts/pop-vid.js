/*
 * We keep this as a .js file since the Picture-in-Picture API isn't stabilized
 * for any browsers just yet
 */

const video = document.getElementsByTagName('video').item(0)

if (video.disablePictureInPicture === false && video.requestPictureInPicture) {
	video.requestPictureInPicture()
		.catch(err => console.err('Vidyeoman: Error occurred with requesting picture-in-picture', err))
}