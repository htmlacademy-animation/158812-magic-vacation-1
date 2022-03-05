export default () => {
  let header = document.querySelector(`.js-header`);
  let menuToggler = document.querySelector(`.js-menu-toggler`);
  let menuLinks = document.querySelectorAll(`.js-menu-link`);
  let screenBackground = document.querySelector(`.js-screen-bg`);

  if (menuToggler) {
    menuToggler.addEventListener(`click`, function () {
      if (header.classList.contains(`page-header--menu-opened`)) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      } else {
        header.classList.add(`page-header--menu-opened`);
        document.body.classList.add(`menu-opened`);
      }
    });
  }

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener(`click`, function () {
      document.body.classList.remove(`dark-blue`, `light-blue`, `light-purple`, `dark-purple`);

      if (this.dataset.href === `story`) {
        document.body.classList.add(`light-purple`);
      }

      if (window.innerWidth < 1025) {
        header.classList.remove(`page-header--menu-opened`);
        document.body.classList.remove(`menu-opened`);
      }

      if (this.dataset.href === `prizes`) {
        screenBackground.classList.add(`screen-background--active`);
        setTimeout(()=>{
          screenBackground.classList.remove(`screen-background--active`);
        }, 1000);
      }
    });
  }

};
