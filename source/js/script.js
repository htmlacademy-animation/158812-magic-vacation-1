// modules
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

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

window.addEventListener(`load`, () => {
  document.body.classList.add(`loaded`);
});

const animationIntroTitle = new AccentTypographyBuild(`.intro__title`, 700, `show-text`, `transform`, false, 0);
const animationIntroDate = new AccentTypographyBuild(`.intro__date`, 700, `show-text`, `transform`, true, 700);
const animationHistoryTitle = new AccentTypographyBuild(`.slider__item-title`, 700, `show-text`, `transform`, true, 0);
const animationPrizesTitle = new AccentTypographyBuild(`.prizes__title`, 700, `show-text`, `transform`, true, 1000);

function animationStarting() {
  switch (document.location.hash) {
    case `#prizes`:
      const svg = document.getElementById(`primaryAnimation`);
      const animation = document.getElementById(`airshipSceneFadeOutAnimation`);
      if (svg && animation) {
        animation.endElement();
        svg.setCurrentTime(0);
        animation.beginElement();
      }
      break;
    default:
      break;
  }
}
animationStarting();
