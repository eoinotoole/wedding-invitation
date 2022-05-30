import RsvpForm from "./RsvpForm";

class GuestsForm extends RsvpForm {
  bindClickOnStartSelection(handler) {
    const form = this._getForm();
    const startSelectionButtons = Array.from(
      form.querySelectorAll(".rsvp-form--guest-actions__selection")
    );
    startSelectionButtons.forEach((button) =>
      button.addEventListener("click", (e) => {
        const targetedGuest = e.target.getAttribute("data-guest");
        handler(targetedGuest);
      })
    );
  }

  _getSubHeadingMarkup() {
    return "<p>Please make a selection for each guest attending</p>";
  }

  _getBodyMarkup() {
    const guests = this._answers.getGuests();
    return guests.reduce((total, current) => {
      total += `
        <div class="rsvp-form__separation-wrap">
            <div class="rsvp-form__element rsvp-form__element--guests">
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

  _getGuestActions(guestName) {
    const guest = this._answers
      .getGuests()
      .find((guest) => guest.getName() === guestName);
    const hasMadeSelection = Boolean(guest.getMenu());

    if (hasMadeSelection)
      return `<li class="rsvp-form-guest-actions__item"><span>Selection complete</span></li><li><button class="rsvp-form--guest-actions__selection" data-guest="${guestName}">Edit choices</button></li>`;

    return `<li class="rsvp-form-guest-actions__item"><button class="rsvp-form--guest-actions__selection" data-guest="${guestName}">Choose dishes</button></li>`;
  }

  _getFormMarkup(formContent) {
    return `
    <div class="rsvp">
        <div class="rsvp__top">
           ${this._getHeadingMarkup()}
           ${this._getSubHeadingMarkup()}
        </div>
        <form class="rsvp-form">
            <div class="rsvp-form__content">
                ${formContent}
            </div>
            <div class="rsvp-form-button-container">
                <button class="button rsvp-form__button" disabled>Submit</button>
            </div>
        </form>
    </div>`;
  }
}

export default GuestsForm;
