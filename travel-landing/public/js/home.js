// Intersection for play button and youtube player
let tag = document.createElement('script');
let firstScriptTag = document.getElementsByTagName('script')[0];
let player;
let playButton = document.getElementById('play-video');
let pauseButton = document.getElementById('close-video');
let iframeWrapper = document.getElementById('banner-video');
let iframe = document.getElementById('player');

// This code loads the IFrame Player API code asynchronously.

function addTagYoutube() {
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.defer = true;
}

document
  .getElementById('play-video')
  .addEventListener('mouseover', addTagYoutube);

function pause() {
  if (player && player.pauseVideo) {
    player.pauseVideo();
    playButton.classList.remove('hidden');
    pauseButton.classList.remove('block');
    pauseButton.classList.add('hidden');
    iframeWrapper.classList.add('hidden');
  }
}

// he API will call this function when the video player is ready.
function onPlayerReady(event) {
  player = event.target;
  event.target.playVideo();
  playButton.classList.add('hidden');
  pauseButton.classList.remove('hidden');
  pauseButton.classList.add('block');
}

function play() {
  if (!iframe) {
    // Create iframe once loading
    iframe = document.createElement('iframe');
    playButton.classList.add('hidden');
    pauseButton.classList.add('block');
    iframe.allowfullscreen = '';
    iframe.allow =
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.frameborder = '0';
    iframe.id = 'player';
    iframe.class = 'vid';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.title = 'Travel Around VietNam';
    iframe.style = 'border: 0';
    iframe.setAttribute(
      'src',
      'https://www.youtube.com/embed/2QTwk4nJljg?enablejsapi=1'
    );
    iframeWrapper.appendChild(iframe);

    // Initialize player to control when play/pause
    new YT.Player('player', {
      videoId: '2QTwk4nJljg',
      events: {
        onReady: onPlayerReady
      }
    });
    iframe.focus();
  }
  if (player && player.playVideo) {
    player.playVideo();
    iframeWrapper.classList.remove('hidden');
    playButton.classList.add('hidden');
    pauseButton.classList.remove('hidden');
    pauseButton.classList.add('block');
  }
}

// This function creates an <iframe> (and YouTube player)
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);

// Find button send
const sendSalary = document.getElementById('send');
const inputSalary = document.getElementById('input-salary');

// Handle click button.
sendSalary.addEventListener('click', (e) => {
  if (inputSalary.value !== '') {
    let alert = document.getElementsByClassName('alert');
    if (alert.length > 0) {
      alert[0].classList.remove('hidden');
    }
    e.preventDefault();
  }
});

let alertDel = document.querySelectorAll('.alert-del');
alertDel.forEach((btnClose) =>
  btnClose.addEventListener('click', function () {
    btnClose.parentElement.classList.add('hidden');
  })
);
