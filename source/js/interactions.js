// This is for interactions necessary for showing how patterns work in patternlibrary.
// Actual interactions will be handled by Angular or React in the platform

class SideNav {
  constructor() {
    this.initListeners();
  }

  initListeners() {
    if (document.querySelectorAll(".side-nav")) {
      const sideNav = document.querySelector(".side-nav__toggle");
      sideNav.addEventListener("click", () => console.log("hi"));
    }
  }
}

const nav = new SideNav();
