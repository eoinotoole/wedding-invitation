const FADE_ANIMATION_TIME = 200;

class Modal {
  _container = null;
  _modal = null;

  constructor() {
    this._container = document.querySelector(".modal-container");
  }

  _isActive() {
    return Boolean(this._modal);
  }

  build(contentContainerClass) {
    if (this._isActive()) return;

    document.querySelector("body").classList.add("modal-active");

    this._modal = document.createElement("div");
    this._modal.classList.add("modal");

    const modalContainer = document.createElement("div");
    modalContainer.classList.add("modal__content");
    const contentContainer = document.createElement("div");
    contentContainer.classList.add(contentContainerClass);
    modalContainer.appendChild(contentContainer);

    this._modal.appendChild(modalContainer);
    this._modal.addEventListener(
      "click",
      this._handleActiveModalClick.bind(this)
    );
    this._container.appendChild(this._modal);
    setTimeout(this._fade.bind(this));
  }

  destroy() {
    if (!this._isActive()) return;
    this._fade();
    setTimeout(() => {
      document.querySelector("body").classList.remove("modal-active");
      this._container.removeChild(this._modal);
      this._modal = null;
    }, FADE_ANIMATION_TIME);
  }

  _fade() {
    const isActive = Boolean(this._modal.classList.contains("active"));

    if (!isActive) {
      this._modal.classList.add("active");
      return;
    }
    this._modal.classList.remove("active");
  }

  _handleActiveModalClick(e) {
    const isClickOutsideContent = e.target === this._modal;
    if (isClickOutsideContent) this.destroy();
  }
}

export default Modal;
