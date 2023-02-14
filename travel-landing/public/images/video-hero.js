// Intersection for play button and youtube player
let tag = document.createElement('script');
let firstScriptTag = document.getElementsByTagName('script')[0];
let player;
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('close');
let iframeWrapper = document.getElementById('banner-video');
let iframe = document.getElementById('player');

// 2. This code loads the IFrame Player API code asynchronously.
document
  .getElementById('play')
  .addEventListener('mouseover', addTagYoutube);

function addTagYoutube() {
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.defer = true;
}

// 3. This function creates an <iframe> (and YouTube player)
// after the API code downloads.
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
playButton.addEventListener('click', play);
pauseButton.addEventListener('click', pause);

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  player = event.target;
  event.target.playVideo();
  playButton.classList.add('hidden');
  pauseButton.classList.remove('hidden');
  pauseButton.classList.add('block');
}

function pause() {
  if (player && player.pauseVideo) {
    player.pauseVideo();
    playButton.classList.remove('hidden');
    pauseButton.classList.remove('block');
    pauseButton.classList.add('hidden');
  }
}

function play() {
  if (!iframe) {
    // Create iframe once loading
    iframe = document.createElement('iframe');
    playButton.classList.add('hidden');
    iframe.allowfullscreen = '';
    iframe.allow =
      'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.frameborder = '0';
    iframe.id = 'player';
    iframe.class = 'vid';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.title = 'AgilityIO - Life at Agility Vietnam';
    iframe.style = 'border: 0';
    iframe.setAttribute(
      'src',
      'https://www.youtube-nocookie.com/embed/ci9QZbNLct0?enablejsapi=1'
    );
    iframeWrapper.appendChild(iframe);

    // Initialize player to control when play/pause
    new YT.Player('player', {
      videoId: 'ci9QZbNLct0',
      events: {
        onReady: onPlayerReady
      }
    });
    iframe.focus();
  }
  if (player && player.playVideo) {
    player.playVideo();
  }
}
