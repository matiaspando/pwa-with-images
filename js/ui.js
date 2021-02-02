document.addEventListener('DOMContentLoaded', function () {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });
});

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');



// Get access to the camera!
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  // Not adding `{ audio: true }` since we only want video now
  navigator.mediaDevices.getUserMedia
    ({
      video: {
        facingMode: {
          exact: 'environment'
        }
      }
    }).then(function (stream) {
      //video.src = window.URL.createObjectURL(stream);
      video.srcObject = stream;
      video.play();
    });
} else {
  console.log('Hay un error')
  console.log('navigator.mediaDevices', navigator.mediaDevices)
  console.log('navigator.mediaDevices.getUserMedia', navigator.mediaDevices.getUserMedia)
}

// Trigger photo take
document.getElementById("snap").addEventListener("click", function () {
  console.log('Smile!')
  context.drawImage(video, 0, 0, 160, 120);
});