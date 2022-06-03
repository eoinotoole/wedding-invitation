import RsvpForm from "./RsvpForm";

class GuestsForm extends RsvpForm {
  bindClickOnSubmitButton(handler) {
    this._getActionButton().addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  }

  bindClickOnStartSelection(handler) {
    const startSelectionButtons = Array.from(
      this._form.querySelectorAll(".rsvp-form--guest-actions__selection")
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
        <div class="form__separation-wrap">
            <div class="form__element form__element--guests">
            <input class="rsvp-form__guest-input" type="text" value="${current.getName()}" readonly>
            </div> 
            <div class="form__element">
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
        <form class="form form--rsvp">
            <div class="form__content form__content--rsvp">
                ${formContent}
            </div>
            <div class="form__button-container form__button-container--rsvp">
                ${this._getSubmitButton()}
            </div>
        </form>
    </div>`;
  }

  _getSubmitButton() {
    const guests = this._answers.getGuests();
    const isSelectionProcessDone = guests.reduce((final, current) => {
      let isDone = final;
      if (!Boolean(current.getMenu())) isDone = false;
      return isDone;
    }, true);

    return isSelectionProcessDone
      ? '<button class="button button--rsvp form__button">Submit</button>'
      : '<button class="button button--rsvp form__button" disabled>Submit</button>';
  }
}

export default GuestsForm;
