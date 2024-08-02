document.addEventListener('DOMContentLoaded', (event) => {
    const imgElement = document.querySelector('.rick');
    const videoElement = document.createElement('video');
  
    videoElement.setAttribute('width', '100%');
    videoElement.setAttribute('controls', '');
    videoElement.setAttribute('autoplay', '');
    videoElement.innerHTML = `
      <source src="./rickroll.mp4" type="video/mp4">
      Your browser does not support the video tag.
    `;
  
    imgElement.parentNode.replaceChild(videoElement, imgElement);
  });
  