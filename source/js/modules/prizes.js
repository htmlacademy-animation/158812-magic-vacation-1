export default () => {
  const primaryPrize = document.querySelector(`.prizes__item--journeys`);
  const primaryPrizeImage = primaryPrize.querySelector(`.prizes__image`);

  primaryPrize.addEventListener(`animationstart`, () => {
    primaryPrizeImage.data = primaryPrizeImage.dataset.src;
  });

  const secondaryPrize = document.querySelector(`.prizes__item--cases`);
  const secondaryPrizeImage = secondaryPrize.querySelector(`.prizes__image`);

  secondaryPrize.addEventListener(`animationstart`, () => {
    secondaryPrizeImage.data = secondaryPrizeImage.dataset.src;
  });
};
