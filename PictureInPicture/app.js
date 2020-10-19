// Selectors
const video = document.querySelector('#video')
const button = document.querySelector('#button')

// Functions
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    video.srcObject = mediaStream
    video.onloadedmetadata = () => {
      video.play()
    }
  }catch (error) {
      console.log(error)
  }
}
// Events
button.addEventListener('click', async () => {
  // Disable the button
  button.disable = true
  // Start the Picture in Picture
  await video.requestPictureInPicture()
  // Enable the button
  button.disable = false
})
// onload
selectMediaStream()
