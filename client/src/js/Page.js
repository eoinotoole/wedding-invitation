import Modal from "./Modal";
import Rsvp from "./Rsvp";

class Page {
  _container = null;
  _modal = null;
  _rsvp = null;

  constructor() {
    this._container = document.querySelector(".page");
    this._modal = new Modal();
    // TODO: handle better
    if (!this._container) throw new Error("NO PAGE FOUND");
    this.setRsvpTriggers();
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
}

export default new Page();
