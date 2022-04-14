export default () => {
  const primaryPrize = document.querySelector(`.prizes__item--journeys`);
  const primaryPrizeImage = primaryPrize.querySelector(`.prizes__image`);

  primaryPrize.addEventListener(`animationstart`, () => {
    primaryPrizeImage.data = primaryPrizeImage.dataset.src;
  });
};
