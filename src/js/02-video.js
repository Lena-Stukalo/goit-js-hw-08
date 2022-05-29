import vimeoPlayer from '@vimeo/player';
const throttle = require('lodash.throttle');

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlayTimeSet, 1000));

onPlayTimeGet();

function onPlayTimeSet(e) {
  localStorage.setItem(STORAGE_KEY, e.seconds);
}

function onPlayTimeGet() {
  const currentSecond = localStorage.getItem(STORAGE_KEY);
  if (currentSecond) {
    player
      .setCurrentTime(currentSecond)
      .then(function (seconds) {
        // seconds = the actual time that the player seeked to
      })
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

          default:
            // some other error occurred
            break;
        }
      });
  }
}
