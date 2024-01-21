import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll.js';
import AccentTypographyBuild from './modules/animation-text.js';
import prizes from './modules/prizes.js';
import GameScreen from './modules/game-screen.js';
import NumberAnimation from './modules/number-prizes.js';

mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
prizes();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  document.body.classList.add(`loaded`);
});

const gameScreen = new GameScreen();
gameScreen.init();

const animateIntroTitle = () => new AccentTypographyBuild(`.intro__title`, 700, `show-text`, `transform`, false, 0);
const animateIntroDate = () => new AccentTypographyBuild(`.intro__date`, 700, `show-text`, `transform`, true, 700);
const animateHistoryTitle = () => new AccentTypographyBuild(`.slider__item-title`, 700, `show-text`, `transform`, true, 0);
const animatePrizesTitle = () => new AccentTypographyBuild(`.prizes__title`, 700, `show-text`, `transform`, true, 1000);

animateIntroTitle();
animateIntroDate();
animateHistoryTitle();
animatePrizesTitle();

const journeysAnimation = new NumberAnimation(document.querySelector(`.prizes-count--journeys`), 3, 1);
const casesAnimation = new NumberAnimation(document.querySelector(`.prizes-count--cases`), 7, 1);
const codesAnimation = new NumberAnimation(document.querySelector(`.prizes-count--codes`), 900, 180);
codesAnimation.setCountCurrent(11);

setTimeout(() => casesAnimation.animate(), 2000);
setTimeout(() => codesAnimation.animate(), 6000);
setTimeout(() => journeysAnimation.animate(), 10000);
