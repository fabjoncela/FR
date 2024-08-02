document.addEventListener('DOMContentLoaded', (event) => {
  const imgElement = document.querySelector('.rick');
  const videoElement = document.createElement('video');

  videoElement.setAttribute('width', '100%');
  videoElement.setAttribute('controls', '');
  videoElement.setAttribute('autoplay', '');
  videoElement.setAttribute('loop', '');
  videoElement.setAttribute('muted', '');  // Mute the video to allow autoplay
  videoElement.innerHTML = `
    <source src="./rickroll.mp4" type="video/mp4">
    Your browser does not support the video tag.
  `;

  imgElement.parentNode.replaceChild(videoElement, imgElement);

  // Programmatically unmute after starting
  videoElement.addEventListener('canplay', () => {
    videoElement.muted = false;
  });
});
