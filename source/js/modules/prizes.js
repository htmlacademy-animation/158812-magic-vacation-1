export default () => {

  function animationStarting() {
    switch (document.location.hash) {
      case `#prizes`:
        const svg = document.getElementById(`primaryAnimation`);
        const animation = document.getElementById(`primaryAnimationStart`);
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

  window.addEventListener(`load`, animationStarting);
  window.addEventListener(`hashchange`, animationStarting);
};
