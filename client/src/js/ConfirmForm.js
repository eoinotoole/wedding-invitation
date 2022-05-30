import RsvpForm from "./RsvpForm";

class ConfirmForm extends RsvpForm {
  bindClickOnSubmitButton(handler) {
    this._getActionButtons().forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const action = e.target.getAttribute("data-action");

        if (action === "edit") {
          handler(3);
          return;
        }
        handler(2);
      });
    });
  }

  _getSubHeadingMarkup() {
    return `<p>Please confirm your choices for ${this._currentGuestName}</p>`;
  }

  _getBodyMarkup() {
    return ``;
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
                    <button class="button rsvp-form__button" data-action="edit">Edit choices</button>
                    <button class="button rsvp-form__button" data-action="confirm">Confirm</button>
                </div>
            </form>
        </div>`;
  }
}

export default ConfirmForm;
