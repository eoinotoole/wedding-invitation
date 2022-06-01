import Modal from "./Modal";
import Rsvp from "./Rsvp";
import FaqList from "./FaqList";
import { createCustomEvents } from "./utils/global-events";

class Page {
  _container = null;
  _modal = null;
  _rsvp = null;

  constructor() {
    this._container = document.querySelector(".page");
    this._modal = new Modal();
    new FaqList();

    this.setRsvpTriggers();
    window.addEventListener(
      "modalClose",
      this._handleModalCloseEvent.bind(this)
    );
    createCustomEvents();
  }

  setRsvpTriggers() {
    const rsvpTriggers = this._container.querySelectorAll(".rsvp-trigger");
    rsvpTriggers.forEach((trigger) =>
      trigger.addEventListener(
        "click",
        this.handleTriggerButtonClick.bind(this)
      )
    );
  }

  handleTriggerButtonClick() {
    this._modal.build("rsvp-container");
    this._rsvp = new Rsvp();
  }

  _handleModalCloseEvent() {
    this._modal.destroy();
    this._rsvp = null;
  }
}

export default new Page();
