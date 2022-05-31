class RsvpForm {
  _currentGuestName;
  _answers;
  _container;
  _hasValidationErrors = false;

  constructor(currentGuestName, answers) {
    this._currentGuestName = currentGuestName;
    this._answers = answers;
    this._container = document.querySelector(".rsvp-container");
    this.render();
    this._addEventListeners();
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

  _addEventListeners() {
    const form = this._getForm();
    const inputs = Array.from(form.querySelectorAll("input"));
    const textAreas = Array.from(form.querySelectorAll("textarea"));
    const combinedInputs = [...inputs, ...textAreas];

    combinedInputs.forEach((input) =>
      input.addEventListener("focus", this._handleFocusOnInput.bind(this))
    );
    form.addEventListener("submit", (e) => e.preventDefault());
  }

  _removeEventListeners() {
    const form = this._getForm();
    const inputs = Array.from(form.querySelectorAll("input"));
    const textAreas = Array.from(form.querySelectorAll("textarea"));
    const combinedInputs = [...inputs, ...textAreas];

    form.removeEventListener("submit", (e) => e.preventDefault());
    combinedInputs.forEach((input) =>
      input.removeEventListener("focus", this._handleFocusOnInput.bind(this))
    );
  }

  _handleActionButtonClick() {
    this._saveAnswers();
  }

  _handleFocusOnInput() {
    this._clearValidationErrors();
  }

  _getCurrentGuest() {
    return this._answers
      .getGuests()
      .find((guest) => guest.getName() === this._currentGuestName);
  }

  _clearValidationErrors() {
    const form = this._getForm();
    const validationErrorNodes = this._getValidationErrorNodes();

    if (validationErrorNodes.length < 1) return;

    validationErrorNodes.forEach((node) => {
      const parent = node.parentElement;
      parent.removeChild(node);
    });

    this._setHasValidationErrors(false);
  }

  _getValidationErrorNodes() {
    const form = this._getForm();
    return Array.from(form.querySelectorAll(".rsvp-form__validation-error"));
  }

  _getFormMarkup(formContent) {
    return `
        <div class="rsvp">
            <div class="rsvp__top">
            ${this._getHeadingMarkup()}
            ${this._getSubHeadingMarkup()}
           </div>
            <form class="rsvp-form" autocomplete="off">
                <div class="rsvp-form__content">
                  ${formContent}
                </div>
                <div class="rsvp-form-button-container">
                    <button class="button rsvp-form__button">Next</button>
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

  _getForm() {
    return document.querySelector(".rsvp-form");
  }

  _getActionButton() {
    return document.querySelector(".rsvp-form__button");
  }

  _getActionButtons() {
    return Array.from(document.querySelectorAll(".rsvp-form__button"));
  }

  _getHasValidationErrors() {
    return this._hasValidationErrors;
  }

  _setHasValidationErrors(hasValidationErrors) {
    this._hasValidationErrors = hasValidationErrors;
  }

  _validateFields() {
    const form = this._getForm();
    const inputs = Array.from(form.querySelectorAll("input"));
    const textAreas = Array.from(form.querySelectorAll("textarea"));
    this._validateInputs(inputs);
  }

  _validateInputs(inputs) {
    const textInputs = inputs.filter((input) => input.type === "text");
    const emailInput = inputs.find((input) => input.type === "email");

    // errors already showing - must be cleared first
    if (this._getHasValidationErrors()) return;

    this._validateTextInputs(textInputs);
    this._validateEmailInput(emailInput);
    this._validateRadioInputs();
  }

  _validateTextInputs(textInputs) {
    if (textInputs.length < 1) return;
    textInputs.forEach((input) => this._validateTextInput(input));
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
      validNameAttributes.includes(name) &&
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
    const form = this._getForm();
    const textInputs = Array.from(form.querySelectorAll("input"))
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

  _isValidNameInput(input) {
    const { value } = input;
    const isValidLength = value.length > 5;
    const hasValidChars = value.match(/^[A-Za-z\s&']+$/);

    if (!isValidLength || !hasValidChars) return false;
    return true;
  }

  _validateRadioInputs() {
    const form = this._getForm();
    const radioContainers = Array.from(
      form.querySelectorAll(".rsvp-form__checkers")
    );
    radioContainers.forEach((container) => {
      const inputs = Array.from(container.querySelectorAll("input"));
      const hasSelection = inputs.some((input) => input.checked);
      if (!hasSelection) {
        this._setHasValidationErrors(true);
        this._displayValidationError(container, "This field is required");
      }
    });
  }

  _validateEmailInput(input) {
    if (!input) return;
    const hasValidChars = input.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (input.value.length < 1) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "This field is required");
      return;
    }

    if (!hasValidChars) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "Please input a valid email");
    }
  }

  _displayValidationError(node, message) {
    const parent = node.parentElement;
    const validationElement = this._createValidationErrorElement(message);
    parent.appendChild(validationElement);
  }

  _createValidationErrorElement(message) {
    const element = document.createElement("span");
    element.classList.add("rsvp-form__validation-error");
    element.innerText = message;
    return element;
  }
}

export default RsvpForm;
