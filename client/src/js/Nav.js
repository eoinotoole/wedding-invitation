const ICON = "/static/images/icon-menu.svg";
const ICON_CLOSE = "/static/images/icon-close.svg";

class Nav {
  _container;
  _navButton;
  _navList;

  constructor() {
    this._container = document.querySelector(".nav");
    this._navButton = document.querySelector(".nav__button");
    this._navList = document.querySelector(".nav__list");
    this._init();
  }

  _init() {
    this._highlightCurrentLink();
    this._addEventListeners();
  }

  _addEventListeners() {
    window.addEventListener("resize", this._handleResizeEvent.bind(this));
    this._navButton.addEventListener(
      "click",
      this._handleNavButtonClick.bind(this)
    );
  }

  _handleResizeEvent() {
    const viewPortWidth = window.innerWidth;
    if (viewPortWidth > 900) this._resetMobileNav();
  }

  _resetMobileNav() {
    this._navList.style.maxHeight = "0px";
    this._container.classList.remove("nav--mobile-active");
    this._navButton.classList.remove("nav__button--active");
    this._updateButtonIcon(true);
  }

  _updateButtonIcon(isActive) {
    const buttonIcon = document.createElement("img");
    buttonIcon.setAttribute("alt", "Navigation menu button");
    buttonIcon.setAttribute("src", isActive ? ICON : ICON_CLOSE);
    this._navButton.removeChild(this._navButton.childNodes[0]);
    this._navButton.appendChild(buttonIcon);
  }

  _handleNavButtonClick(e) {
    e.preventDefault();
    const isActive = String(this._navButton.classList).includes("active");
    this._navButton.classList.toggle("nav__button--active");
    this._updateButtonIcon(isActive);

    if (isActive) {
      this._navList.style.maxHeight = "0px";
      setTimeout(() => {
        this._container.classList.remove("nav--mobile-active");
      }, 200);
      return;
    }

    this._container.classList.add("nav--mobile-active");
    this._navList.style.maxHeight = `${this._navList.scrollHeight}px`;
  }

  _highlightCurrentLink() {
    const path = window.location.pathname.split("/")[1] || "home";
    const currentLink = this._container.querySelector(
      `.nav-list__link[data-nav-name="${path}"]`
    );
    currentLink.classList.add("active");
  }
}

export default Nav;
