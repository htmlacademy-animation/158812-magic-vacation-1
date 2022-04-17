export default () => {

  //главный приз
  const primaryPrize = document.querySelector(`.prizes__item--journeys`);
  const primaryPrizeImage = primaryPrize.querySelector(`.prizes__image`);

  primaryPrize.addEventListener(`animationstart`, () => {
    primaryPrizeImage.data = primaryPrizeImage.dataset.src;
  });

  //второстепенный приз
  const secondaryPrize = document.querySelector(`.prizes__item--cases`);
  const secondaryPrizeImage = secondaryPrize.querySelector(`.prizes__image`);

  secondaryPrize.addEventListener(`animationstart`, () => {
    secondaryPrizeImage.data = secondaryPrizeImage.dataset.src;
  });

  //поощрительный приз
  const additionalPrize = document.querySelector(`.prizes__item--codes`);
  const additionalPrizeImage = additionalPrize.querySelector(`.prizes__image`);

  additionalPrize.addEventListener(`animationstart`, () => {
    additionalPrizeImage.data = additionalPrizeImage.dataset.src;
  });
};
