export default () => {
  const primaryPrize = document.querySelector(`.prizes__item--journeys`);
  const primaryPrizeImage = primaryPrize.querySelector(`.prizes__image`);
  const secondaryPrize = document.querySelector(`.prizes__item--cases`);
  const secondaryPrizeImage = secondaryPrize.querySelector(`.prizes__image`);
  const additionalPrize = document.querySelector(`.prizes__item--codes`);
  const additionalPrizeImage = additionalPrize.querySelector(`.prizes__image`);

  const animatePrimaryPrize = () => {
    primaryPrizeImage.data = primaryPrizeImage.dataset.src;
  };

  const animateSecondaryPrize = () => {
    secondaryPrizeImage.data = secondaryPrizeImage.dataset.src;
  };

  const animateAdditionalPrize = () => {
    additionalPrizeImage.data = additionalPrizeImage.dataset.src;
  };

  primaryPrize.addEventListener(`animationstart`, () => {
    animatePrimaryPrize();
    secondaryPrize.removeEventListener(`animationstart`, animateSecondaryPrize);
    additionalPrize.removeEventListener(`animationstart`, animateAdditionalPrize);
  });

  secondaryPrize.addEventListener(`animationstart`, () => {
    animateSecondaryPrize();
    primaryPrize.removeEventListener(`animationstart`, animatePrimaryPrize);
    additionalPrize.removeEventListener(`animationstart`, animateAdditionalPrize);
  });

  additionalPrize.addEventListener(`animationstart`, () => {
    animateAdditionalPrize();
    primaryPrize.removeEventListener(`animationstart`, animatePrimaryPrize);
    secondaryPrize.removeEventListener(`animationstart`, animateSecondaryPrize);
  });
};
