import Form from "./Form";

class RsvpForm extends Form {
  _currentGuestName;
  _answers;
  _container;

  constructor(currentGuestName, answers) {
    super();
    this._currentGuestName = currentGuestName;
    this._answers = answers;
  }

  init() {
    this._container = document.querySelector(".rsvp-container");
    this.render();
    super.init();
  }

  destroy() {
    this._container.innerHTML = "";
  }

  render() {
    this._container.innerHTML = this._getFormMarkup(
      this._getBodyMarkup(this._answers)
    );
  }

  bindClickOnSubmitButton(handler) {
    this._getActionButton().addEventListener("click", (e) => {
      e.preventDefault();
      this._clearValidationErrors();
      this._validateFields();
      if (this._getHasValidationErrors()) return;
      this._handleActionButtonClick();
      handler();
    });
  }

  _handleActionButtonClick() {
    this._saveAnswers();
  }

  _getCurrentGuest() {
    return this._answers
      .getGuests()
      .find((guest) => guest.getName() === this._currentGuestName);
  }

  _getFormMarkup(formContent) {
    return `
        <div class="rsvp">
            <div class="rsvp__top">
            ${this._getHeadingMarkup()}
            ${this._getSubHeadingMarkup()}
           </div>
            <form class="form form--rsvp" autocomplete="off">
                <div class="form__content form__content--rsvp">
                  ${formContent}
                </div>
                <div class="form__button-container form__button-container--rsvp">
                    <button class="button button--rsvp form__button">Next</button>
                </div>
            </form>
        </div>`;
  }

  _getHeadingMarkup() {
    return `<h3 class="rsvp__heading">Wedding Menu</h3>`;
  }

  _getSubHeadingMarkup() {
    return "";
  }

  _validateTextInput(input) {
    const { value, name } = input;
    const validNameAttributes = ["name", "secondaryName"];

    if (value.length < 1) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "This field is required");
      return;
    }

    if (validNameAttributes.includes(name) && !this._isValidNameInput(input)) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "Please input a valid name");
      return;
    }

    if (
      validNameAttributes.includes(input.name) &&
      this._isDuplicateGuestInput(input)
    ) {
      this._setHasValidationErrors(true);
      this._displayValidationError(
        input,
        "Please only insert each person once"
      );
    }
  }

  _isDuplicateGuestInput(input) {
    const textInputs = Array.from(this._form.querySelectorAll("input"))
      .filter(
        (input) =>
          (input.type === "text" && input.name === "name") ||
          input.name === "secondaryName"
      )
      .filter((i) => i.value === input.value);
    return textInputs.length > 1;
  }

  _isMenuInputChecked(name, value) {
    const currentGuest = this._getCurrentGuest();
    return currentGuest.getField(name) === value;
  }
}

export default RsvpForm;
