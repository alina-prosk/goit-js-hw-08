import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(function getTime (e) {
    const currentSecond = JSON.stringify(e.seconds);

    localStorage.setItem(LOCALSTORAGE_KEY, currentSecond);
}), 1000);
    
const timeLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

player.setCurrentTime(timeLocalStorage);

