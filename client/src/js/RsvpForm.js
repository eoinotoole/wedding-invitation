class RsvpForm {
  _answers;
  _container;
  _hasValidationErrors = false;

  constructor(answers) {
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
      this._validateFields();
      if (this._getHasValidationErrors()) return;
      handler();
    });
  }

  _addEventListeners() {
    const form = this._getForm();
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

  _handleFocusOnInput() {
    this._clearValidationErrors();
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
           ${this._getHeadingMarkup()}
           ${this._getSubHeadingMarkup()}
            <form class="rsvp-form">
                <div class="rsvp-form__content">
                  ${formContent}
                </div>
                <button class="button rsvp-form__button">Next</button>
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
    const radioInputs = inputs.filter((input) => input.type === "radio");

    // errors already showing - must be cleared first
    if (this._getHasValidationErrors()) return;

    this._validateTextInputs(textInputs);
    this._validateEmailInput(emailInput);
    this._validateRadioInputs(radioInputs);
  }

  _validateTextInputs(textInputs) {
    if (textInputs.length < 1) return;
    textInputs.forEach((input) => this._validateTextInput(input));
  }

  _validateTextInput(input) {
    const { value, name } = input;

    if (value.length < 1) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "This field is required");
      return;
    }

    if (name === "name" && !this._isValidNameInput(input)) {
      this._setHasValidationErrors(true);
      this._displayValidationError(input, "Please input a valid name");
      return;
    }
  }

  _isValidNameInput(input) {
    const { value } = input;
    const isValidLength = value.length > 5;
    const hasValidChars = value.match(/^[A-Za-z\s&']+$/);

    if (!isValidLength || !hasValidChars) return false;
    return true;
  }

  _validateRadioInputs(inputs) {}

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
