import Modal from "./Modal";
import Nav from "./Nav";
import Rsvp from "./Rsvp";
import FaqList from "./FaqList";
import Countdown from "./Countdown";
import ContactForm from "./ContactForm";
import { createCustomEvents } from "./utils/global-events";

class Page {
  _container = null;
  _modal = null;
  _rsvp = null;

  constructor() {
    this._container = document.querySelector(".page");
    this._modal = new Modal();
    new Nav();

    this.setRsvpTriggers();
    window.addEventListener(
      "modalClose",
      this._handleModalCloseEvent.bind(this)
    );
    createCustomEvents();
    this._initPage();
  }

  _initPage() {
    const page = window.location.pathname.split("/")[1];
    switch (page) {
      case "":
        new Countdown();
        return;
      case "contact":
        new ContactForm().init();
        return;
      case "faqs":
        new FaqList();
        return;
      default:
        return;
    }
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
