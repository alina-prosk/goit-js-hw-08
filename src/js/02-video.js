import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, { muted: true, autoplay: true });
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(function getTime (e) {
    const currentSecond = JSON.stringify(e.seconds);

    localStorage.setItem(LOCALSTORAGE_KEY, currentSecond);
}), 1000);
    
const timeLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

player.setCurrentTime(timeLocalStorage);

const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);
if (savedTime) {
    const timeFromLocalStor = JSON.parse(savedTime);

    player.setCurrentTime(timeFromLocalStor);
}
