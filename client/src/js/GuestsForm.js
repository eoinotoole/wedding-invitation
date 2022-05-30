import RsvpForm from "./RsvpForm";

class GuestsForm extends RsvpForm {
  _addEventListeners() {
    super._addEventListeners();
    const form = this._getForm();
    const startSelectionButtons = Array.from(
      form.querySelectorAll(".rsvp-form--guest-actions__selection")
    );
    startSelectionButtons.forEach((button) =>
      button.addEventListener(
        "click",
        this.__handleStartSelectionButtonClick.bind(this)
      )
    );
  }

  _getSubHeadingMarkup() {
    return "Please make a selection for each guest attending";
  }

  _getBodyMarkup() {
    const guests = this._answers.getGuests();
    return guests.reduce((total, current) => {
      total += `
        <div class="rsvp-form__separation-wrap">
            <div class="rsvp-form__element">
            <input class="rsvp-form__guest-input" type="text" value="${current.getName()}" readonly>
            </div> 
            <div class="rsvp-form__element">
                <ul class="rsvp-form-guest-actions">
                    ${this._getGuestActions(current.getName())}
                </ul>
            </div>
        </div>
        `;
      return total;
    }, "");
  }

  __handleStartSelectionButtonClick(e) {
    const targetedGuest = e.target.getAttribute("data-guest");
    console.log(targetedGuest);
  }

  _getGuestActions(guestName) {
    const guest = this._answers
      .getGuests()
      .find((guest) => guest.getName() === guestName);
    const hasMadeSelection = Boolean(guest.getMenu());

    if (hasMadeSelection)
      return `<li><span>Choose dishes</span></li><li><button class="rsvp-form--guest-actions__selection" data-guest="${guestName}">Edit choices</button></li>`;

    return `<li><button class="rsvp-form--guest-actions__selection" data-guest="${guestName}">Choose dishes</button></li>`;
  }

  _getFormMarkup(formContent) {
    return `
        <div class="rsvp">
           ${this._getHeadingMarkup()}
           ${this._getSubHeadingMarkup()}
            <form class="rsvp-form">
                <div class="rsvp-form__content">
                  ${formContent}
                </div>
                <button class="button rsvp-form__button" disabled>Submit</button>
            </form>
        </div>`;
  }
}

export default GuestsForm;
