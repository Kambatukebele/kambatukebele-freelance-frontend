const TOGGLE_MENU_ON_SMALL_SCREEN = () => {
  const HAMBURGER_MENU = document.querySelector(".header--hamburger-icon");
  const CLOSE_MENU = document.querySelector(".header--close-icon");
  const NAVIGATION_MENU = document.querySelector(".header--ul");

  const TOGGLE = () => {
    if (!HAMBURGER_MENU.classList.contains("hidden")) {
      HAMBURGER_MENU.classList.add("hidden");
      CLOSE_MENU.classList.remove("hidden");
      NAVIGATION_MENU.classList.remove("hidden");
    } else if (!CLOSE_MENU.classList.contains("hidden")) {
      HAMBURGER_MENU.classList.remove("hidden");
      CLOSE_MENU.classList.add("hidden");
      NAVIGATION_MENU.classList.add("hidden");
    }
  };
  HAMBURGER_MENU.addEventListener("click", TOGGLE);
  CLOSE_MENU.addEventListener("click", TOGGLE);
};

TOGGLE_MENU_ON_SMALL_SCREEN();
