const BUTTON_CLASS_SELECTOR = ".menu-button";
const PAGE_CLASS_SELECTOR = ".page";
const ANIMATION_CLASS = "menu-in";

const button = document.querySelector(BUTTON_CLASS_SELECTOR);

button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  //   const isMenuActive = Boolean(getMenuFromDom());

  //   if (isMenuActive) {
  //     // removeMenuFromDOM();
  //     return;
  //   }

  runAnimationIn();
}

function removeMenuFromDOM() {
  const menu = getMenuFromDom();

  if (!menu) return;
  menu.remove();
}

function getMenuFromDom() {
  return document.querySelector(".menu");
}

function getPageFromDom() {
  return document.querySelector(PAGE_CLASS_SELECTOR);
}

function runAnimationIn() {
  const menu = getMenuFromDom();
  console.log(menu);
  if (!menu) return;

  menu.style.backgroundColor = "#eee";
  menu.classList.add(ANIMATION_CLASS);
}
